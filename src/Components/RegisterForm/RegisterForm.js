import React, { useState } from "react";
import css from "./RegisterForm.module.css";
import axios from "./../../Api/axios";
import { userSchema } from "../../Validations/UserValidation";

// const USER_REGEX = /^[a-zA-Z]+([._]?[a-zA-Z]+){3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

const REGISTER_URL = "/api/users/register";

export default function RegisterForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("emailValue"));
  const [password, setPassword] = useState("");

  const createUser = async (e) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    if (!isValid) {
      return console.log("Invalid entries");
    }
    // console.log("poszło");
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username: name, email, password }),
        // JSON.stringify({
        //   username: "Karol",
        //   email: "fmalin100@gmail.com",
        //   password: "Jamajka123",
        // }),
        {
          headers: { "Content-type": "application/json" },
        }
      );
      alert(
        `To complete registration, please verify your email address. ${response.data.message}`
      );
      console.log(JSON.stringify(response.data.user.verify));
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.response.data.message);
    }
    // alert("Submited");
  };

  return (
    <form onSubmit={createUser}>
      <label>Username</label>
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
      {/* <label>Confirm password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="********"
        id="password2"
        name="password2"
      /> */}
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
