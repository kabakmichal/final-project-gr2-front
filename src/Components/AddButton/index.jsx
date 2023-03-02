import React, { useState } from "react";
import styles from "./AddButton.module.css";
// import { QuestOrChallenge } from "../QuestOrChallenge";
import QuestTile from "../QuestTile/QuestTile";
import Plus from "./plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, fetchTodos } from "../../redux/quest/operations";
import { nanoid } from "@reduxjs/toolkit";

export const AddButton = () => {
  const dispatch = useDispatch();
  const quests = useSelector(fetchTodos);
  const id = nanoid(6);
  const addComponent = () => {
    dispatch(
      addTodos({ title: "Title", date: "today", type: "Family", id: id })
    );
  };

  return (
    <>
      <div className="addBtn">
        <div className={styles.blur}></div>
        <button type="button" className={styles.btn} onClick={addComponent}>
          <img src={Plus}></img>
        </button>
      </div>
    </>
  );
};
