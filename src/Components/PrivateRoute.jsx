import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("isLogged");
  console.log(user);
};

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
