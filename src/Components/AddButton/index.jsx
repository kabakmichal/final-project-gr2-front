import React from "react";
import styles from "./AddButton.module.css";
import Plus from "./plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, fetchTodos } from "../../redux/quest/operations";
import { nanoid } from "@reduxjs/toolkit";

export const AddButton = (props) => {
  const { onButtonClick } = props;

  return (
    <>
      <div className="addBtn">
        <div className={styles.blur}></div>
        <button type="button" className={styles.btn} onClick={onButtonClick}>
          <img src={Plus} alt="Plus icon"></img>
        </button>
      </div>
    </>
  );
};
