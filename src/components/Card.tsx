import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  content: string;
}

export default function Card({ icon, title, content }: CardProps) {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <div className="card__line"></div>
      <p className="card__content">{content}</p>
    </div>
  );
}
