import React from "react";
import css from "./Dashboard.module.css";
// import { useSelector } from "react-redux";
import { Tile } from "../../Components/Tile/Tile.jsx";
import { sortByDate } from "../../utils/sortByDate";
import { ReactComponent as TrophyIcon } from "./trophy.svg";

import { ListOfTiles } from "../../Components/ListOfTiles";
import { AddButton } from "../../Components/AddButton";

import LogOut from "./logout.svg";

import { EditedTile } from "../../Components/EditedTile";

export default function Dashboard() {
  // const quests = useSelector(getQuests);
  // console.log(quests);
  // const user = useSelector((state) => state.user);
  const user = "John’s";
  const userDisplay = user.email || "John’s";

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

      <ListOfTiles />
      <EditedTile />
    </div>
  );
}
