import { LogoIcon } from "../icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { handleModal, status, changeStatus } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    changeStatus();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to={status.authorized ? "/account" : "/"}>
        <LogoIcon />
      </Link>
      <nav className="nav">
        <Link className="nav__contacts" to="/contacts">
          Контакты
        </Link>
        <button
          className="nav__btn btn-reset"
          onClick={status.authorized ? logout : handleModal}
        >
          {status.authorized ? "Выйти" : "Войти"}
        </button>
      </nav>
    </header>
  );
}
