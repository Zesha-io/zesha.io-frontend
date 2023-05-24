"use client";

import React, { useEffect } from "react";
import videojs from "video.js";

// import videojs from "video.js";
// import "videojs-contrib-ads/dist/videojs-contrib-ads.js";
// import "videojs-ads/libs/video-js-4.1.0/video.js";
// import "videojs-playlist/dist/videojs-playlist.js";

import dynamic from "next/dynamic";

// const videojs = dynamic(() => import("video.js"), {
//     ssr: false,
// });
// dynamic(() => import("videojs-contrib-ads/dist/videojs-contrib-ads.js"), {
//     ssr: false,
// });
// dynamic(() => import("videojs-ads/libs/video-js-4.1.0/video.js"), {
//     ssr: false,
// });
// dynamic(() => import("videojs-playlist/dist/videojs-playlist.js"), {
//     ssr: false,
// });

// import "videojs-preroll-v2/dist/videojs-preroll-v2.js";

import "video.js/dist/video-js.css";
import "@videojs/themes/dist/sea/index.css";
import "videojs-contrib-ads/dist/videojs-contrib-ads.css";
// import "videojs-preroll-v2/dist/videojs-preroll.css";
import "./VideoJS.css";

export const VideoJS = (props) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);
    const { options, onReady } = props;

    useEffect(() => {
        require("videojs-contrib-ads/dist/videojs-contrib-ads.js");
        require("videojs-ads/libs/video-js-4.1.0/video.js");
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Make sure Video.js player is only initialized once
            if (!playerRef.current) {
                // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
                const videoElement = document.createElement("video-js");

                videoElement.classList.add("vjs-big-play-centered");
                // videoElement.classList.add("vjs-theme-sea");
                videoRef.current.appendChild(videoElement);

                const player = (playerRef.current = videojs(
                    videoElement,
                    options,
                    () => {
                        onReady && onReady(player);
                    }
                ));
            } else {
                const player = playerRef.current;

                player.autoplay(options.autoplay);
                player.src(options.sources);
            }
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <div className="vjs-theme-city" ref={videoRef} />
        </div>
    );
};

export default VideoJS;
