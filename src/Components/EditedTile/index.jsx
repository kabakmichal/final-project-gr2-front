import React, { useState } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";

import styles from "./EditedTile.module.css";

export const EditedTile = () => {
  const [selectedDifficult, setSelectedDifficult] = useState(null);

  const handleDifficult = (selectedDifficult) => {
    setSelectedDifficult(selectedDifficult);
    console.log(selectedDifficult.value);
  };
  //===================================
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    console.log(selectedCategory.value);
  };
  //=================================================
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  //=====================================

  //=====================================

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
            <DifficultSelect onSelection={handleDifficult} />
          </div>
        </div>
        <div className={styles.tile_title}>
          <p className={styles.tile_title_text}>Creating quest</p>
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={handleInput}
          ></input>
        </div>
        <DateTimePicker />
        <CategorySelect onSelection={handleCategory} />
        <button
          type="button"
          className={styles.cancel_btn}
          onClick={cancelCreating}
        >
          X
        </button>
        <button type="button" className={styles.create_btn} onClick={sendTodo}>
          CREATE
        </button>
      </div>
    </>
  );
};
