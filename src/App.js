import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/quest/store";
// import AuthModal from "./Components/AuthModal/AuthModal";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
