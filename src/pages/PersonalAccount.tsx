import { Link, useNavigate } from "react-router-dom";
import user from "../data.json";
import { useAppContext } from "../context/AppContext";

export default function PersonalAccount() {
  const navigate = useNavigate();
  const { handleModal, status, changeStatus } = useAppContext();

  const logout = () => {
    changeStatus();
    navigate("/");
  };

  if (!status.authorized) {
    return (
      <>
        <h1>Пожалуйста, авторизуйтесь, чтобы зайти в личный кабинет.</h1>
        <button className="button" onClick={handleModal}>
          Авторизоваться
        </button>
      </>
    );
  }

  return (
    <div className="account">
      <h1 className="account__greetings">Привет, {user.username}!</h1>
      <div className="account__buttons">
        <button className="button" onClick={logout}>
          Выйти из аккаунта
        </button>
        <Link to="/contacts">
          <button className="button button--outlined">
            Перейти в контакты
          </button>
        </Link>
      </div>
    </div>
  );
}
