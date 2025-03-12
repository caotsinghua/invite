import { useState } from "react";
import styles from "./app.module.scss";
import { Intro } from "./pages/intro";
import { Main } from "./pages/main";
import { VideoIntro } from "./pages/video-intro";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className={styles.container}>
      {!showMain && (
        <VideoIntro
          onPlayEnd={() => {
            setShowMain(true);
          }}
        />
      )}
      {/* {!showMain && (
        <div
          onClick={() => {
            setShowMain(true);
          }}
        >
          <Intro />
        </div>
      )} */}
      {showMain && <Main />}
    </div>
  );
}

export default App;
