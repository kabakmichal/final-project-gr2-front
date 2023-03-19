import React, { useState } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Cup } from "./cup.svg";
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

  const handleQuest = () => {
    setValues((prevState) => ({
      ...prevState,
      type: "quest",
    }));
  };

  const handleChallenge = () => {
    setValues((prevState) => ({
      ...prevState,
      type: "challenge",
    }));
  };

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

  const saveToArray = async () =>
    await axios.get("api/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });

  const sendToParent = (value) => {
    props.handleChange(value);
  };

  const saveToDo = async () => {
    return (
      await axios
        .post("api/todos", values, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(
          await saveToArray().then((res) =>
            sendToParent(res.data[0].todoListIds)
          )
        ),
      saveToLocalStorage()
    );
  };

  const saveToLocalStorage = () => {
    const valuesJSON = JSON.stringify(values);
    localStorage.setItem("newToDo", valuesJSON);
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
    return value.slice(-8);
  };

  const getDate = (value) => {
    return value.slice(0, 10);
  };

  const handleDate = (date, dateStr) => {
    const formattedDate = dateStr;
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
            {values.type === "quest" ? (
              <Star onClick={handleChallenge} />
            ) : (
              <Cup onClick={handleQuest} />
            )}
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
              onClick={saveToDo}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
