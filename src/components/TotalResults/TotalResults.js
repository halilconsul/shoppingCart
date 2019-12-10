import React from "react";
import PropTypes from "prop-types";
import styles from "./TotalResults.scss";

const TotalResults = ({ totalPrice, totalQuantity }) => (
  <React.Fragment>
    <div className={styles.cartComponent__text}>
      Total Price:
      <span className={styles.cartComponent__value}>{`$${totalPrice}`}</span>
    </div>
    <div className={styles.cartComponent__text}>
      Items:
      <span className={styles.cartComponent__value}>{totalQuantity}</span>
    </div>
    <div className={styles.cartComponent__text}>
      Payment:
      <span className={styles.cartComponent__value}>Online by cart</span>
    </div>
  </React.Fragment>
);

TotalResults.propTypes = {
  totalPric: PropTypes.number,
  totalQuantity: PropTypes.number
};

export default TotalResults;
