import React, { useState } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Clear } from "./clear.svg";
import styles from "./EditedTile.module.css";
import axios from "../../Api/axios";

export const EditedTile = () => {
  const [values, setValues] = useState({
    title: "",
    difficulty: "",
    date: "2023-03-08",
    time: "23:00:00",
    status: "undone",
    category: "",
    type: "quest",
  });

  // const handleDate = (e) => {
  //   const value = e.target.value;
  //   setValues((prevState) => ({
  //     ...prevState,
  //     date: value,
  //   }));
  // };
  const handleDate = (newDate) => {
    // const value = e.value;
    // console.log(value);
    setValues((prevState) => ({
      ...prevState,
      date: newDate,
    }));
    // console.log(e);
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

  const saveToDB = async () => {
    return (
      await axios.post("api/todos", values, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      document.location.reload()
    );
  };

  const handleCategoryChange = (e) => {
    const value = e.value;
    setValues((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  // componentWillUnmount=()=>{
  //   resetHideComponent();
  // }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.difficulty}>
            <DifficultSelect onChange={handleDifficultChange} />
            {/* <DifficultSelect onSelection={handleDifficult} /> */}
          </div>
          <div className={styles.picture}>
            <Star />
          </div>
        </div>
        <div className={styles.tile_title}>
          <p className={styles.tile_title_text}>Creating quest</p>

          <input className={styles.input} onChange={handleInput}></input>
          {/* <input className={styles.input} onChange={handleInput}></input> */}
          <DateTimePicker onChange={handleDate} />
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_row}>
            <CategorySelect onChange={handleCategoryChange} />
            {/* <CategorySelect onSelection={handleCategory} /> */}
            <button
              type="button"
              className={styles.cancel_btn}
              // onClick={cancelCreating}
            >
              <Clear onClick={cancelCreating} />
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
