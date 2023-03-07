import React from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import styles from "./Tile.module.css";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Cup } from "./cup.svg";

export const Tile = ({
  status = "done",
  difficultyLevel = "easy",
  title = "new quest",
  date,
  type = "family",
}) => {
  console.log(status, difficultyLevel, title, date, type);

  return (
    <>
      <div
        className={
          status === "undone" ? styles.tile_questbg : styles.tile_challengebg
        }
      >
        <div className={styles.top_container}>
          {/* <DifficultSelect /> */}
          <div className={styles.difficulty}>
            <span className={`${styles.dot} ${styles[difficultyLevel]}`}></span>
            <p className={styles.difficulty_level}>{difficultyLevel}</p>
          </div>
          <div className={styles.picture}>
            {status === "undone" ? <Star /> : <Cup />}
          </div>
        </div>
        {status === "undone" ? (
          <>
            <div className={styles.tile_title}>
              <p className={styles.tile_title_text}>{title}</p>
            </div>{" "}
          </>
        ) : (
          <>
            <p className={styles.tile_sign}>CHALLENGE</p>
            <div className={styles.tile_title_chl}>
              <p className={styles.tile_title_text_chl}>{title}</p>
            </div>{" "}
          </>
        )}
        {/* <DateTimePicker /> */}
        <div className={styles.tile_date}> {date}</div>
        <div className={styles.bottom_container}>
          {/* <CategorySelect /> */}
          <div className={`${styles.category} ${styles[type]}`}>
            <span className={styles.category_name}>{type} </span>
          </div>
        </div>
      </div>
    </>
  );
};

// export default QuestTile;
