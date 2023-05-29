"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EmptyState from "@/components/EmptyState";
import VideoAddIcon from "@/components/Icons/VideoAddIcon";
import ThumbsDownIcon from "@/components/Icons/ThumbsDownIcon";
import ThumbsUpIcon from "@/components/Icons/ThumbsUpIcon";
import EyeIcon from "@/components/Icons/EyeIcon";
import Layout from "@/components/IndividualLayout/Layout";
import Script from "next/script";
// This imports the functional component from the previous sample.
import VideoJS from "@/components/Player/VideoJS";
import useWeb3Auth from "@/hooks/useWeb3Auth";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [videojsPlayer, setVideojsPlayer] = useState(null);
    const [sources, setSources] = useState([]);
    const [videoJsOptions, setVideoJsOptions] = useState(null);
    const { account } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/individual`
    );
    const [playing, setPlaying] = useState(false);
    const [liking, setLiking] = useState(false);
    const [disliking, setDisliking] = useState(false);

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

    const playerRef = React.useRef(null);

    useEffect(() => {
        if (recommendations.length > 0) {
            const srcs = recommendations.map((video) => {
                return {
                    src: `https://media.thetavideoapi.com/${video.videoUrl}/master.m3u8`,
                    poster: video.videoThumbnail,
                    key: video.videoUrl,
                    id: video._id,
                    creatorId: video.creator.id,
                };
            });

            setSources(srcs);
            setPlaying(recommendations[0]);

            const current = srcs[0];

            setVideoJsOptions({
                autoplay: true,
                controls: true,
                responsive: true,
                techOrder: ["theta_hlsjs", "html5"],
                sources: [
                    {
                        src: current.src,
                        poster: current.poster,
                        type: "application/vnd.apple.mpegurl",
                        label: "auto",
                    },
                ],
                theta_hlsjs: {
                    videoId: current.id,
                    walletUrl:
                        "wss://api-wallet-service.thetatoken.org/theta/ws",
                    onWalletAccessToken: null,
                    hlsOpts: null,
                    thetaOpts: {
                        allowRangeRequests: true, // false if cdn does not support range headers
                    },
                },
            });
        }
    }, [recommendations]);

    useEffect(() => {
        if (videojsPlayer) {
            console.log("Currently playing", playing, videojsPlayer.state);
        }
    }, [playing]);

    const changePlayerSrc = (vSrc, i) => {
        if (videojsPlayer) {
            videojsPlayer.src(vSrc.src);
            videojsPlayer.poster(vSrc.poster);
            setPlaying(recommendations[i]);
        }
    };

    const likePlaying = async () => {
        setLiking(true);
        setTimeout(() => {
            setLiking(false);
        }, 1000);
        const video = playing;
        video.analytics.totallikes += 1;

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos/${video._id}/likesdislikes`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    viewerId: account.userId,
                    actionType: "LIKE",
                }),
            }
        );

        await response.json();

        setPlaying({ ...playing, video });
    };

    const dislikePlaying = async () => {
        setDisliking(true);
        setTimeout(() => {
            setDisliking(false);
        }, 1000);
        const video = playing;
        video.analytics.totaldislikes += 1;

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos/${video._id}/likesdislikes`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    viewerId: account.userId,
                    actionType: "DISLIKE",
                }),
            }
        );

        await response.json();

        setPlaying({ ...playing, video });
    };

    const payForAds = async (player, src) => {
        const payload = {
            watchedAt: new Date().toISOString(),
            watchDuration: player.duration(),
            exitedAt: new Date().toISOString(),
            viewerId: account.userId,
        };

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/videos/${src.id}/views`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const payback = await response.json();

        const { id } = payback.data;

        const payload2 = {
            adId: "zeshagroup",
            videoId: src.id,
            creatorId: src.creatorId,
            viewerId: account.userId,
            viewId: id,
        };

        const response2 = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/earnings`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload2),
            }
        );

        await response2.json();

        if (!response2.ok) {
            console.log("unable to pay earnings");
        } else {
            console.log("paid earnings");
        }
    };

    const handlePlayerReady = (player) => {
        console.log("player", player);

        player.ads({});

        setVideojsPlayer(player);
        player.setState({
            ...player.state,
            track: 0,
        });
        // player.setState({
        //     ...player.state,
        //     ad: "https://zesha.nyc3.cdn.digitaloceanspaces.com/pre-roll-short.mp4",
        // });

        playerRef.current = player;

        player.on("ended", function () {
            let nextTrack = player.state.track + 1;
            if (nextTrack > sources.length - 1) nextTrack = 0;
            setPlaying(recommendations[nextTrack]);
            player.setState({
                ...player.state,
                track: nextTrack,
            });

            player.poster(sources[nextTrack].poster);
            player.src(sources[nextTrack].src);
        });

        const requestAds = function () {
            player.trigger("adsready");
        };

        const playAd = function () {
            player.ads.startLinearAdMode();
            // player.setState({ ...player.state, adPlaying: true });

            player.src(
                "https://zesha.nyc3.cdn.digitaloceanspaces.com/pre-roll-short.mp4"
            );

            player.one("adplaying", function () {
                player.trigger("ads-ad-started");
            });

            // player.one("durationchange", function () {
            //     console.log("durationchange");
            //     player.play();
            // });

            player.one("adended", function () {
                // play your linear ad content, then when it's finished ...
                // player.setState({ ...player.state, adPlaying: false });

                player.ads.endLinearAdMode();

                payForAds(player, sources[player.state.track]);
                console.log("ad ended", player.state);
            });
        };

        if (player.currentSrc()) {
            requestAds();
        }

        player.on("contentupdate", () => {
            if (player.currentSrc() !== player.state.ad) {
                requestAds();
            }
        });

        player.on("readyforpreroll", function () {
            // if (!player.state?.prerollPlayed) {
            // player.setState({ ...player.state, prerollPlayed: true });

            playAd();
            // }
        });

        // player.on("timeupdate", function (event) {
        //     if (player.state.midrollPlayed) {
        //         return;
        //     }

        //     var currentTime = player.currentTime(),
        //         opportunity;

        //     if ("lastTime" in player.state) {
        //         opportunity = currentTime > 15 && player.state.lastTime < 15;
        //     }

        //     player.setState({ ...player.state, lastTime: currentTime });

        //     if (opportunity) {
        //         player.setState({ ...player.state, midrollPlayed: true });

        //         playAd();
        //     }
        // });
    };

    return (
        <>
            <Layout pagePadding={""}>
                <div className="pb-20">
                    <div className="grow py-2 mb-3">
                        <h1 className="text-xl font-medium">Recommendations</h1>
                        <p className="text-[#7F8691] text-base">
                            Watch your recommended videos for the day
                        </p>
                    </div>

                    {recommendations ? (
                        <>
                            <div className="flex">
                                <div className="flex md:w-full sm:w-full w-3/5 px-2">
                                    {videoJsOptions && (
                                        <VideoJS
                                            options={videoJsOptions}
                                            onReady={handlePlayerReady}
                                        />
                                    )}
                                </div>

                                {recommendations.length > 0 && (
                                    <div
                                        className="flex-initial w-2/5"
                                        id="playlist-options"
                                    >
                                        <div className="flex flex-col gap-5">
                                            {recommendations.map(
                                                (video, index) => (
                                                    <div
                                                        key={video._id}
                                                        className=""
                                                    >
                                                        <div
                                                            onClick={() =>
                                                                changePlayerSrc(
                                                                    sources[
                                                                        index
                                                                    ],
                                                                    index
                                                                )
                                                            }
                                                            className="h-32 block relative w-full object-cover each-item cursor-pointer"
                                                            style={{
                                                                minWidth:
                                                                    "200px",
                                                            }}
                                                        >
                                                            <Image
                                                                src={
                                                                    video.videoThumbnail
                                                                }
                                                                loader={({
                                                                    src,
                                                                }) =>
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
                                                                        video
                                                                            .channel
                                                                            .channelAvatar
                                                                    }
                                                                    width={50}
                                                                    height={50}
                                                                    loader={({
                                                                        src,
                                                                    }) =>
                                                                        video
                                                                            .channel
                                                                            .channelAvatar
                                                                    }
                                                                    priority
                                                                    alt={
                                                                        video.title
                                                                    }
                                                                    className=" rounded-full object-cover"
                                                                />
                                                            </span>
                                                            <div className="flex items-start justify-between w-full flex-col">
                                                                <h5 className="text-[#344054] line-clamp-1 text-sm font-medium">
                                                                    {
                                                                        video.title
                                                                    }
                                                                </h5>
                                                                <span className="text-[#5C636E] line-clamp-1 text-xs font-normal">
                                                                    {
                                                                        video
                                                                            .channel
                                                                            .name
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {playing && (
                                <>
                                    <div className="flex w-full">
                                        <div className="flex w-full">
                                            <div className="flex inline-flex  shadow-md items-center gap p-4 mt-3  bg-[#f2f2f2] px-2 py-1 rounded-full">
                                                <span
                                                    className={`inline-flex  items-center cursor-pointer ${
                                                        liking
                                                            ? "animate-ping"
                                                            : ""
                                                    }`}
                                                    onClick={likePlaying}
                                                >
                                                    <ThumbsUpIcon />{" "}
                                                    <span className="font-bold pl-2">
                                                        {playing?.analytics
                                                            ?.totallikes || 0}
                                                    </span>
                                                </span>
                                                <span className="ml-2 mr-2">
                                                    |
                                                </span>
                                                <span
                                                    className={`inline-flex  gap-1 items-center cursor-pointer ${
                                                        disliking
                                                            ? "animate-ping"
                                                            : ""
                                                    }`}
                                                    onClick={dislikePlaying}
                                                >
                                                    <ThumbsDownIcon />{" "}
                                                    <span className="font-bold pl-2">
                                                        {playing?.analytics
                                                            ?.totaldislikes ||
                                                            0}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="ml-4 shadow-md flex inline-flex items-center gap p-4 mt-3  bg-[#f2f2f2] px-2 py-1 rounded-full">
                                                <span className="inline-flex  items-center">
                                                    <EyeIcon />{" "}
                                                    <span className="font-bold pl-2">
                                                        {playing?.analytics
                                                            ?.totalvideoviews ||
                                                            0}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex w-3/5 my-2">
                                            <p className="font-bold w-full">
                                                {playing.title}
                                            </p>
                                        </div>

                                        <div className="flex w-3/5">
                                            <p className="font-normal">
                                                {playing.description}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <EmptyState
                            icon={<VideoAddIcon />}
                            text="Stay tuned for recommended videos"
                        />
                    )}
                </div>
            </Layout>
            <Script src="https://cdn.jsdelivr.net/npm/hls.js@0.12.4" />
            <Script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta.umd.min.js" />
            <Script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta-hls-plugin.umd.min.js" />
            <Script src="https://d1ktbyo67sh8fw.cloudfront.net/js/videojs-theta-plugin.min.js" />
        </>
    );
};

export default Recommendations;
