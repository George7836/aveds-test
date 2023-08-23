import { HashRouter } from "react-router-dom";
import "./styles/main.scss";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <HashRouter basename="/">
      <AppRouter />
    </HashRouter>
  );
}

export default App;
