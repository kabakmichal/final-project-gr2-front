import React from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Clear } from "./clear.svg";
import styles from "./EditedTile.module.css";

export const EditedTile = () => {
  const sendTodo = () => {
    console.log("sending todo");
  };

  const cancelCreating = () => {
    console.log("cancel creating");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.difficulty}>
            <DifficultSelect />
          </div>
          <div className={styles.picture}>
            <Star/>
          </div>
        </div>
        <div className={styles.tile_title}>
          <p className={styles.tile_title_text}>Creating quest</p>
          <input className={styles.input}></input>
        <DateTimePicker />
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_row}>
            <CategorySelect />
            <button
            type="button"
            className={styles.cancel_btn}
            onClick={cancelCreating}
            >
            <Clear/>
            </button>
            <button type="button" className={styles.create_btn} onClick={sendTodo}>
            CREATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
