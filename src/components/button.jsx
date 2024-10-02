import "../scss/navigation.scss";
import PropTypes from "prop-types";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="menuBtn"
      onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Button;
