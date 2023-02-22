import React, { useState } from "react";
import styles from "./AddButton.module.css";
import { QuestOrChallenge } from "../QuestOrChallenge";

export const AddButton = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    return setComponents([components.concat(<QuestOrChallenge />)]);
  };

  return (
    <>
      <button type="button" className={styles.btn} onClick={addComponent}>
        +
      </button>
      <div className="container">{components}</div>
    </>
  );
};
