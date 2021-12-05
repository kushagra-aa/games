import Image from "next/image";
import Link from "next/link";
import Search from "./../assets/icons/search.png";
export const Nav = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a className="nav-item logo">Game.tv</a>
        </Link>
        <Link href="/">
          <a className="nav-item">home</a>
        </Link>
        <Link href="/developers">
          <a className="nav-item">developer</a>
        </Link>
        <div className="nav-item">english</div>
        <div className="nav-item">
          <Image src={Search} alt="Search Icon" className="search-icon" />
        </div>
        <div className="nav-item app-btn">download the app</div>
      </nav>
    </>
  );
};
export default Nav;
