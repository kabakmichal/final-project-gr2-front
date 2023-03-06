import React from "react";
import DifficultSelect from "../DifficultSelect/DifficultSelect";
import styles from "./questTile.module.css";
import { ReactComponent as Star } from "./star.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateTodos } from "../../redux/quest/operations";

const QuestTile = (props) => {
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const title = form.title.value;
    const date = form.date.value;
    const type = props.type;
    const id = props.id;
    dispatch(updateTodos({ title, date, type, id }));
  };

  return (
    <>
      <form className={styles.tile} onChange={formSubmit}>
        <div className={styles.top_container}>
          <DifficultSelect />
          <div className={styles.picture}>
            <Star />
          </div>
        </div>

        <div className={styles.tile_title}>
          <input
            className={styles.tile_title_text}
            placeholder={props.title}
            name="title"
          ></input>
        </div>
        <input type="date" className={styles.tile_date} name="date"></input>
        <p>{props.id}</p>
        <div className={styles.bottom_container}>
          <div className={`${styles.category} ${styles[props.type]}`}>
            <span className={styles.category_name}>
              {props.type.toUpperCase()}{" "}
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuestTile;
