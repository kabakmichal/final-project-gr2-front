import React from "react";
import css from "./Dashboard.module.css";
// import { useSelector } from "react-redux";
import QuestTile from "../../Components/QuestTile/QuestTile";
import ChallengeTile from "../../Components/ChallengeTile/ChallengeTile";
import { nanoid } from "@reduxjs/toolkit";
import { sortByDate } from "../../utils/sortByDate";
import { useDispatch, useSelector } from "react-redux";
import { addQuest, getQuests } from "../../redux/quest/questSlice";
import { AddButton } from "../../Components/AddButton";

import LogOut from "./logout.svg";
import Trophy from "./trophy.svg";

export default function Dashboard() {
  const quests = useSelector(getQuests);
  console.log(quests);
  // const user = useSelector((state) => state.user);
  const user = "John’s";
  const userDisplay = user.email || "John’s";

  // lepiej byłoby zrobić jedną posortowaną już tablice i tam w zależności od isQuest wywoływać Quest albo Challenge
  const key = nanoid(6);
  const array = [
    ,// ...challenges.map((quest) => (
    //   <li>
    //     <ChallengeTile
    //       difficultyLevel={quest.hardness}
    //       title={quest.title}
    //       date={quest.date}
    //       type={quest.type}
    //       isQuest={quest.isQuest}
    //     />
    //   </li>
    // )),
  ];

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
            {quests.map((quest) => (
              <li key={nanoid(6)}>
                <QuestTile
                  title={quest.title}
                  date={quest.date}
                  type={quest.type}
                  id={quest.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className={css.tomorrow_section}>
        <p className={css.tomorrow_section_text}>TOMORROW</p>
        <div className={css.tomorrow_section_cards}>
          <ul className={css.tomorrow_section_list}>
            {tomorrowQuestsArray.map((quest) => (
              <li>
                <QuestTile
                  difficultyLevel={quest.hardness}
                  title={quest.title}
                  date={"Tomorrow, " + quest.date.slice(16, 21)}
                  type={quest.type}
                  isQuest={quest.isQuest}
                />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <a className={css.add_challenge} href="Dashboard.js">
        <svg className={css.add_challenge_icon} width="52" height="52">
          <use href="../public/assets/images/icons.svg#icon-add-button"></use>
        </svg>
      </a>
      <div className={css.add_btn}>
        <AddButton />
      </div>
    </div>
  );
}
