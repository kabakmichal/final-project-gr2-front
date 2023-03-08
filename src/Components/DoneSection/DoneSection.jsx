import React, { useState } from "react";
import styles from "./DoneSection.module.css";
import { Tile } from "../Tile/Tile";

export const DoneSection = ({ done }) => {
  const [open, Done] = useState(false);
  const toggle = () => Done(!open);
  return (
    <>
      <div className={styles.done_top}>
        <button className={styles.done_button} onClick={toggle}>
          Done
        </button>
      </div>

      {open ? (
        <ul className={styles.done_section_list}>
          {done.map((obj) => (
            <li key={obj._id} className={styles.done_item}>
              <Tile
                id={obj._id}
                title={obj.title}
                date={obj.date}
                type={obj.category}
                difficultyLevel={obj.difficulty}
                isQuest={obj.type === "quest"}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
