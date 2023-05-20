'use client';
import * as React from 'react';
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function Lotie({ src }) {
    const ref = React.useRef();
    const [lottie, setLottie] = React.useState(null);
  
    React.useEffect(() => {
      import('lottie-web').then(Lottie => setLottie(Lottie.default));
    }, []);
  
    React.useEffect(() => {
      if (lottie && ref.current) {
        const animation = lottie.loadAnimation({
          container: ref.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          // path to your animation file, place it inside public folder
          path: src,
          
        });
  
        return () => animation.destroy();
      }
    }, [lottie]);
  
    return <div ref={ref} style={{height: '100%'}} ></div>;
  }
  