import { CancelIcon } from "../icons";

export default function Login() {
  return (
    <div className="login">
      <div className="login-block">
        <div className="login-block__header">
          <h3 className="login-block__title">Авторизация</h3>
          <button
            className="login-block__cancel-btn btn-reset"
            // onClick={() => setModalActive(!modalActive)}
          >
            <CancelIcon />
          </button>
        </div>
        <input
          className="login-block__input"
          type="text"
          placeholder="логин"
          // onChange={inputHandle}
        />
        <input
          className="login-block__input"
          type="text"
          placeholder="пароль"
          // onChange={inputHandle}
        />
        <button className="button">Войти</button>
      </div>
    </div>
  );
}
