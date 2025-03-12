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
    return () => {
      video.removeEventListener("ended", cb);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <video
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        preload="auto"
      ></video>
    </div>
  );
};
