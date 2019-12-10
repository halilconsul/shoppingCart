import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemsNotFound.scss";

const ItemsNotFound = () => (
  <div className={styles.itemsNotFound}>
    <div>Looks like you don't have any items in your cart.</div>
    <div>
      Please, go to <Link to="/items">Items page</Link> to add something.
    </div>
  </div>
);

export default ItemsNotFound;
