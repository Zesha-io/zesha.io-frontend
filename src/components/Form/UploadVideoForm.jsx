"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import GalleryImportIcon from "@/components/Icons/GalleryImportIcon";
import { useRouter, usePathname } from "next/navigation";
import useWeb3Auth from "@/hooks/useWeb3Auth";
import Link from "next/link";
import slugify from "slugify";

export default function UploadVideoForm() {
    const [formData, setFormData] = useState({
        title: "How I use chicken pop to power my life",
        description:
            "Using biogas, he powers his home, car and boiler in order to shower and refill his fish pond. He showed us how and why he doesn't just use his chickens for eggs.",
        signed_url: "",
        video_id: "",
        thumbnail: "",
        duration: "",
        size: "",
        account: "",
    });
    const [statusText, setStatusText] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    const [redirectPage, setRedirectPage] = useState("/");
    const { account } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${
            pathname.match("creator") ? "creator" : "individual"
        }}`
    );
    const [loading, setLoading] = useState(false);

    function onSubmit(e) {
        console.log("Form data", formData);
    }

    //Step 1. Upload video to space
    const uploadVideoToSpace = async () => {
        setStatusText("Stay back while we upload your video");

        const video = document.getElementById("video").files[0];
        const formData = new FormData();
        formData.append("video", video);
        formData.append("namespace", slugify(account.email ?? "global space"));

        const response = await fetch(process.env.NEXT_PUBLIC_VIDEO_API_URL, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        } else {
            setStatusText(
                "We are generating a signed url to secure your uplaod"
            );

            console.log("Video data", data);
            setFormData({ ...formData, key: data.key });
        }
    };

    //Step 2. Generate signed url
    const generateSigendUrl = async () => {};

    //Step 3. Upload video to Theta
    const uploadVideoToTheta = async () => {};

    //Step 4. Check transcoding status until progress = 100
    const checkTranscodingStatus = async () => {};

    useEffect(() => {
        if (pathname.match("creator")) setRedirectPage("/creator");
        if (pathname.match("individual")) setRedirectPage("/individual");

        setFormData({ ...formData, account: account });
    }, []);

    return (
        <div className="h-full w-full mb-6 py-6 ">
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
                                        value={formData.title}
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
                                        🔐 Token Gate NFT Address
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        max="40"
                                        className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                        name="title"
                                        autoComplete="off"
                                        value={formData.nft_address}
                                        placeholder="0x0..."
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                nft_address: e.target.value,
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
                                                className="hidden"
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
                                            <button className="text-[#046ED1] text-sm underline ">
                                                Select files
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="mb-6">
                                    <label
                                        className="text-[#334155] text-sm font-medium mb-3"
                                        htmlFor="upload_thumbnail"
                                    >
                                        Thumbnail
                                    </label>
                                    <div className="w-full md:w-1/4 bg-white mt-1  relative overflow-hidden rounded py-4 border border-dashed border-[#CBD5E1] cursor-pointer">
                                        <div className="flex items-center justify-between flex-col gap-3 w-full py-4  ">
                                            <input
                                                type="image"
                                                accept="image/png, image/jpeg"
                                                id="thumbnail"
                                                className="hidden"
                                            />
                                            <span className="text-[#046ED1]">
                                                <GalleryImportIcon />
                                            </span>
                                            <small className="text-secondary text-center">
                                                png/jpeg.
                                            </small>
                                            <button className="text-[#046ED1] text-sm underline ">
                                                Upload thumbnail
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="flex items-end justify-end gap-2 mt-4">
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
                                <div className="w-full h-48 relative block rounded-lg object-cover">
                                    {formData.video_url ? (
                                        <Image
                                            src={"/images/demoimage.png"}
                                            fill
                                            priority
                                            alt={`Picture of image`}
                                            className=" rounded-lg object-cover"
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
