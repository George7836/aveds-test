import { ReactNode } from "react";
import { HeartIcon, StethoscopeIcon, CancerIcon } from "../icons";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import PersonalAccount from "./PersonalAccount";

type Card = {
  icon: ReactNode;
  title: string;
  content: string;
};

const cards: Card[] = [
  {
    icon: <HeartIcon />,
    title: "Онлайн-прием",
    content: "Рыба текст",
  },
  {
    icon: <StethoscopeIcon />,
    title: "Экстренный Случай",
    content: "Рыба текст",
  },
  {
    icon: <CancerIcon />,
    title: "Лечение рака",
    content: "Рыба текст",
  },
];

export default function Main() {
  const { handleModal } = useAppContext();
  const { status } = useAppContext();

  if (status.authorized) {
    return <PersonalAccount />;
  }

  return (
    <main className="main-page">
      <h1 className="main-page__title">
        Место для получения медицинской помощи
      </h1>
      <div className="main-page__buttons">
        <button className="button" onClick={handleModal}>
          Войти
        </button>
        <Link to="/contacts">
          <button className="button button--outlined">Контакты</button>
        </Link>
      </div>
      <div className="main-page__cards">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </main>
  );
}
