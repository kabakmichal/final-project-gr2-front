import React, { useState } from "react";
// import CategorySelect from "../CategorySelect/CategorySelect";
// import DateTimePicker from "../DateTimePicker/DateTimePicker";
// import DifficultSelect from "../DifficultSelect/DifficultSelect";
// import styles from "./Tile.module.css";
// import { ReactComponent as Star } from "./star.svg";
// import { ReactComponent as Cup } from "./cup.svg";
import ConfirmedTile from "../ConfirmedTile/ConfirmedTile";
import { EditedTile } from "../EditedTile";

export const Tile = (props) => {
  const [edit, setEdit] = useState(false);
  // const handleStateChange = (edit) => {
  //   setEdit(!edit);
  // };
  console.log(edit);
  return (
    <ConfirmedTile
      id={props.id}
      title={props.title}
      date={props.date}
      type={props.type}
      difficultyLevel={props.difficultyLevel}
      category={props.category}
      // handleStateChange={handleStateChange}
      edit={edit}
      setEdit={setEdit}
    />
    // <>
    //   <div
    //     className={
    //       props.isQuest ? styles.tile_questbg : styles.tile_challengebg
    //     }
    //   >
    //     <div className={styles.top_container}>
    //       {/* <DifficultSelect /> */}
    //       <div className={styles.difficulty}>
    //         <span
    //           className={`${styles.dot} ${styles[props.difficultyLevel]}`}
    //         ></span>
    //         <p className={styles.difficulty_level}>
    //           {props.difficultyLevel.charAt(0).toUpperCase() +
    //             props.difficultyLevel.slice(1)}
    //         </p>
    //       </div>
    //       <div className={styles.picture}>
    //         {props.isQuest ? <Star /> : <Cup />}
    //       </div>
    //     </div>
    //     {props.isQuest ? (
    //       <>
    //         <div className={styles.tile_title}>
    //           <p className={styles.tile_title_text}>{props.title}</p>
    //         </div>{" "}
    //       </>
    //     ) : (
    //       <>
    //         <p className={styles.tile_sign}>CHALLENGE</p>
    //         <div className={styles.tile_title_chl}>
    //           <p className={styles.tile_title_text_chl}>{props.title}</p>
    //         </div>{" "}
    //       </>
    //     )}
    //     {/* <DateTimePicker /> */}
    //     <div className={styles.tile_date}> {props.date}</div>
    //     <div className={styles.bottom_container}>
    //       {/* <CategorySelect /> */}
    //       <div className={`${styles.category} ${styles[props.type]}`}>
    //         <span className={styles.category_name}>
    //           {props.type.toUpperCase()}{" "}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};
