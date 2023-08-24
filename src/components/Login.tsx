import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { CancelIcon } from "../icons";
import user from "../data.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { modalIsOpen, handleModal, changeStatus } = useAppContext();
  const navigate = useNavigate();

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (username === user.username && password === user.password) {
      navigate("/account");
      handleModal();
      changeStatus();
    }
  };

  return (
    <div className={modalIsOpen ? "login" : "login login--hidden"}>
      <form role="form" className="login-block">
        <div className="login-block__header">
          <h3 className="login-block__title">Авторизация</h3>
          <button
            className="login-block__cancel-btn btn-reset"
            onClick={handleModal}
          >
            <CancelIcon />
          </button>
        </div>
        <input
          className="login-block__input"
          type="text"
          value={username}
          placeholder="логин"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="login-block__input"
          type="password"
          value={password}
          placeholder="пароль"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" className="button" onClick={(e) => login(e)}>
          Войти
        </button>
      </form>
    </div>
  );
}
