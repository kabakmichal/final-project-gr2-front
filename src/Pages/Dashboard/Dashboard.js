import React from "react";
import css from "./Dashboard.module.css";
import { Tile } from "../../Components/Tile/Tile.js";
import { ListOfTiles } from "../../Components/ListOfTiles";

export default function Dashboard() {
  // const user = useSelector((state) => state.user);
  const user = "John’s";
  const userDisplay = user.email || "John’s";

  const doQuestUntil = Date();

  console.log(doQuestUntil);

  // const todayQuestsArray = [
  //   {
  //     hardness: "easy",
  //     title: "reQuest",
  //     date: "Today:" + Date().slice(16, 21),
  //     type: "Health",
  //     isQuest: true,
  //   },
  //   {
  //     hardness: "easy",
  //     title: "reQuest",
  //     date: "Today:" + Date().slice(16, 21),
  //     type: "Health",
  //     isQuest: true,
  //   },
  // ];

  const tomorrowQuestsArray = [
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: "Tomorrow:" + Date().slice(16, 21),
      type: "Health",
      isQuest: true,
    },
  ];

  return (
    <div>
      <body>
        <header>
          <a href="Dashboard.js" className={css.header_logo}>
            Questify
          </a>
          <div className={css.header_menu_user}>
            <div className={css.user_logo}>{userDisplay[0]}</div>
            <p className={css.user_name}>{userDisplay} Quest Log</p>
          </div>
          <div className={css.header_icons}>
            <a className={css.header_challenge} href="Dashboard.js">
              <svg className={css.header_challenge_icon} width="14" height="14">
                <use href="../public/assets/images/icons.svg#icon-trophy"></use>
              </svg>
            </a>
            <a className={css.header_logout} href="Dashboard.js">
              <svg
                className={css.header_logout_icon}
                width="21.58"
                height="16.05"
              >
                <use href="../public/assets/images/icons.svg#icon-logout"></use>
              </svg>
            </a>
          </div>
        </header>
        <div className={css.today_section}>
          <p className={css.today_section_text}>TODAY</p>
          <div className={css.today_section_cards}>
              {/* {todayQuestsArray.map((quest) => (
                <li>
                  <Tile
                    difficultyLevel={quest.hardness}
                    title={quest.title}
                    date={quest.date}
                    type={quest.type}
                  />
                </li>
              ))} */}
              <ListOfTiles></ListOfTiles>
          </div>
        </div>
        <div className={css.tomorrow_section}>
          <p className={css.tomorrow_section_text}>TOMMORROW</p>
          <div className={css.tomorrow_section_cards}>
            <ul className={css.tomorrow_section_list}>
              {tomorrowQuestsArray.map((quest) => (
                <li>
                  <Tile
                    difficultyLevel={quest.hardness}
                    title={quest.title}
                    date={quest.date}
                    type={quest.type}
                    isQuest={quest.isQuest}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a className={css.add_challenge} href="Dashboard.js">
          <svg className={css.add_challenge_icon} width="52" height="52">
            <use href="../public/assets/images/icons.svg#icon-add-button"></use>
          </svg>
        </a>
      </body>
    </div>
  );
}
