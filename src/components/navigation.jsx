import "../css/navigation.css";
import Logo from "../assets/images/logoPlaceholder.webp";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar hidden md:inline-block md:fixed ">
      <button className="toggle">
        <img
          src={Logo}
          alt="logo"
          className="logo"></img>
      </button>

      <nav className="menu">
        <a
          onClick={() => navigate("/home")}
          href="home"
          className="menuBtn">
          Home
        </a>

        <a
          href="about"
          className="menuBtn">
          About
        </a>
        <a
          href="comic"
          className="menuBtn">
          Comic
        </a>
        <a
          href="runner"
          className="menuBtn">
          Runner
        </a>
        <a
          href="gallery"
          className="menuBtn">
          Gallery
        </a>
        <a
          href="credits"
          className="menuBtn">
          Credits
        </a>
        <span></span>
      </nav>
    </div>
  );
};

export default Navigation;
