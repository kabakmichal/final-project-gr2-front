import React, { useState } from "react";
import css from "./AuthModal.module.css";

export default function AuthModal({ setModal }) {
  //   const [modal, setModal] = useState(false);

  //   const toggleModal = () => {
  //     setModal(!modal);
  //   };

  return (
    <div className={css.auth_modal}>
      <div className={css.overlay}></div>
      <div className={css.auth_form}>
        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className={css.modal_submit}>Login</button>
        </form>
      </div>
    </div>
  );
}
