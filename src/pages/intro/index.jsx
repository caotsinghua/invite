import ballImg from "../../assets/ball.png";
import styles from "./index.module.scss";

export const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ball}>
        <img src={ballImg} />
      </div>
      <div className={styles.introText}>
        WELCOME
      </div>
    </div>
  );
};
