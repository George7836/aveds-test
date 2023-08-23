import { HashRouter } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <div className="wrapper">
        <div className="container">Контент</div>
      </div>
    </HashRouter>
  );
}

export default App;
