import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.scss";

const Home = () => (
  <div className={styles.homePage}>
    <h1 className={styles.homePage__title}>Home Page</h1>
    <div className={styles.homePage__text}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, magnam ut
      est fuga cupiditate reprehenderit doloremque similique velit dolor
      consequatur nostrum. Amet nobis illo ex.
    </div>
    <div className={styles.homePage__text}>
      Please go to <Link to="/items"> Items Page </Link> to start your shopping.
    </div>
  </div>
);

export default Home;
