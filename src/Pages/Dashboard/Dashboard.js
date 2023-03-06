import React from "react";
import css from "./Dashboard.module.css";
// import { useSelector } from "react-redux";
import { Tile } from "../../Components/Tile/Tile.jsx";
import { sortByDate } from "../../utils/sortByDate";
import { ReactComponent as TrophyIcon } from "./trophy.svg";

import { ListOfTiles } from "../../Components/ListOfTiles";
import { AddButton } from "../../Components/AddButton";

import LogOut from "./logout.svg";

export default function Dashboard() {
  // const quests = useSelector(getQuests);
  // console.log(quests);
  // const user = useSelector((state) => state.user);
  const user = "John’s";
  const userDisplay = user.email || "John’s";



  // lepiej byłoby zrobić jedną posortowaną już tablice i tam w zależności od isQuest wywoływać Quest albo Challenge

  // const array = [
  //   ...todayQuestsArray.map((quest) => (
  //     <li>
  //       <QuestTile
  //         difficultyLevel={quest.hardness}
  //         title={quest.title}
  //         date={"Today, " + quest.date.slice(16, 21)}
  //         type={quest.type}
  //         isQuest={quest.isQuest}
  //       />
  //     </li>
  //   )),
  //   ...challenges.map((quest) => (
  //     <li>
  //       <ChallengeTile
  //         difficultyLevel={quest.hardness}
  //         title={quest.title}
  //         date={quest.date}
  //         type={quest.type}
  //         isQuest={quest.isQuest}
  //       />
  //     </li>
  //   )),
  // ];

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
          <a className={css.header_challenge}>
            <svg className={css.header_challenge_icon} width="14" height="14">
              <TrophyIcon />
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
          {/* <ul className={css.today_section_list}>{array}</ul> */}
          <ListOfTiles />
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
  );
}
