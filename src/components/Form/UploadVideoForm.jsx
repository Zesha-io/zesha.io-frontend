"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import GalleryImportIcon from "@/components/Icons/GalleryImportIcon";
import { useRouter, usePathname } from "next/navigation";
import useWeb3Auth from "@/hooks/useWeb3Auth";
import Link from "next/link";
import slugify from "slugify";
import "./UploadVideoForm.css";
import Loader from "@/components/Utils/Loader";

export default function UploadVideoForm() {
    const [formData, setFormData] = useState({
        title: "How I use chicken manure to power my life",
        description:
            "Using biogas, he powers his home, car and boiler in order to shower and refill his fish pond. He showed us how and why he doesn't just use his chickens for eggs.",
        nft_collection: "",
    });

    const [videoKey, setVideoKey] = useState(null);
    const [signedUrl, setSignedUrl] = useState(null);
    const [videoId, setVideoId] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [duration, setDuration] = useState(null);
    const [size, setSize] = useState(null);
    const [statusText, setStatusText] = useState("");
    const [uploadProgress, setUploadProgress] = useState(0);

    const router = useRouter();
    const pathname = usePathname();
    const [redirectPage, setRedirectPage] = useState("/");
    const { account } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${
            pathname.match("creator") ? "creator" : "individual"
        }}`
    );
    const [loading, setLoading] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            setStatusText(
                "Preparing your video upload. Do not refresh this page"
            );

            const _videoKey = await uploadVideoToSpace();

            setStatusText(
                "We are generating a signed url to secure your uplaod"
            );

            const _signedUrl = await generateSigendUrl(_videoKey);

            setStatusText("We are generating metadata for your video");

            const _metadata = await generateVideoMetaData(_signedUrl);

            setStatusText("Transcoding your video. Do not refresh this page");

            console.log(_metadata);
        } catch (error) {
            console.log(error);
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        }
    }

    useEffect(() => {
        //@Temp
        // if(thumbnail) setUploadProgress(100);
        //@EndTemp

        if (thumbnail && duration && size) {
            uploadVideoToTheta(signedUrl);

            setStatusText(
                "We are finalizing your upload. Do not refresh this page"
            );
        }
    }, [thumbnail]);

    //@Temp comment out until Theta API is back online
    useEffect(() => {
        if (videoId) {
            checkTranscodingStatus(videoId);
        }
    }, [videoId]);

    useEffect(() => {
        if (uploadProgress === 100) {
            storeVideoResponse();
            setLoading(false);
        }
    }, [uploadProgress]);

    const clearForm = () => {
        setFormData({
            title: "",
            description: "",
            nft_collection: "",
        });
        setVideoKey(null);
        setSignedUrl(null);
        setVideoId(null);
        setThumbnail(null);
        setDuration(null);
        setSize(null);
    };

    //Step 1. Upload video to space
    const uploadVideoToSpace = async () => {
        const video = document.getElementById("video").files[0];
        const fD = new FormData();
        fD.append("video", video);
        fD.append("namespace", slugify(account.email ?? "global space"));

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/api/space-upload`,
            {
                method: "POST",
                body: fD,
            }
        );

        const data = await response.json();

        if (!response.ok) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        } else {
            const { key } = data;
            setVideoKey(key);

            if (key) {
                return key;
            } else {
                throw new Error("Cannot prepare video for upload");
            }
        }
    };

    //Step 2. Generate signed url
    const generateSigendUrl = async (_videoKey) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/api/generate-signed-url`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ key: _videoKey }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        } else {
            const { url } = data;
            setSignedUrl(url);

            if (url) {
                return url;
            } else {
                throw new Error("Signed url not generated");
            }
        }
    };

    //Step 4. Generate metadata
    const generateVideoMetaData = async (_signedUrl) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/api/get-video-metadata`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: _signedUrl }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        } else {
            const { thumbnail, duration, size } = data;
            setThumbnail(
                `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/${thumbnail}`
            );
            setDuration(duration);
            setSize(size);

            if (thumbnail) {
                return {
                    thumbnail: `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/${thumbnail}`,
                    duration,
                    size,
                };
            } else {
                throw new Error("Metadata cannot be generated");
            }
        }
    };

    //Step 4. Upload video to Theta
    const uploadVideoToTheta = async (_signedUrl) => {
        const payload = {
            url: _signedUrl,
            nft_collection: formData.nft_collection,
        };

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/api/upload-video-to-theta`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        } else {
            const { video_id } = data;
            setVideoId(video_id);

            if (video_id) {
                return video_id;
            } else {
                throw new Error("Cannot upload video to Thata. Try again");
            }
        }
    };

    //Step 5. Check transcoding status until progress = 100
    const checkTranscodingStatus = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/api/video-transcoding-status?video_id=${videoId}`
        );

        const data = await response.json();

        if (!response.ok) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        } else {
            const { progress } = data;

            setUploadProgress(progress);
            // console.log("Progress is: ", progress);
            // if (progress != "") {
            if (progress === 100) {
                setStatusText(
                    "Upload is complete. Preparing your video to be streamed on Zesha..."
                );
                return progress;
            } else {
                setTimeout(async () => {
                    checkTranscodingStatus(videoId);

                    if (progress < 100) {
                        setStatusText(
                            `We are finalizing your upload. ${progress}%`
                        );
                    }
                }, 5000);
            }
            // } else {
            //     throw new Error(
            //         "Cannot confirm transcoding status on Thata. Try again"
            //     );
            // }
        }
    };

    // Final step. Store video response
    const storeVideoResponse = async () => {
        const payload = {
            title: formData.title,
            description: formData.description,
            nftColletion: formData.nft_collection,
            videoUrl: signedUrl, //@Temp until Theta Video API is back
            // videoUrl: videoId,
            publishStatus: "PUBLISHED",
            creatorId: account.userId,
            channelId: account.channelId,
            videoThumbnail: thumbnail,
            videoLength: duration,
            videoSize: size,
        };

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            setStatusText(
                "We were unable to complete your video upload. Try again"
            );
        }

        if (data.status) {
            console.log(data);
            setStatusText(
                "Upload is complete. Your video is ready to be streamed on Zesha."
            );

            clearForm();
        } else {
            setStatusText(
                "We were unable to complete your video upload. Try again"
            );

            throw new Error(data.message);
        }
    };

    useEffect(() => {
        if (pathname.match("creator")) setRedirectPage("/creator");
        if (pathname.match("individual")) setRedirectPage("/individual");
    }, []);

    return (
        <div className="h-full w-full mb-6 py-6 ">
            {statusText && (
                <div className="w-full text-center py-4">
                    <div
                        className="w-full p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                        role="alert"
                    >
                        {loading && <Loader />}
                        <span className="font-semibold mr-2 text-left flex-auto">
                            {" "}
                            {statusText}
                        </span>
                    </div>
                </div>
            )}
            <div className="flex flex-wrap lg:flex-nowrap w-full gap-6 relative">
                <div className="w-full lg:w-8/12 space-detail">
                    <div>
                        <form className="" onSubmit={onSubmit}>
                            <div className="w-full bg-white px-8 py-4 rounded-lg">
                                <div className="mb-6 w-full text-[#334155]">
                                    <label
                                        className="font-medium mb-3 text-sm"
                                        htmlFor="title"
                                    >
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        max="40"
                                        className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                        name="title"
                                        autoComplete="off"
                                        value={formData.title || ""}
                                        required
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                title: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="mb-6 w-full text-[#334155]">
                                    <label
                                        className="font-medium mb-3 text-sm"
                                        htmlFor="title"
                                    >
                                        🔐 Token Gate NFT Collection (Testnet)
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        max="40"
                                        className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                        name="title"
                                        autoComplete="off"
                                        value={formData.nft_collection || ""}
                                        placeholder="0x0..."
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                nft_collection: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        className="text-[#334155] text-sm font-medium mb-3"
                                        htmlFor="description"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        rows={5}
                                        max="150"
                                        value={formData.description}
                                        required
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                description: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 mt-1 py-2 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                    ></textarea>
                                </div>

                                <div className="mb-6">
                                    <label
                                        className="text-[#334155] text-sm font-medium mb-3"
                                        htmlFor="upload_video"
                                    >
                                        Upload video
                                    </label>
                                    <div className="w-full bg-white mt-1  relative overflow-hidden rounded py-4 border border-dashed border-[#CBD5E1] cursor-pointer">
                                        <div className="flex items-center justify-between flex-col gap-3 w-full py-10  ">
                                            <input
                                                type="file"
                                                id="video"
                                                required
                                                accept="video/*"
                                                name="video"
                                            />
                                            <span className="text-[#046ED1]">
                                                <GalleryImportIcon />
                                            </span>
                                            <h5 className="text-sm text-[#7F8691] text-center">
                                                <span className="text-secondary text-center">
                                                    Supported video type : mp4,
                                                    mov, avi.
                                                </span>
                                                <br />
                                                <span className="text-secondary text-center">
                                                    <b className="w-full">
                                                        Max upload size 100mb
                                                    </b>
                                                </span>
                                            </h5>
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document
                                                        .getElementById("video")
                                                        .click();
                                                }}
                                                className="text-[#046ED1] text-sm underline "
                                            >
                                                Select video
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-end justify-end gap-2 mt-4">
                                {!loading && (
                                    <>
                                        <Link
                                            href={redirectPage}
                                            className="text-[#344054] bg-[#E8E8E9] px-7 py-3 rounded-lg text-sm transition duration-150 ease-in-out"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="submit"
                                            className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Upload Video
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="w-full lg:w-4/12 block ">
                    <div className="rounded-lg p-2 lg:p-0 md:sticky z-50 top-2 transition-all duration-200 ease-linear text-sm bg-[#fbfbff] ">
                        <div className="p-4 px-6 h-full">
                            <div className="mb-4">
                                <h3 className="text-lg font-medium">Preview</h3>
                            </div>

                            <div className="space-y-3">
                                <div className="w-full h-30 relative block rounded-lg object-cover">
                                    {thumbnail ? (
                                        <img
                                            src={thumbnail}
                                            className="w-full"
                                            alt="video thumbnail"
                                        />
                                    ) : (
                                        <div className="w-full  bg-white mt-1  relative overflow-hidden rounded py-4 border border-dashed border-[#CBD5E1] cursor-pointer">
                                            <div className="flex items-center justify-between flex-col gap-3 w-full py-4  ">
                                                <span className="text-[#046ED1]">
                                                    <GalleryImportIcon />
                                                </span>
                                                <span className="text-grey text-sm">
                                                    thumbnail preview
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {formData.title && (
                                    <div className="">
                                        <h4 className="text-[#344054] text-base font-medium">
                                            {formData.title}
                                        </h4>
                                    </div>
                                )}

                                {formData.description && (
                                    <div>
                                        <h6 className="text-[#7F8691] text-sm mb-2">
                                            Description
                                        </h6>
                                        <p className="text-[#344054] text-sm text-justify">
                                            {formData.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
