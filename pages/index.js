import Nav from "../components/Nav";
import HomePage from "../components/Home";
import Foot from "../components/Foot";
export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="container">
        <HomePage></HomePage>
      </div>
      <Foot></Foot>
    </>
  );
}
