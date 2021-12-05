import Image from "next/image";

export const Get = () => {
  return (
    <>
      <div className="home-in-con home-get-con">
        <p>
          Turn your passion into profits. Be the gaming content creator you want
          to be.
        </p>
        <div className="get-links-con">
          <p>Start your #StoryofGlory with game.tv</p>
          <div className="get-apple">
            <Image
              src="https://cdn.game.tv/images/league/apple-store-badge.png"
              width="100%"
              height="50%"
              alt="apple"
            ></Image>
          </div>
          <div className="get-play">
            <Image
              src="https://cdn.game.tv/images/league/google-play-badge.png"
              alt="playstore"
              width="100%"
              height="50%"
            ></Image>
          </div>
          <div className="get-qr">
            <Image
              src="	https://cdn.game.tv/features/QR.png"
              alt="qr"
              width="100%"
              height="100%"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};
export default Get;
