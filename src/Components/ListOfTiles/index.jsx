import { AddButton } from "../../Components/AddButton";
import React, { useState } from "react";
import { Tile } from "../Tile/Tile";
import styles from "./ListOfTiles.module.css";

export const ListOfTiles = () => {
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
      <AddButton onButtonClick={addObject}></AddButton>
      <ul className={styles.list_items}>
        {objects.map((obj) => (
          <li key={obj.id} className={styles.list_item}>
            <Tile
              difficultyLevel={obj.hardness}
              title={obj.title}
              date={obj.date}
              type={obj.type}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
