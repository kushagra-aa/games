import Image from "next/image";

let cards = [
  {
    title: "Garena Free Fire Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/0fde9bfa7745988c4500f0680aeb8393/en/0fde9bfa7745988c4500f0680aeb8393.png",
  },
  {
    title: "Brawl Stars Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/7fab97f8f1b400bdfd119561035c2b1d/en/7fab97f8f1b400bdfd119561035c2b1d.png",
  },
  {
    title: "Clash Royale Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/565b2eb6e421cd08354092fa0d79e5d8/en/565b2eb6e421cd08354092fa0d79e5d8.png",
  },
  {
    title: "PUBG MOBILE Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/676560b6897f7b09be8fd26c3d02b83e/en/676560b6897f7b09be8fd26c3d02b83e.png",
  },
  {
    title: "Call Of Duty Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/e2db9add44af22e85d2164e36b1d5102/en/e2db9add44af22e85d2164e36b1d5102.png",
  },
  {
    title: "Clash Of Clans Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/fcad9e099e98f684b3b5496e1bd75ddf/en/fcad9e099e98f684b3b5496e1bd75ddf.png",
  },
  {
    title: "8 Ball Pool Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/c08652fc74da56f428109accee793c4c/en/c08652fc74da56f428109accee793c4c.png",
  },
  {
    title: "Mobile Legends: Bang Bang Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/8b636cfb98059acde1b78f1642a64fd6/en/8b636cfb98059acde1b78f1642a64fd6.png",
  },
  {
    title: "Arena of Valor Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/35b31250de076a2724e4bb9588c3c1d1/en/35b31250de076a2724e4bb9588c3c1d1.png",
  },
  {
    title: "Auto Chess Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/dbe99eef8f5efc528635e12bb5f3e03c/en/dbe99eef8f5efc528635e12bb5f3e03c.png",
  },
  {
    title: "Rumble Stars Football Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/ca3df64816e1679ff99778254f6a273c/en/ca3df64816e1679ff99778254f6a273c.png",
  },
  {
    title: "Head Ball 2 Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/74d882bb030f22fd240eb30fb1837037/en/74d882bb030f22fd240eb30fb1837037.png",
  },
  {
    title: "Yu-Gi-Oh! Duel Links Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/fed14e2721eb815840dc55347320d12b/en/fed14e2721eb815840dc55347320d12b.png",
  },
  {
    title: "Ludo King Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/a039b44f7a3a4aeeade2f5a8a2456e14/en/a039b44f7a3a4aeeade2f5a8a2456e14.png",
  },
  {
    title: "Heartstone Tournaments",
    img: "https://cdn.game.tv/game-tv-content/images_2/default/game_icons/2c72e7398932c1026d1f60907b89711a/en/2c72e7398932c1026d1f60907b89711a.png",
  },
];

export const Pop = () => {
  return (
    <>
      <div className="home-in-con home-pop-con">
        <h2>Popular games</h2>
        <p>More Added Weekly</p>
        <div className="pop-cards">
          {cards.map((card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="pop-card">
                <Image
                  src={card.img}
                  alt={card.title}
                  width="100%"
                  height="100%"
                ></Image>
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
        <button className="app-btn">view more</button>
      </div>
    </>
  );
};
export default Pop;
