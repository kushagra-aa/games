import Image from "next/image";

let cards = [
  {
    img: "https://cdn.game.tv/images/dev-portal/feature-1.png",
    title: "Grow organic usage",
    des: "Draw players in, one tournament at a time",
  },
  {
    img: "https://cdn.game.tv/images/dev-portal/feature-2.png",
    title: "Grow retention",
    des: "Loyal returning players are the core of the mobile gaming age.",
  },
  {
    img: "https://cdn.game.tv/images/dev-portal/feature-3.png",
    title: "Grow community",
    des: "Say hello to an ever growing family of dedicated players",
  },
];
export const Cards = () => {
  return (
    <>
      <div className="easy-cards">
        {cards.map((card) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="easy-cards-card">
              <Image
                src={card.img}
                alt={card.title}
                width="200px"
                height="200px"
              ></Image>
              <h3>{card.title}</h3>
              <p>{card.des}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
