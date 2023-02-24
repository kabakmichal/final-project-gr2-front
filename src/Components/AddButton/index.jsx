import React, { useState } from "react";
import styles from "./AddButton.module.css";
// import { QuestOrChallenge } from "../QuestOrChallenge";
import { Tile } from "../Tile/Tile.js";

import Plus from "./plus.svg";

export const AddButton = () => {
  const [components, setComponents] = useState([]);

  const defaultObject = {
    hardness: "normal",
    title: "New quest",
    date: "Choose date",
    type: "Job",
  };

  const addComponent = () => {
    return setComponents([
      components.concat(
        <Tile
          difficultyLevel={defaultObject.hardness}
          title={defaultObject.title}
          date={defaultObject.date}
          type={defaultObject.type}
        />
      ),
    ]);
    // return setComponents([components.concat(<QuestOrChallenge />)]);
  };

  return (
    <>
      <div className="addBtn">
        <div className={styles.blur}></div>
        <button type="button" className={styles.btn} onClick={addComponent}>
          <img src={Plus}></img>
        </button>
      </div>
      <div className="container">{components}</div>
    </>
  );
};
