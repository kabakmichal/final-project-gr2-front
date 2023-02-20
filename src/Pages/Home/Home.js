import React, { Component, useState } from "react";
import css from "./Home.module.css";

import AuthModal from "../../Components/AuthModal/AuthModal";

export default function Home() {
  const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  return (
    <div>
      <div className={css.container_page}>
        <div className={css.container_text}>
          <a href="../Dashboard/dashboard.html" className={css.logo}>
            Questify
          </a>
          <p className={css.main_description}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>
        </div>
        <form action="" className={css.login_form}>
          <label className={css.login_label}>
            Choose your name to sign up or log in
          </label>
          <input type="text" className={css.login_input} />
          <button
            type="submit"
            className={css.login_go}
            onClick={() => {
              setModal(true);
            }}
          >
            go!
          </button>
        </form>
      </div>
      {modal && <AuthModal setModal={setModal} />}
    </div>
  );
}
