import { HashRouter } from "react-router-dom";
import "./styles/main.scss";
import AppRouter from "./components/AppRouter";
import Login from "./components/Login";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <HashRouter basename="/">
      <AppContextProvider>
        <AppRouter />
        <Login />
      </AppContextProvider>
    </HashRouter>
  );
}

export default App;
