import styles from "./index.module.scss";
import pokemonsImg from "../../assets/pokemons.png";
export const Main = () => {
  const timeLineData = [
    {
      time: "14:00",
      name: "入场&签到",
    },
    {
      time: "15:20",
      name: "仪式",
    },
    {
      time: "16:00",
      name: "游戏环节",
    },
    {
      time: "17:00",
      name: "晚宴",
    },
    {
      time: "18:00",
      name: "after party",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.choseText}>i chose you</div>
      <div className={styles.normalText}>TO JOIN OUR WEDDING</div>
      <div className={styles.pokemons}>
        <img src={pokemonsImg} />
      </div>
      <div className={styles.name}>CQH & MYX</div>
      <div className={styles.time}>
        <span className={styles.largeTime}>2025</span>
        <span className={styles.line}></span>
        <span className={styles.largeTime}>04</span>
        <span className={styles.line}></span>
        <span className={styles.largeTime}>19</span>
      </div>
      {/* <div className={styles.smallTime}>
        <span>2PM - 8PM</span>
      </div> */}
      <div className={styles.address}>地点：无锡-山居一聚</div>
      <div className={styles.horLine}></div>

      <div className={styles.timeLine}>
        {timeLineData.map((item) => {
          return (
            <div className={styles.timeLineItem}>
              <span className={styles.timeLineItem_time}>· {item.time}</span>
              <span className={styles.timeLineItem_name}>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.horLine}></div>
   

      <div className={styles.tips}>
        tips:建议穿浅色衣服哦~ 
      </div>
    </div>
  );
};
