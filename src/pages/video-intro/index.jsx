import { useEffect, useRef } from "react";
import introVideo from "../../assets/intro.mp4";
import styles from "./index.module.scss";

export const VideoIntro = ({ onPlayEnd }) => {
  const videoRef = useRef();
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const video = videoRef.current;
    video.playbackRate = 1.5;
    const cb = () => {
      onPlayEnd();
    };

    video.addEventListener("ended", cb);

    function doPlay() {
      if (!WeixinJSBridge) {
        return;
      }
      WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
        video.play();
      });
    }

    if (window.WeixinJSBridge) {
      doPlay();
    } else {
      document.addEventListener(
        "WeixinJSBridgeReady",
        function () {
          doPlay();
        },
        false
      );
    }

    return () => {
      video.removeEventListener("ended", cb);
    };
  }, []);
  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        x5-video-player-type="h5"
        webkit-playsinline="true"
        x-webkit-airplay="true"
        playsinline="true"
        x5-video-player-fullscreen="true"
      ></video>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};
