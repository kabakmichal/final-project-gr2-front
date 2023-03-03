import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3, "Name must be longer than 3 letters")
    .max(32)
    .required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(32).required(),
});
