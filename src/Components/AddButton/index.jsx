import React from "react";
import styles from "./AddButton.module.css";
import Plus from "./plus.svg";

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
