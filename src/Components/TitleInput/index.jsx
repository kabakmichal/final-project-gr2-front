import React from "react";
import styles from "./TitleInput.module.css";

export const TitleInput = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleInputChange}
      ></input>
    </>
  );
};
