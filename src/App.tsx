import { HashRouter } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <HashRouter basename="/">
      <div className="wrapper">
        <div className="container">Контент</div>
      </div>
    </HashRouter>
  );
}

export default App;
