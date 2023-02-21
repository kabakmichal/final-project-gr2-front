import React, { useState } from "react";
import css from "./RegisterForm.module.css";

export default function RegisterForm(props) {
  const [email, setEmail] = useState(localStorage.getItem("emailValue"));
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <form>
      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="name"
        placeholder="Enter your name"
        id="name"
        name="name"
      />
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
      <button className={css.formSubmit}>Register</button>
      <button
        className={css.linkBtn}
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </form>
  );
}
