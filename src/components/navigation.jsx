import "../css/navigation.css";
import Logo from "../assets/images/logoPlaceholder.webp";

const Navigation = () => {
  return (
    <div className="navbar">
      <button className="toggle">
        <img
          src={Logo}
          alt="logo"
          className="logo"></img>
      </button>

      <nav className="menu">
        <a
          href="#"
          className="menuBtn">
          Home
        </a>
        <a
          href="#"
          className="menuBtn">
          About
        </a>
        <a
          href="#"
          className="menuBtn">
          Comic
        </a>
        <a
          href="#"
          className="menuBtn">
          Runner
        </a>
        <a
          href="#"
          className="menuBtn">
          Gallery
        </a>
        <a
          href="#"
          className="menuBtn">
          Credits
        </a>
        <span></span>
      </nav>
    </div>
  );
};

export default Navigation;
