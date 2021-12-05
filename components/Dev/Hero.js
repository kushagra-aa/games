import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="hero-con">
        <h2>mobile esports made easy</h2>
        <p>
          A community-driven approach and powerful cloud integrations make
          Game.tv the esports platform of choice for the worlds best mobile game
          developers.
        </p>
        <button>Request Demo</button>
        <Image
          src="https://cdn.game.tv/images/dev-portal/hero-banner-desk.png"
          alt="hero"
          height="1000px"
          width="1000px"
        />
      </div>
    </>
  );
};
export default Hero;
