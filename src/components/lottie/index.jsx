"use client";
import React, { useEffect } from "react";

export default function Lotie({ src }) {
    const ref = React.useRef();
    const [lottie, setLottie] = React.useState(null);

    useEffect(() => {
        import("lottie-web").then((Lottie) => setLottie(Lottie.default));
    }, []);

    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                // path to your animation file, place it inside public folder
                path: src,
            });

            return () => animation.destroy();
        }
    }, [lottie]);

    return <div ref={ref} style={{ height: "100%" }}></div>;
}
