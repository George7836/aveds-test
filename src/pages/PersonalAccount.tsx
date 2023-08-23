import { Link } from "react-router-dom";
import user from "../data.json";

export default function PersonalAccount() {
  return (
    <div className="account">
      <h1 className="account__greetings">Привет, {user.username}!</h1>
      <div className="account__buttons">
        <button className="button">Выйти из аккаунта</button>
        <Link to="/contacts">
          <button className="button--outlined">Перейти в контакты</button>
        </Link>
      </div>
    </div>
  );
}
