import React, { useState } from "react";
import styles from "./AddButton.module.css";
import { QuestOrChallenge } from "../QuestOrChallenge";

import Plus from "./plus.svg";

export const AddButton = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    return setComponents([components.concat(<QuestOrChallenge />)]);
  };

  return (
    <>
      <div className="addBtn">
        <div className={styles.blur}></div>
        <button type="button" className={styles.btn} onClick={addComponent}>
          <img src={Plus} alt="Plus"></img>
        </button>
      </div>
      <div className="container">{components}</div>
    </>
  );
};
