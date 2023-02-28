import React from "react";
import css from "./Dashboard.module.css";
// import { useSelector } from "react-redux";
import QuestTile from "../../Components/QuestTile/QuestTile"
import ChallengeTile from "../../Components/ChallengeTile/ChallengeTile"
import { sortByDate } from "../../utils/sortByDate";

import { AddButton } from "../../Components/AddButton";

import LogOut from "./logout.svg";
import Trophy from "./trophy.svg";

export default function Dashboard() {
  // const user = useSelector((state) => state.user);
  const user = "John’s";
  const userDisplay = user.email || "John’s";


  const challenges = [{
    hardness: "easy",
    title: "reQuest",
    date: Date(23, 2, 26, 10, 10, 10),
    type: "learning",
    isQuest: true
  },
  {
    hardness: "normal",
    title: "reQuest",
    date: Date(),
    type: "family",
    isQuest: true
  },
  {
    hardness: "hard",
    title: "very very long long title : reQuest",
    date: Date("2023-02-26 12:45:50"),
    type: "leisure",
    isQuest: true
  },
  ]

  const todayQuestsArray = [{
    hardness: "easy",
    title: "reQuest",
    date: Date("2023-02-26 18:50:50"),
    type: "health",
    isQuest: true
  },
  {
    hardness: "easy",
    title: "reQuest",
    date: Date(),
    type: "health",
    isQuest: true
  }
  ]

  const tomorrowQuestsArray = [
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "learning",
      isQuest: true
    },
    {
      hardness: "normal",
      title: "reQuest",
      date: Date(),
      type: "family",
      isQuest: true
    },
    {
      hardness: "hard",
      title: "very very long long title : reQuest",
      date: Date(),
      type: "leisure",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "work",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "stuff",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: false
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: true
    },
    {
      hardness: "easy",
      title: "reQuest",
      date: Date(),
      type: "health",
      isQuest: false
    },
  ];

  // lepiej byłoby zrobić jedną posortowaną już tablice i tam w zależności od isQuest wywoływać Quest albo Challenge

  const array = [
    ...todayQuestsArray.map(quest =>
      <li>
        <QuestTile
          difficultyLevel={quest.hardness}
          title={quest.title}
          date={"Today, " + quest.date.slice(16, 21)}
          type={quest.type}
          isQuest={quest.isQuest}
        />
      </li>
    ),
    ...challenges.map(quest =>
      <li>
        <ChallengeTile
          difficultyLevel={quest.hardness}
          title={quest.title}
          date={quest.date}
          type={quest.type}
          isQuest={quest.isQuest}
        />
      </li>)]



  return (
    <div>
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
              <img src={Trophy} alt="Trophy"></img>
            </svg>
          </a>
          <a className={css.header_logout} href="Dashboard.js">
            <button type="button" className={css.header_button}>
              <img src={LogOut} alt="Logout"></img>
            </button>
          </a>
        </div>
      </header>
      <div className={css.today_section}>
        <p className={css.today_section_text}>TODAY</p>
        <div className={css.today_section_cards}>
          <ul className={css.today_section_list}>
            {array}
          </ul>
        </div>
      </div>
      <div className={css.tomorrow_section}>
        <p className={css.tomorrow_section_text}>TOMORROW</p>
        <div className={css.tomorrow_section_cards}>
          <ul className={css.tomorrow_section_list}>
            {tomorrowQuestsArray.map(quest =>
              <li>
                <QuestTile
                  difficultyLevel={quest.hardness}
                  title={quest.title}
                  date={"Tomorrow, " + quest.date.slice(16, 21)}
                  type={quest.type}
                  isQuest={quest.isQuest}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <a className={css.add_challenge} href="Dashboard.js">
        <svg className={css.add_challenge_icon} width="52" height="52">
          <use href="../public/assets/images/icons.svg#icon-add-button"></use>
        </svg>
      </a>
      <AddButton/>
    </div>
  );
}
