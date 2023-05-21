"use client";

import Layout from "@/components/CreatorLayout/Layout";
import React, { useState, useEffect, useCallback } from "react";
import GalleryImportIcon from "@/components/Icons/GalleryImportIcon";
import Loader from "@/components/Utils/Loader";
import useWeb3Auth from "@/hooks/useWeb3Auth";
import { usePathname } from "next/navigation";

import VideoAnalytics from "@/components/Tabs/VideoAnalytics";

const Edit = ({ params }) => {
    const pathname = usePathname();
    const [video, setVideo] = useState(null);
    const [statusText, setStatusText] = useState("");
    const [loading, setLoading] = useState(false);
    const [newData, setNewData] = useState({
        title: "",
        description: "",
        thumbnail: "",
    });
    const { account } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${
            pathname.match("creator") ? "creator" : "individual"
        }}`
    );
    const getVideo = useCallback(async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos/${params.id}`
            );
            const data = await res.json();

            console.log(data);
            if (res.ok) {
                setVideo(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getVideo();
    }, []);

    useEffect(() => {
        if (video) {
            setNewData({
                title: video.title,
                description: video.description,
                thumbnail: video.videoThumbnail,
            });
        }
    }, [video]);

    const updateVideo = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatusText("Updating video. Do not close this tab");

        let newThumbnail;

        try {
            const formData = new FormData();
            const upload = document.getElementById("thumbnail");
            if (upload.files[0]) {
                formData.append("thumbnail", upload.files[0]);

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/api/upload-thumbnail`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    setStatusText(
                        "Ohh! looks like there was an error. Try again"
                    );
                    setLoading(false);
                } else {
                    const { name } = data;

                    newThumbnail = `${process.env.NEXT_PUBLIC_VIDEO_API_URL}/${name}`;
                    console.log(name);
                }
            }

            const response2 = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos/${video.id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: newData.title,
                        description: newData.description,
                        videoThumbnail: newThumbnail || newData.thumbnail,
                        creatorId: account.userId,
                    }),
                }
            );

            if (!response2.ok) {
                setStatusText("Ohh! looks like there was an error. Try again");
                setLoading(false);
            } else {
                const data2 = await response2.json();

                if (data2.status) {
                    setStatusText("Video updated successfully");
                } else {
                    console.log(data2.message);
                    setStatusText(
                        "Ohh! looks like there was an error. Try again"
                    );
                }
            }
            setLoading(false);
        } catch (error) {
            setStatusText("Ohh! looks like there was an error. Try again");
            setLoading(false);
        }
    };

    const showPreview = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            document.getElementById("avatarImg").src = e.target.result;
        };

        reader.readAsDataURL(file);
    };

    return (
        <Layout>
            {video && (
                <div className="pb-20">
                    <div className="grow py-2 mb-3">
                        <div className="flex items-center justify-start gap-3">
                            <h1 className="text-xl font-medium">Video</h1>
                            <h1 className="text-xl font-medium">Edit video</h1>
                        </div>

                        <p className="text-[#7F8691] text-base">
                            Add your videos to zesha to start earning
                        </p>
                    </div>
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
                                    <form className="" onSubmit={updateVideo}>
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
                                                    className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                                    name="title"
                                                    autoComplete="off"
                                                    defaultValue={video?.title}
                                                    onChange={(e) =>
                                                        setNewData({
                                                            ...newData,
                                                            title: e.target
                                                                .value,
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
                                                    defaultValue={
                                                        video?.description
                                                    }
                                                    onChange={(e) =>
                                                        setNewData({
                                                            ...newData,
                                                            description:
                                                                e.target.value,
                                                        })
                                                    }
                                                    className="w-full px-4 mt-1 py-2 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                                ></textarea>
                                            </div>

                                            <div className="mb-6">
                                                <label
                                                    className="text-[#334155] text-sm font-medium mb-3"
                                                    htmlFor="upload_thumbnail"
                                                >
                                                    Thumbnail
                                                </label>
                                                <div className="flex items-center flex-row flex-wrap justify-start gap-3">
                                                    <div className="h-24 block relative w-32 object-cover">
                                                        <img
                                                            src={
                                                                video.videoThumbnail
                                                            }
                                                            className="w-full h-full rounded-lg object-cover"
                                                            id="avatarImg"
                                                        />
                                                    </div>
                                                    <div className="w-1/2 md:w-2/4 bg-white mt-1  relative overflow-hidden rounded py-3 border border-dashed border-[#CBD5E1] cursor-pointer">
                                                        <div className="flex items-center justify-between flex-col gap-3 w-full py-3  ">
                                                            <span className="text-[#046ED1]">
                                                                <GalleryImportIcon />
                                                            </span>
                                                            <input
                                                                onChange={
                                                                    showPreview
                                                                }
                                                                type="file"
                                                                name="thumbnail"
                                                                className="hidden"
                                                                id="thumbnail"
                                                                accept="image/*"
                                                            />
                                                            <span
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    document
                                                                        .getElementById(
                                                                            "thumbnail"
                                                                        )
                                                                        .click();
                                                                }}
                                                                className="text-[#046ED1] text-sm underline "
                                                            >
                                                                Change thumbnail
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-end justify-end gap-2 mt-4">
                                            {/* <a href="#" className="text-[#344054] bg-[#E8E8E9] px-7 py-3 rounded-lg text-sm transition duration-150 ease-in-out">
                                                Cancel
                                            </a> */}
                                            {!loading && (
                                                <button
                                                    type="submit"
                                                    className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                >
                                                    Update Video
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 block ">
                                <div className="rounded-lg p-2 lg:p-0 transition-all duration-200 ease-linear text-sm bg-[#fbfbff] ">
                                    <div className="py-6 px-6 h-full">
                                        <div className="mb-4">
                                            <h3 className="text-lg font-medium">
                                                Preview
                                            </h3>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="w-full h-48 relative block rounded-lg object-cover">
                                                <img
                                                    src={video.videoThumbnail}
                                                    alt={video.title}
                                                    className="w-full h-full rounded-lg object-cover"
                                                />
                                            </div>
                                            <div className="">
                                                <h4 className="text-[#344054] text-base font-medium">
                                                    {video.title}
                                                </h4>
                                            </div>

                                            <div>
                                                <h6 className="text-[#7F8691] text-sm mb-2">
                                                    Description
                                                </h6>
                                                <p className="text-[#344054] text-sm text-justify">
                                                    {video.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VideoAnalytics />
                </div>
            )}
        </Layout>
    );
};

export default Edit;
