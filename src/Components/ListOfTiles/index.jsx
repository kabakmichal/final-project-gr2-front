// import React, { useState } from "react";
// import { Tile } from "../Tile/Tile";
import { AddButton } from "../../Components/AddButton";

import React, { useState } from "react";
// import styles from "./AddButton.module.css";
import styles from "./ListOfTiles.module.css";
import Plus from "../AddButton/plus.svg";
import { Tile } from "../Tile/Tile";

export const ListOfTiles = () => {
  const [data, setData] = useState();
  const [objects, setObjects] = useState([]);

  const addObject = () => {
    const newObject = {
      hardness: "normal",
      title: "New quest",
      date: "Choose date",
      type: "Job",
    };
    setObjects([...objects, newObject]);
  };

  return (
    <>
      <ul data={data}>
        {objects.map((obj) => (
          <li key={obj.id}>
            <Tile
              difficultyLevel={obj.hardness}
              title={obj.title}
              date={obj.date}
              type={obj.type}
            />
          </li>
        ))}
        <div className="addBtn">
          {/* <div className={styles.blur}></div> */}
          {/* <button type="button" className={styles.btn} onClick={addObject}>
          <img src={Plus} alt="Plus icon"></img>
        </button> */}
          {/* ==================================== */}
          <button type="button" className={styles.btn} onClick={addObject}>
            <img src={Plus} alt="Plus icon"></img>
          </button>
          {/* ==================================== */}
        </div>
        {/* <AddButton></AddButton> */}
      </ul>
    </>
  );
};
