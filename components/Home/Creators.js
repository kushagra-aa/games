import Image from "next/image";

let creators = [
  "https://cdn.game.tv/images/homepage/creators/creator1.png",
  "https://cdn.game.tv/images/homepage/creators/creator2.png",
  "https://cdn.game.tv/images/homepage/creators/creator3.png",
  "https://cdn.game.tv/images/homepage/creators/creator4.png",
  "https://cdn.game.tv/images/homepage/creators/creator5.png",
  "https://cdn.game.tv/images/homepage/creators/creator6.png",
  "https://cdn.game.tv/images/homepage/creators/creator7.png",
  "https://cdn.game.tv/images/homepage/creators/creator8.png",
  "https://cdn.game.tv/images/homepage/creators/creator9.png",
  "https://cdn.game.tv/images/homepage/creators/creator10.png",
];
let cards = [
  {
    des: "Game.tv has the easiest way to build community start and manage Esports tournaments. Thank you Game.tv.",
    name: "Sheeffo",
    followers: "3720 followers",
    img: "https://cdn.game.tv/images/homepage/Vezir-Bey-Pubg.png",
  },
  {
    des: "The easiest way to save time and do tournaments is Game.tv .Even if the number of players in the tournament is large Game.tv makes it easy to manage. Thank you Game.tv.",
    name: "HARIT free fire",
    followers: "10632 followers",
    img: "https://cdn.game.tv/images/homepage/HARIT-free-fire.png",
  },
  {
    des: "With Fan Pass, you can create an income model and grow your community as you wish. Thank you Game.tv",
    name: "Vezir Bey Pubg",
    followers: "33266 followers",
    img: "https://cdn.game.tv/images/homepage/sheeffo.png",
  },
];
export const Creators = () => {
  return (
    <>
      <div className="home-creators-con home-in-con">
        <h2>
          Get Inspired by 200k+ Elite Gaming Content Creators and their Stories
          of Glory
        </h2>
        <div className="creators-bubbles">
          {creators.map((card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Image
                src={card}
                alt="Creator"
                className="creators-bubble"
                width="100%"
                height="100%"
              ></Image>
            );
          })}
        </div>
        <div className="creators-cards">
          {cards.map((card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="creator-cards-card">
                <p>{card.des}</p>
                <div className="creator-card-name">{card.name}</div>
                <div className="creator-card-followers">{card.followers}</div>
                <Image
                  src={card.img}
                  alt={card.name}
                  width="100%"
                  height="100%"
                  className="creator-card-img"
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Creators;
