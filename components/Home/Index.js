import Hero from "./Hero";
import Easy from "./Easy";
import Global from "./Global";
import Creators from "./Creators";
import Top from "./Top";
import News from "./News";
import Pop from "./Pop";
import Get from "./Get";
export const HomePage = () => {
  return (
    <div className="home-con">
      <Hero></Hero>
      <Easy></Easy>
      <Global></Global>
      <Creators></Creators>
      <Top></Top>
      <Get></Get>
      <News></News>
      <Pop></Pop>
    </div>
  );
};
export default HomePage;
