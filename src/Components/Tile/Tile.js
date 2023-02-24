import React from "react";
import styles from "./tile.module.css";

export const Tile = (props) => {
  return (
    <>
      <div className={styles.tile}>
        <div className={styles.first_row}>
          <div className={styles.difficulty}>
            <span className={`${styles.dot} ${styles.easy}`}></span>
            <p className={styles.difficulty_level}>
              {props.difficultyLevel.charAt(0).toUpperCase() +
                props.difficultyLevel.slice(1)}
            </p>
          </div>
          <div className={styles.star}>
            <svg width="15" height="15">
              <use href="../../../public/assets/images/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div className={styles.tile_title}>{props.title}</div>
        <div className={styles.tile_date}> {props.date}</div>
        <div className={styles.bottom_row}>
          <span className={styles.category_name}>{props.type} </span>
        </div>
      </div>
    </>
  );
};

// export default Tile;
