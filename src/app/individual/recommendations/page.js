"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EmptyState from "@/components/EmptyState";
import VideoAddIcon from "@/components/Icons/VideoAddIcon";
import VideoPlayIcon from "@/components/Icons/VideoPlayIcon";
import Layout from "@/components/IndividualLayout/Layout";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    const getRecommendations = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos/recommended`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();

        if (res.ok) {
            setRecommendations(data.data);
            console.log(data);
        }
    };

    useEffect(() => {
        getRecommendations();
    }, []);

    useEffect(() => {
        if (recommendations) {
            console.log(recommendations);
        }
    }, [recommendations]);

    const convertTimeToVideoTime = (time) => {
        let minutes = Math.floor(time / 60);
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        let seconds = Number((time % 60).toFixed(0));
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    };

    return (
        <Layout>
            <div className="pb-20">
                <div className="grow py-2 mb-3">
                    <h1 className="text-xl font-medium">Recommendations</h1>
                    <p className="text-[#7F8691] text-base">
                        Watch your recommended videos for the day
                    </p>
                </div>
                {recommendations ? (
                    <>
                        <div className="py-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {recommendations.map((video) => (
                                    <div key={video._id}>
                                        <div className="h-32 block relative w-full object-cover">
                                            <Image
                                                src={video.videoThumbnail}
                                                loader={({ src }) =>
                                                    video.videoThumbnail
                                                }
                                                fill
                                                priority
                                                alt={`Picture of image`}
                                                className="object-cover"
                                            />
                                            <span className="absolute bottom-2 right-2 bg-[#0B0A1D] text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
                                                {convertTimeToVideoTime(
                                                    video.videoLength
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-start gap-3 w-full py-4 ">
                                            <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF]">
                                                <Image
                                                    src={
                                                        video.channel
                                                            .channelAvatar
                                                    }
                                                    width={50}
                                                    height={50}
                                                    loader={({ src }) =>
                                                        video.channel
                                                            .channelAvatar
                                                    }
                                                    priority
                                                    alt={video.title}
                                                    className=" rounded-full object-cover"
                                                />
                                            </span>
                                            <div className="flex items-start justify-between w-full flex-col">
                                                <h5 className="text-[#344054] line-clamp-1 text-sm font-medium">
                                                    {video.title}
                                                </h5>
                                                <span className="text-[#5C636E] line-clamp-1 text-xs font-normal">
                                                    {video.channel.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyState
                        icon={<VideoAddIcon />}
                        text="Stay tuned for recommended videos"
                    />
                )}
            </div>
        </Layout>
    );
};

export default Recommendations;
