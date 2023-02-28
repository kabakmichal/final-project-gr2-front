import React, { useState } from "react";
import styles from "./AddButton.module.css";
import Plus from "./plus.svg";

export const AddButton = () => {
  // const [objects, setObjects] = useState([]);

  // const addObject = () => {
  //   const newObject = {
  //     hardness: "normal",
  //     title: "New quest",
  //     date: "Choose date",
  //     type: "Job",
  //   };
  //   return setObjects([...objects, newObject]);
  // };

  return (
    <>
      <div className="addBtn">
        <div className={styles.blur}></div>
        <button type="button" className={styles.btn}>
          <img src={Plus} alt="Plus icon"></img>
        </button>
      </div>
    </>
  );
};
