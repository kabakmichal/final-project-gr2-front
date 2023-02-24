import React from "react";
import css from "./Dashboard.module.css";
// import { useSelector } from "react-redux";

export default function Dashboard() {
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
    </div>
  );
}
