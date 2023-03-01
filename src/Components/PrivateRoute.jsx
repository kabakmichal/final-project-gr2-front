import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("isLogged");
};

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = localStorage.getItem("isLogged");
  //   console.log(isLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
