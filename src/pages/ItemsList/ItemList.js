import React from "react";
import Items from "../../components/Items/Items";
import Filters from "../../components/Filters/Filters";
import styles from "./ItemList.scss";

const ItemList = () => (
  <div className={styles.itemList}>
    <Filters />
    <Items />
  </div>
);

export default ItemList;
