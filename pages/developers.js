import Dev from "../components/Dev";
import Foot from "../components/Foot";
import Nav from "../components/Nav";

const dev = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <Dev></Dev>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default dev;
