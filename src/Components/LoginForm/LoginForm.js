import React, { useState } from "react";
import css from "./LoginForm.module.css";

export default function LoginForm(props) {
  const [email, setEmail] = useState(localStorage.getItem("emailValue"));
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        id="email"
        name="email"
      />
      <label>Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="********"
        id="password"
        name="password"
      />
      <button type="submit" className={css.formSubmit}>
        Login
      </button>
      <button
        className={css.linkBtn}
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </form>
  );
}
