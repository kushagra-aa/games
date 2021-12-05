import Image from "next/image";

let cards = [
  {
    img: "https://cdn.game.tv/images/news/forbes.png",
    date: "10-Mar-2020",
    des: "Revolutionizing Mobile Gaming With Game.tv: A Conversation With Ex-McAfee CTO Rosen Sharma",
  },
  {
    img: "https://cdn.game.tv/images/news/sportskeeda.png",
    date: "09-Mar-2021",
    des: "Game.TV launches new campaign #GrowingStronger to encourage growing female gamers in India on International Women’s Day",
  },
  {
    img: "https://cdn.game.tv/images/news/gamigon.png",
    date: "05-Mar-2021",
    des: "Game.tv launches new campaign #GrowingStronger to encourage growing female gamers in India",
  },
];
export const News = () => {
  return (
    <>
      <div className="home-in-con home-news-con">
        <h2>game.tv in the News</h2>
        <div className="news-cards">
          {cards.map((card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="news-cards-card">
                <figure>
                  <Image
                    src={card.img}
                    alt={card.des}
                    height="90px"
                    width="263px"
                  ></Image>
                </figure>
                <div className="news-card-details">
                  <h4>{card.date}</h4>
                  <p>{card.des}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="app-btn">view more</button>
      </div>
    </>
  );
};
export default News;
