import React, { useState } from "react";
import styles from "./DoneSection.module.css";
import { Tile } from "../Tile/Tile";
import axios from "../../Api/axios";

export const DoneSection = ({ done }) => {
  const [open, Done] = useState(false);
  const toggle = () => Done(!open);

  const deleteTask = async (todoId) => {
    // return console.log(todoId);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios.delete(`api/todos/${todoId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      document.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.done_top}>
        <button className={styles.done_button} onClick={toggle}>
          Done
        </button>
      </div>

      {open ? (
        <ul className={styles.done_section_list}>
          {done.map((obj) => (
            <li key={obj._id} className={styles.done_item}>
              <Tile
                id={obj._id}
                title={obj.title}
                date={obj.date}
                type={obj.category}
                difficultyLevel={obj.difficulty}
                onClick={() => deleteTask(obj._id)}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
