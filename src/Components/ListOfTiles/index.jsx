import { AddButton } from "../../Components/AddButton";
import React, { useEffect, useState } from "react";
import { Tile } from "../Tile/Tile.jsx";
import { DoneSection } from "../DoneSection/DoneSection.jsx";
import styles from "./ListOfTiles.module.css";
import axios from "../../Api/axios";

import { EditedTile } from "../EditedTile";

export const ListOfTiles = () => {
  const [objects, setObjects] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));

  const saveToArray = async () =>
    await axios.get("api/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });

  const addObject = () => {
    const newObject = {
      title: "New quest",
      date: "2023-03-07",
      type: "Job",
    };
    setObjects([...objects, newObject]);
  };

  let todayQuests = [];
  let tomorrowQuests = [];
  const today = new Date().toISOString().slice(0, 10);
  let tomorrow = "";
  if ((parseInt(today.slice(8)) + 1).toString().length === 1)
    tomorrow =
      today.slice(0, 8) + "0" + (parseInt(today.slice(8)) + 1).toString();
  else tomorrow = today.slice(0, 8) + (parseInt(today.slice(8)) + 1).toString();

  useEffect(() => {
    const fetchData = async () => {
      await saveToArray().then((res) => setObjects(res.data[0].todoListIds));
    };
    fetchData();
  }, []);

  if (objects === null) return <div>Loading...</div>;
  todayQuests = objects.filter((object) => object.date === today);
  tomorrowQuests = objects.filter(
    (object) => object.date === tomorrow && object.status === "undone"
  );
  let doneQuests = objects.filter((object) => object.status === "done");
  return (
    <>
      <AddButton onButtonClick={addObject}></AddButton>
      <div className={styles.today_section}>
        <p className={styles.today_section_text}>TODAY</p>
        <div className={styles.today_section_cards}>
          <ul className={styles.today_section_list}>
            {todayQuests.map((obj) => (
              <li key={obj._id} className={styles.list_item}>
                <Tile
                  title={obj.title}
                  date={obj.date}
                  difficultyLevel={obj.difficulty}
                  type={obj.type}
                  category={obj.category}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.tomorrow_section}>
        <p className={styles.tomorrow_section_text}>TOMORROW</p>
        <div className={styles.tomorrow_section_cards}>
          <ul className={styles.tomorrow_section_list}>
            {tomorrowQuests.map((obj) => (
              <li key={obj._id} className={styles.list_item}>
                <Tile
                  title={obj.title}
                  date={obj.date}
                  type={obj.type}
                  difficultyLevel={obj.difficulty}
                  category={obj.category}
                  isQuest={obj.type === "quest"}
                />
              </li>
            ))}
          </ul>
        </div>
        <DoneSection done={doneQuests} />
      </div>
    </>
  );
};
