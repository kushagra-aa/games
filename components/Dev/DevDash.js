import Image from "next/image";

export const DevDash = () => {
  return (
    <>
      <div className="dash-con">
        <Image
          src="https://cdn.game.tv/images/dev-portal/dashboard.png"
          alt="Dashboard"
          width="650px"
          height="330px"
        ></Image>
        <h3>Developer Dashboard</h3>
        <p>
          A custom interface for your master plans to unfold. Providing all you
          need to monitor, tweak and personalise operations. Includes API
          Testing and customisation, Player and Tournament stats, and more.
        </p>
      </div>
    </>
  );
};
export default DevDash;
