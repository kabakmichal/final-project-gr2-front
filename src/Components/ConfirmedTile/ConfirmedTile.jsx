import React from "react";
import styles from "./ConfirmedTile.module.css";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Cup } from "./cup.svg";

export default function ConfirmedTile(props) {
  return (
    <>
      <div
        className={
          props.type === "quest" ? styles.tile_questbg : styles.tile_challengebg
        }
      >
        <div className={styles.top_container}>
          {/* <DifficultSelect /> */}
          <div className={styles.difficulty}>
            <span
              className={`${styles.dot} ${styles[props.difficultyLevel]}`}
            ></span>
            <p className={styles.difficulty_level}>{props.difficultyLevel}</p>
          </div>
          <div className={styles.picture}>
            {props.type === "quest" ? <Star /> : <Cup />}
          </div>
        </div>
        {props.type === "quest" ? (
          <>
            <div className={styles.tile_title}>
              <p className={styles.tile_title_text}>{props.title}</p>
            </div>{" "}
          </>
        ) : (
          <>
            <p className={styles.tile_sign}>CHALLENGE</p>
            <div className={styles.tile_title_chl}>
              <p className={styles.tile_title_text_chl}>{props.title}</p>
            </div>{" "}
          </>
        )}
        <div className={styles.tile_date}> {props.date}</div>
        <div className={styles.bottom_container}>
          <div className={`${styles.category} ${styles[props.type]}`}>
            <span className={styles.category_name}>{props.type} </span>
          </div>
        </div>
      </div>
    </>
  );
}
