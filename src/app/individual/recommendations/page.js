"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EmptyState from "@/components/EmptyState";
import VideoAddIcon from "@/components/Icons/VideoAddIcon";
import VideoPlayIcon from "@/components/Icons/VideoPlayIcon";
import Layout from "@/components/IndividualLayout/Layout";
// import Script from "next/script";
// This imports the functional component from the previous sample.
import VideoJS from "@/components/Player/VideoJS";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [videojsPlayer, setVideojsPlayer] = useState(null);

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

    const convertTimeToVideoTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.ceil(seconds % 60);

        return (
            hours
                ? [hours, minutes, remainingSeconds]
                : [minutes, remainingSeconds]
        )
            .map((value) => value.toString().padStart(2, "0"))
            .join(":");
    };

    const videoId = "video_qzmh5awsre1xm6r5skngxmscvs";

    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        techOrder: ["theta_hlsjs", "html5"],
        sources: [
            {
                src: `https://media.thetavideoapi.com/${videoId}/master.m3u8`,
                type: "application/vnd.apple.mpegurl",
                label: "auto",
            },
        ],
        theta_hlsjs: {
            walletUrl: "wss://api-wallet-service.thetatoken.org/theta/ws",
            onWalletAccessToken: null,
            hlsOpts: null,
            thetaOpts: {
                allowRangeRequests: true, // false if cdn does not support range headers
            },
        },
    };

    // - lasTime - the last time ad was played
    // - prerollplayed - if the preroll was played
    // - midrollplayed - if the midroll was played
    // - adPlaying - if the ad is playing
    const [adState, setAdState] = useState({
        ad: "https://zesha.nyc3.cdn.digitaloceanspaces.com/pre-roll-short.mp4",
        lastTime: 0,
        prerollPlayed: false,
        midrollPlayed: false,
        adPlaying: false,
    });

    const changePlayerSrc = (url) => {
        if (videojsPlayer) {
            videojsPlayer.src(
                "https://media.thetavideoapi.com/video_naikps4fmw9zx40yyr2bpbkhpz/master.m3u8"
            );
        }
    };

    const handlePlayerReady = (player) => {
        setVideojsPlayer(player);
        playerRef.current = player;

        player.on("ended", function () {
            console.log("player ended");
        });

        console.log("player", player);

        // player.playlist([
        //     {
        //         sources: [
        //             {
        //                 src: `https://media.thetavideoapi.com/${videoId}/master.m3u8`,
        //             },
        //         ],
        //         poster: "http://localhost:8090/thumbnail-285c31bd-4ac9-40a0-8b2a-89be587daad0.jpg",
        //     },
        //     {
        //         sources: [
        //             {
        //                 src: `https://media.thetavideoapi.com/video_naikps4fmw9zx40yyr2bpbkhpz/master.m3u8`,
        //             },
        //         ],
        //         poster: "http://localhost:8090/thumbnail-56472734-3d70-42b4-b5f5-1b9d6f7a31b1.jpg",
        //     },
        // ]);

        // player.playlist.autoadvance(0);

        const requestAds = function () {
            player.trigger("adsready");
        };

        if (player.preroll) {
            player.preroll({
                src: "https://zesha.nyc3.cdn.digitaloceanspaces.com/pre-roll-short.mp4",
            });
        }
        const playAd = function () {
            player.ads.startLinearAdMode();
            adState.adPlaying = true;

            const url = adState.ad;

            player.src(url);

            player.one("adplaying", function () {
                player.trigger("ads-ad-started");
            });

            player.one("durationchange", function () {
                console.log("durationchange");
                player.play();
            });

            player.one("adended", function () {
                // play your linear ad content, then when it's finished ...
                adState.adPlaying = false;
                player.ads.endLinearAdMode();

                console.log("ended");
            });
        };

        player.ads({});

        if (player.currentSrc()) {
            console.log("player.currentSrc", player.currentSrc());

            requestAds();
        }

        player.on("contentupdate", requestAds);

        player.on("readyforpreroll", function () {
            if (!adState.prerollPlayed) {
                adState.prerollPlayed = true;
                playAd();
            }
        });

        player.on("timeupdate", function (event) {
            if (adState.midrollPlayed) {
                return;
            }

            var currentTime = player.currentTime(),
                opportunity;

            if ("lastTime" in adState) {
                opportunity = currentTime > 15 && adState.lastTime < 15;
            }

            adState.lastTime = currentTime;
            if (opportunity) {
                adState.midrollPlayed = true;
                playAd();
            }
        });
    };

    return (
        <>
            <Layout pagePadding={""}>
                <div className="pb-20">
                    <div className="grow py-2 mb-1">
                        <h1 className="text-xl font-medium">Recommendations</h1>
                        <p className="text-[#7F8691] text-base">
                            Watch your recommended videos for the day
                        </p>
                    </div>
                    <div className="w-full">
                        <VideoJS
                            options={videoJsOptions}
                            onReady={handlePlayerReady}
                        />
                    </div>
                    {recommendations ? (
                        <>
                            <div className="py-5">
                                <div
                                    className="flex gap-5"
                                    style={{
                                        width: "75.6vw",
                                        overflowX: "scroll",
                                    }}
                                >
                                    {recommendations.map((video) => (
                                        <div key={video._id}>
                                            <div
                                                onClick={() =>
                                                    changePlayerSrc(
                                                        video.videoUrl
                                                    )
                                                }
                                                className="h-32 block relative w-full object-cover each-item cursor-pointer"
                                                style={{ minWidth: "200px" }}
                                            >
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
            {/* <Script src="https://cdn.jsdelivr.net/npm/hls.js@0.12.4" />
            <Script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta.umd.min.js" />
            <Script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta-hls-plugin.umd.min.js" />
            <Script src="https://d1ktbyo67sh8fw.cloudfront.net/js/videojs-theta-plugin.min.js" /> */}
        </>
    );
};

export default Recommendations;
