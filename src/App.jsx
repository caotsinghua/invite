import { useState } from "react";
import styles from "./app.module.scss";
import { Intro } from "./pages/intro";
import { Main } from "./pages/main";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className={styles.container}>
      {!showMain && (
        <div
          onClick={() => {
            setShowMain(true);
          }}
        >
          <Intro />
        </div>
      )}
      {showMain && <Main />}
    </div>
  );
}

export default App;
