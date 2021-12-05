let cards = [
  "Sign up and create a profile. Be crazy. Be cool. Be you.",
  "Curate exclusive offerings. Keep the surprises coming.",
  "Build a thriving community. Turn fans into superfans.",
  "Grow income doing what you love. Go for glory.",
];
export const Easy = () => {
  return (
    <>
      <div className="home-easy-con home-in-con">
        <h2>It{"'"}s Easy to Get Started. Game On.</h2>
        <p>game.tv helps you earn money while you play, create and share.</p>
        <div className="home-easy-cards">
          {cards.map((card) => {
            // eslint-disable-next-line react/jsx-key
            return <div className="home-easy-cards-card">{card}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Easy;
