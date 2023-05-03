import React, { useState } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import { TitleInput } from "../TitleInput";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Cup } from "./cup.svg";
import { ReactComponent as Clear } from "./clear.svg";
import styles from "./EditedTile.module.css";
import axios from "../../Api/axios";

import { DeletingModal } from "../DeletingModal";

import { loadTiles } from "../../functions/functions";

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

  const { handleChange, handleCancel } = props;

  const sendToParent = () => {
    // handleChange().then(handleCancel());
    // props.handleChange(value).then(props.handleCancel());
  };

  const getId = () => localStorage.getItem("currentToDoID");

  const test = () => console.log(handleChange());

  const saveToDo = async () => {
    const id = getId();
    return (
      // console.log(values),
      await axios.put(`api/todos/${id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      // .then(
      //   await saveToArray().then((res) =>
      //     sendToParent(res.data[0].todoListIds)
      //   handleChange()
      // ),
      // ),
      saveToLocalStorage()
      // loadTiles(handleChange)
      // test()
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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const [title, setTitle] = useState(props.title || "");

  const handleTitleChange = (value) => {
    setTitle(value);
    setValues((prevState) => ({
      ...prevState,
      title: value,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <DeletingModal
          isOpen={isOpen}
          handleClose={handleClose}
          handleDelete={props.handleCancel}
          content="Delete this quest?"
        />
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

          <TitleInput value={title} onChange={handleTitleChange} />

          <DateTimePicker
            selectedDate={selectedDate}
            onDateChange={handleDate}
          />
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_row}>
            <CategorySelect onChange={handleCategoryChange} />
            <button type="button" className={styles.cancel_btn}>
              <Clear onClick={handleOpen} />
            </button>
            <button
              type="button"
              className={styles.create_btn}
              onClick={test}
              // onClick={saveToDo}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
