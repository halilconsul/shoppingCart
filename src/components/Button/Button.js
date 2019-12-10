import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.scss";

const Button = ({ children, size = "sm", onClick, disabled }) => {
  const buttonClassName = classNames({
    [styles.btn]: true,
    [styles.btn_sm]: size === "sm",
    [styles.btn_md]: size === "md",
    [styles.btn_lg]: size === "lg"
  });

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
