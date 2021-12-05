import Image from "next/image";
import React from "react";

export const Foot = () => {
  return (
    <>
      <footer>
        <div className="logo">game.tv</div>
        <div className="foot-links-con foot-con-1">
          <div className="foot-link">home</div>
          <div className="foot-link">team</div>
          <div className="foot-link">contact us</div>
        </div>
        <div className="foot-links-con foot-con-2">
          <div className="foot-link">dashboard</div>
          <div className="foot-link">how to use tourney</div>
          <div className="foot-link">commands</div>
          <div className="foot-link">news</div>
        </div>
        <div className="foot-links-con foot-con-3">
          <div className="foot-link">terms of use</div>
          <div className="foot-link">cookie policy</div>
          <div className="foot-link">privacy policy</div>
        </div>
        <div className="foot-app">
          <p>download the application</p>
          <div className="foot-app-links">
            <div className="foot-app-badges">
              <Image
                src="https://cdn.game.tv/images/league/apple-store-badge.png"
                className="foot-img foot-badge foot-apple"
                width="100%"
                height="50%"
                alt="apple"
              ></Image>
              <Image
                src="https://cdn.game.tv/images/league/google-play-badge.png"
                alt="playstore"
                className="foot-img foot-badge foot-play"
                width="100%"
                height="50%"
              ></Image>
            </div>
            <Image
              src="	https://cdn.game.tv/features/QR.png"
              alt="qr"
              className="foot-img foot-qr"
              width="100%"
              height="100%"
            ></Image>
          </div>
        </div>
        <div className="foot-copy">Copyright©game.tv. All rights reserved.</div>
      </footer>
    </>
  );
};
export default Foot;
