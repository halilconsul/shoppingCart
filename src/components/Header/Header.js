import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../SearchInput/SearchInput";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.scss";

const Header = ({ totalCartQuantity }) => (
  <div className={styles.header__container}>
    <div className={styles.header__side}>
      <div className={styles.imageContainer}>
        <FontAwesomeIcon
          className={styles.logo}
          icon={faPuzzlePiece}
          color={"#666"}
        />
      </div>
      <div className={styles.menu__container}>
        <Navigation />
      </div>
    </div>
    <div className={styles.header__side}>
      <SearchInput />
      <Link to="/cart">
        <div className={styles.header__cartContainer}>
          <FontAwesomeIcon
            className={styles.cartIcon}
            icon={faShoppingCart}
            color={"#656565"}
          />
          {totalCartQuantity > 0 && (
            <span className={styles.cartItems}>{totalCartQuantity}</span>
          )}
        </div>
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => {
  const cartItems = Object.keys(cart);
  if (!cartItems.length) {
    return {};
  }

  const totalCartQuantity = cartItems.reduce((acc, val) => {
    return acc + cart[val].quantity;
  }, 0);

  return {
    totalCartQuantity
  };
};

Header.propTypes = {
  totalCartQuantity: PropTypes.number
};

export default connect(mapStateToProps)(Header);
