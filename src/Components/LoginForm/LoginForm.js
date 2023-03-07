import React, { useState } from "react";
import css from "./LoginForm.module.css";
import { userSchema } from "../../Validations/UserValidation";
import axios from "./../../Api/axios";
import { useNavigate } from "react-router-dom";

const REGISTER_URL = "/api/users/login";

export default function LoginForm(props) {
  const [email, setEmail] = useState(localStorage.getItem("emailValue"));
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("emailValue");
    //Form validation
    // let formData = {
    //   email: e.target[0].value,
    //   password: e.target[1].value,
    // };
    // const isValid = await userSchema.isValid(formData);
    // if (!isValid) {
    //   return console.log("Invalid entries", email, password);
    // }

    //Backend communication
    try {
      const response = await axios.put(
        REGISTER_URL,
        // JSON.stringify({ email, password }),
        JSON.stringify({
          email: "kamilkrolik@hotmail.com",
          password: "kkkkkk",
        }),
        {
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.data.user.verify) {
        localStorage.setItem("isLogged", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        // console.log(JSON.stringify(response.data.token));
      } else {
        throw new Error("User is not verified");
      }
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
    }
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

// const checkVerification = async (user) => {
//   try {
//     const response = await axios.get(`/api/users/${user.username}`);

//     if (response.data.verify) {
//       // create and return token
//       const token = // generate token logic
//       return token;
//     } else {
//       throw new Error('User is not verified');
//     }
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to verify user');
//   }
// }
