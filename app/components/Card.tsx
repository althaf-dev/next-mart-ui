"use client";
import React, { useContext } from "react";

export interface CardProps {
  title: string;
  extract?: string;
  featImage: string;
  children?: React.ReactNode;
}

const CardContext = React.createContext<CardProps>({
  title: "",
  featImage: "",
});

function Card({
  children,
  card
}: {
  children: React.ReactNode;
  card: CardProps;
}) {
  return (
    <CardContext.Provider value={card}>
      <div className="border border-blue-100 m-2 p-0 rounded w-1/4 flex flex-col gap-4 pb-2 justify-between">
        {children}
      </div>
    </CardContext.Provider>
  );
}

function Title() {
  const card = useContext(CardContext);
  const handleButtonCLick = () => {
    window.gtag("event", "block_read", {
      title:card.title,
      category: "cms",
    });
  };

  return (
    <p
      onClick={handleButtonCLick}
      className="cursor-pointer font-bold p-2 text-2xl"
    >
      {card.title}
    </p>
  );
}

function Image() {
  const card = useContext(CardContext);
  return (
    <img
      src={card.featImage}
      alt="featured image"
      className="object-cover w-full h-[240px] rounded-top"
    />
  );
}

function Excerpt() {
  const card = useContext(CardContext);
  return <p className="p-2">{card.extract}</p>;
}

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
      border p-2 border-blue-200 rounded m-2 cursor-pointer 
      hover:bg-blue-400 hover:text-white`}
    >
      {children}
    </button>
  );
}

Card.Title = Title;
Card.Image = Image;
Card.Excerpt = Excerpt;
Card.Button = Button;

export default Card;
