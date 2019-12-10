import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.scss";

const NotFoundPage = () => (
  <div className={styles.notFoundPage}>
    <h1 className={styles.notFoundPage__title}>
      Sorry, it seems like this page does not exist.
    </h1>
    <div className={styles.notFoundPage__text}>
      Please go to <Link to="/items">Items Page</Link> to continue your
      shopping.
    </div>
  </div>
);

export default NotFoundPage;
