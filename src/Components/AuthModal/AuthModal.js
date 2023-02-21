import React, { useState } from "react";
import css from "./AuthModal.module.css";

import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function AuthModal({ open, onClose }) {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  if (!open) return null;
  return (
    <div onClick={onClose} className={css.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={css.modalContainer}
      >
        {currentForm === "login" ? (
          <LoginForm onFormSwitch={toggleForm} />
        ) : (
          <RegisterForm onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}
