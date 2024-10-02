import "../css/navigation.css";
import Button from "./button.jsx";
import Logo from "../assets/images/logoPlaceholder.webp";

const Navigation = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="navbar">
      <button className="toggle">
        <img
          src={Logo}
          alt="logo"
          className="logo"></img>
      </button>

      <ul className="menu">
        <li>
          <Button
            label="Home"
            onClick={handleClick}
          />
        </li>
        <li>
          <Button
            label="About"
            onClick={handleClick}
          />
        </li>
        <li>
          <Button
            label="Comic"
            onClick={handleClick}
          />
        </li>
        <li>
          <Button
            label="Runner"
            onClick={handleClick}
          />
        </li>
        <li>
          <Button
            label="Gallery"
            onClick={handleClick}
          />
        </li>
        <li>
          <Button
            label="Credits"
            onClick={handleClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
