import { HashRouter } from "react-router-dom";
import "./styles/main.scss";
import AppRouter from "./components/AppRouter";
import Login from "./components/Login";

function App() {
  return (
    <HashRouter basename="/">
      <AppRouter />
      <Login />
    </HashRouter>
  );
}

export default App;
