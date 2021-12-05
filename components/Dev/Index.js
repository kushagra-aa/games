import Hero from "./Hero";
import Cards from "./Cards";
import Demo from "./Demo";
import DevDash from "./DevDash";

export const Dev = () => {
  return (
    <>
      <div className="hero-cards">
        <Hero></Hero>
        <Cards></Cards>
      </div>
      <DevDash></DevDash>
      <Demo></Demo>
    </>
  );
};

export default Dev;
