import React from "react";
import { Link } from "react-router-dom";
import styles from "./ThankYou.scss";

const ThankYou = () => (
  <div className={styles.thankYou}>
    <h1 className={styles.thankYou__title}>Thank You!</h1>
    <div className={styles.thankYou__text}>
      You can go to <Link to="/items"> Items Page </Link> to find something new.
    </div>
  </div>
);

export default ThankYou;
