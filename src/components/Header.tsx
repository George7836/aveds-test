import React from "react";
import { LogoIcon } from "../icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className="nav">
        <Link className="nav__contacts" to="/contacts">
          Контакты
        </Link>
        <Link className="nav__login" to="/login">
          <button className="nav__btn btn-reset">Войти</button>
        </Link>
      </nav>
    </header>
  );
}
