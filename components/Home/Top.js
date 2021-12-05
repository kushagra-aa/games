import Image from "next/image";

let cards = [
  {
    img: "https://cdn.game.tv/game-tv-content/images_2/mobile/game_stretch/0fde9bfa7745988c4500f0680aeb8393/en/0fde9bfa7745988c4500f0680aeb8393.jpg",
    title: "Garena Free Fire",
  },
  {
    img: "https://cdn.game.tv/game-tv-content/images_2/mobile/game_stretch/7fab97f8f1b400bdfd119561035c2b1d/en/7fab97f8f1b400bdfd119561035c2b1d.jpg",
    title: "Brawl Stars",
  },
  {
    img: "https://cdn.game.tv/game-tv-content/images_2/mobile/game_stretch/565b2eb6e421cd08354092fa0d79e5d8/en/565b2eb6e421cd08354092fa0d79e5d8.jpg",
    title: "Clash Royale",
  },
  {
    img: "https://cdn.game.tv/game-tv-content/images_2/mobile/game_stretch/676560b6897f7b09be8fd26c3d02b83e/en/676560b6897f7b09be8fd26c3d02b83e.jpg",
    title: "PUBG MOBILE",
  },
  {
    img: "https://cdn.game.tv/game-tv-content/images_2/mobile/game_stretch/e2db9add44af22e85d2164e36b1d5102/en/e2db9add44af22e85d2164e36b1d5102.jpg",
    title: "Call of Duty",
  },
];
export const Top = () => {
  return (
    <>
      <div className="home-top-con home-in-con">
        <h2>Top Games</h2>
        <div className="top-cards">
          {cards.map((card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="top-cards-card">
                <Image
                  src={card.img}
                  alt={card.title}
                  className="top-card-img"
                  width="214.4px"
                  height="287px"
                ></Image>
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Top;
