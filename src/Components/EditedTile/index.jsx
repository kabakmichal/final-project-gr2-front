import React, { useState } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Clear } from "./clear.svg";
import styles from "./EditedTile.module.css";
import axios from "../../Api/axios";

export const EditedTile = (props) => {
  const [values, setValues] = useState({
    title: "",
    difficulty: "",
    date: "",
    time: "",
    status: "undone",
    category: "",
    type: "quest",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    setValues((prevState) => ({
      ...prevState,
      title: value,
    }));
  };

  const handleDifficultChange = (e) => {
    const value = e.value;
    setValues((prevState) => ({
      ...prevState,
      difficulty: value,
    }));
  };

  const token = JSON.parse(localStorage.getItem("token"));

  const saveToDB = async () => {
    return (
      await axios.post("api/todos", values, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      document.location.reload(),
      console.log(values)
    );
  };

  const handleCategoryChange = (e) => {
    const value = e.value;
    setValues((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const [selectedDate, setSelectedDate] = useState("");

  const getTime = (value) => {
    // console.log(value.slice(-8));
    return value.slice(-8);
  };

  const getDate = (value) => {
    // console.log(value.slice(0, 10));
    return value.slice(0, 10);
  };

  const handleDate = (date, dateStr) => {
    const formattedDate = dateStr;
    // setSelectedDate(formattedDate);
    const justTime = getTime(formattedDate);
    const justDate = getDate(formattedDate);
    setValues((prevState) => ({
      ...prevState,
      date: justDate,
      time: justTime,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.difficulty}>
            <DifficultSelect onChange={handleDifficultChange} />
          </div>
          <div className={styles.picture}>
            <Star />
          </div>
        </div>
        <div className={styles.tile_title}>
          <p className={styles.tile_title_text}>Creating quest</p>

          <input className={styles.input} onChange={handleInput}></input>
          <DateTimePicker
            selectedDate={selectedDate}
            onDateChange={handleDate}
          />
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_row}>
            <CategorySelect onChange={handleCategoryChange} />
            <button type="button" className={styles.cancel_btn}>
              <Clear onClick={props.handleCancel} />
            </button>
            <button
              type="button"
              className={styles.create_btn}
              onClick={saveToDB}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
