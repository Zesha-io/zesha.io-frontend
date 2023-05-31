/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/CreatorLayout/Layout";
import useWeb3Auth from "@/hooks/useWeb3Auth";
import Loader from "@/components/Utils/Loader";

const Settings = () => {
    const { account } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/creator`
    );
    const [profile, setProfile] = useState(null);
    const [statusText, setStatusText] = useState("");
    const [loading, setLoading] = useState(false);
    const [newData, setNewData] = useState({
        name: "",
        email: "",
        channelName: "",
        channelDescription: "",
        channelLogo: "",
    });

    const getProfile = async (userId) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users?by=id&id=${userId}`
            );
            const data = await res.json();

            if (res.ok) {
                setProfile(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (account) {
            if (account.userId) getProfile(account.userId);
        }
    }, [account]);

    useEffect(() => {
        if (profile) {
            setNewData({
                name: profile.name,
                channelName: profile?.creatorchannel?.name,
                channelDescription: profile?.creatorchannel?.description,
                channelLogo: profile?.creatorchannel?.channelAvatar,
            });
        }
    }, [profile]);

    const updateChannel = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatusText("Updating profile. Do not close this tab");

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
                }
            }

            const response2 = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/${profile.id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...newData,
                        channelLogo: newThumbnail,
                    }),
                }
            );

            if (!response2.ok) {
                setStatusText("Ohh! looks like there was an error. Try again");
                setLoading(false);
            } else {
                const data2 = await response2.json();

                if (data2.status) {
                    setStatusText("Channel updated successfully");
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
            {profile && (
                <div className="pb-20">
                    <div className="grow py-2 mb-3">
                        <h1 className="text-xl font-medium">Settings</h1>
                        <p className="text-[#7F8691] text-base">
                            View all activities on your Zesha videos
                        </p>
                    </div>

                    <div className=" max-w-auto w-full xl:max-w-[600px] settings_form bg-white rounded-lg">
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
                        <div className="p-8   w-full md:w-4/5">
                            <form onSubmit={updateChannel}>
                                <div className="w-full">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">
                                            Profile
                                        </h3>
                                    </div>
                                    <div className="mb-6 w-full text-[#334155]">
                                        <label
                                            className="font-medium mb-3 text-sm"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                            name="name"
                                            autoComplete="off"
                                            defaultValue={profile.name}
                                            onChange={(e) =>
                                                setNewData({
                                                    ...newData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="mb-6 ">
                                        <label
                                            className="text-[#334155] text-sm font-medium mb-3"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            className="block w-full h-12 px-4 py-2 mt-2 text-[#94A3B8] bg-[#F9F9FA] rounded-md focus:outline-none transition duration-150 ease-in-out"
                                            name="email"
                                            autoComplete="off"
                                            readOnly
                                            defaultValue={profile.email}
                                        />
                                    </div>
                                </div>

                                <div className="w-full py-5 mt-5">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">
                                            Channel
                                        </h3>
                                    </div>
                                    <div className="mb-6 ">
                                        <label
                                            className="text-[#334155] text-sm font-medium mb-3 "
                                            htmlFor="c_name"
                                        >
                                            Channel Name
                                        </label>
                                        <input
                                            id="c_name"
                                            type="text"
                                            className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                            name="c_name"
                                            autoComplete="off"
                                            defaultValue={
                                                profile?.creatorchannel?.name
                                            }
                                            onChange={(e) =>
                                                setNewData({
                                                    ...newData,
                                                    channelName: e.target.value,
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
                                                profile?.creatorchannel
                                                    ?.description
                                            }
                                            onChange={(e) =>
                                                setNewData({
                                                    ...newData,
                                                    channelDescription:
                                                        e.target.value,
                                                })
                                            }
                                            className="w-full px-4 mt-1 py-2 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                        ></textarea>
                                    </div>
                                    <div className="mb-6 ">
                                        <label
                                            className="text-[#334155] text-sm font-medium mb-3"
                                            htmlFor="channel_logo"
                                        >
                                            Channel Logo
                                        </label>
                                        <div className="flex items-center justify-start gap-4 py-3">
                                            <img
                                                src={
                                                    profile?.creatorchannel
                                                        ?.channelAvatar
                                                }
                                                alt={"channel logo"}
                                                id="avatarImg"
                                                height={100}
                                                width={90}
                                            />

                                            <div className="flex items-start flex-col ml-5 gap-2">
                                                <input
                                                    onChange={showPreview}
                                                    type="file"
                                                    name="thumbnail"
                                                    className="hidden"
                                                    id="thumbnail"
                                                    accept="image/*"
                                                />
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        document
                                                            .getElementById(
                                                                "thumbnail"
                                                            )
                                                            .click();
                                                    }}
                                                    className="text-[#046ED1] text-sm cursor-pointer"
                                                >
                                                    Edit photo
                                                </span>
                                                {/* <button className="text-[#7F8691] text-sm">
                                                    Delete photo
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-end justify-end">
                                    {!loading && (
                                        <button
                                            type="submit"
                                            className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Update Channel
                                        </button>
                                    )}
                                </div>

                                <div className="w-full py-5 mt-5">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">
                                            Notification references
                                        </h3>
                                    </div>
                                    <div>
                                        <div>
                                            <h5 className="text-[#334155] text-sm">
                                                Email
                                            </h5>
                                            <p className="text-[#334155] text-[13px]">
                                                Get notifications, whenever:
                                            </p>
                                        </div>

                                        <div className="mb-6 py-3 space-y-4">
                                            <div className="form-group form-check flex justify-start space-x-3">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input h-5 w-5 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                                    id="tips"
                                                />
                                                <label
                                                    className="form-check-label inline-block text-[#334155] text-[13px]"
                                                    htmlFor="tips"
                                                >
                                                    Whenever you get tips
                                                </label>
                                            </div>

                                            <div className="form-group form-check flex justify-start space-x-3">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input h-5 w-5 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                                    id="guest_video_view"
                                                />
                                                <label
                                                    className="form-check-label inline-block text-[#334155] text-[13px]"
                                                    htmlFor="guest_video_view"
                                                >
                                                    Someone views your video
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-end justify-end">
                                    <button
                                        // type="submit"
                                        className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Settings;
