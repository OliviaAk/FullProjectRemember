import React from "react";
import PropTypes from "prop-types";

const IconSVG = ({ src, className, handleClickIcon }) => (
  <span onClick={handleClickIcon}>
    <img src={src} className={className} alt="icon" />
  </span>
);

IconSVG.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  handleClickIcon: PropTypes.func.isRequired,
};
IconSVG.defaultProps = {
  handleClick: () => null,
  src: "",
};
export default IconSVG;
