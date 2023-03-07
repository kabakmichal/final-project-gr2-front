import { AddButton } from "../../Components/AddButton";
import React, { useEffect, useState } from "react";
import { Tile } from "../Tile/Tile.jsx";
import styles from "./ListOfTiles.module.css";
import axios from "../../Api/axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDc4ZDNjN2FhYjEzOGE2ZTI0MGMxYiIsImlhdCI6MTY3ODIyMzY3MSwiZXhwIjoxNjc4Mzk2NDcxfQ.zq_cMyIRaAkSeqRGxKGknYVOBN7PeRRvekq45gtAWxs";

const savetoarray = () =>
  axios.get("api/todos", { headers: { Authorization: `Bearer ${token}` } });

export const ListOfTiles = () => {
  const [objects, setObjects] = useState(null);

  const addObject = () => {
    const newObject = {
      isQuest: true,
      difficultyLevel: "easy",
      title: "new quest",
      date: "2023-03-07",
      type: "family",
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
      await savetoarray().then((res) => setObjects(res.data[0].todoListIds));
    };
    fetchData();
  }, []);

  if (objects === null) return <div>Loading...</div>;
  todayQuests = objects.filter(
    (object) => object.date === today && object.status === "undone"
  );
  tomorrowQuests = objects.filter((object) => object.date === tomorrow);
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
                  type={obj.category}
                  difficultyLevel={obj.difficulty}
                  isQuest={obj.type}
                  status={obj.status}
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
                  type={obj.category}
                  difficultyLevel={obj.difficulty}
                  isQuest={obj.type}
                  status={obj.status}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.done_section}>
        <p className={styles.done_section_text}>Done</p>
        <div className={styles.done_section_cards}>
          <ul className={styles.done_section_list}>
            {doneQuests.map((obj) => (
              <li key={obj._id} className={styles.list_item}>
                <Tile
                  title={obj.title}
                  date={obj.date}
                  type={obj.category}
                  difficultyLevel={obj.difficulty}
                  isQuest={obj.type === "quest"}
                  status={obj.status}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <ul className={styles.list_items}>
        {todayQuests.map((obj) => (
          <li key={obj.id} className={styles.list_item}>
            <Tile
              title={obj.title}
              date={obj.date}
              type={obj.category}
              difficultyLevel={obj.difficulty}
              isQuest={obj.type === "quest"}
            />
          </li>
        ))}
        {tomorrowQuests.map((obj) => (
          <li key={obj.id} className={styles.list_item}>
            <Tile
              title={obj.title}
              date={obj.date}
              type={obj.category}
              difficultyLevel={obj.difficulty}
              isQuest={obj.type === "quest"}
            />
          </li>
        ))}
      </ul> */}
    </>
  );
};
