import React from "react";
import styles from "./QuestOrChallenge.module.css";

export const QuestOrChallenge = () => {
  return (
    <>
      <div className={styles.window}>
        CREATE NEW CHALLENGE
        <input className={styles.inputWindow}></input>
      </div>
    </>
  );
};
