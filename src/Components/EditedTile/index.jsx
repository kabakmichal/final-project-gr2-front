import React, { useState } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Clear } from "./clear.svg";
import styles from "./EditedTile.module.css";

export const EditedTile = () => {
  const [selectedDifficult, setSelectedDifficult] = useState(null);

  const handleDifficult = (selectedDifficult) => {
    setSelectedDifficult(selectedDifficult);
    console.log(selectedDifficult.value);
  };
  //===================================
  const newTodo = {};
  //====================
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
  const [selectedDate, setSelectedDate] = useState("");

  const getDate = () => {
    const date = localStorage.getItem("date");
    return date;
  };
  //=====================================

  const createTodoObj = () => {
    const date = getDate();
    const newTodo = {
      date: date,
    };
    return newTodo;
  };

  const sendTodo = () => {
    const todo = createTodoObj();
    console.log(todo);
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
          <div className={styles.picture}>
            <Star />
          </div>
        </div>
        <div className={styles.tile_title}>
          <p className={styles.tile_title_text}>Creating quest</p>

          <input className={styles.input} onChange={handleInput}></input>
          <DateTimePicker />
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_row}>
            <CategorySelect onSelection={handleCategory} />
            <button
              type="button"
              className={styles.cancel_btn}
              onClick={cancelCreating}
            >
              <Clear />
            </button>
            <button
              type="button"
              className={styles.create_btn}
              onClick={sendTodo}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
