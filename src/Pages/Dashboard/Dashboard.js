import React from "react";
import css from "./Dashboard.module.css";
// import { useSelector } from "react-redux";
import { Tile } from "../../Components/Tile/Tile.jsx";
import { sortByDate } from "../../utils/sortByDate";
import { ReactComponent as TrophyIcon } from "./trophy.svg";

import { ListOfTiles } from "../../Components/ListOfTiles";
import { AddButton } from "../../Components/AddButton";
import { useNavigate } from "react-router-dom";
import LogOut from "./logout.svg";

import { EditedTile } from "../../Components/EditedTile";

export default function Dashboard() {
  // const quests = useSelector(getQuests);
  // console.log(quests);
  // const user = useSelector((state) => state.user);
  const user = "John’s";
  const userDisplay = user.email || "John’s";

<<<<<<< HEAD
const navigate = useNavigate();

  const logOut = () => { 
    localStorage.clear();
    navigate("/")
  }

=======
>>>>>>> 794c11f45b6cd2f8b9d87ceca91b8ba83a555a17
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
            <button onClick={logOut} type="button" className={css.header_button}>
              <img src={LogOut} alt="Logout"></img>
            </button>
        </div>
      </header>
<<<<<<< HEAD
      <ListOfTiles />
      <a className={css.add_challenge} href="Dashboard.js">
        <svg className={css.add_challenge_icon} width="52" height="52">
          <use href="../public/assets/images/icons.svg#icon-add-button"></use>
        </svg>
      </a>
      {/* <AddButton /> */}
=======

      <div className={css.today_section}>
        <p className={css.today_section_text}>TODAY</p>
        <div className={css.today_section_cards}>
          {/* <ul className={css.today_section_list}>{array}</ul> */}
          <ListOfTiles />
          <EditedTile />
        </div>
      </div>
>>>>>>> 794c11f45b6cd2f8b9d87ceca91b8ba83a555a17
    </div>
  );
}
