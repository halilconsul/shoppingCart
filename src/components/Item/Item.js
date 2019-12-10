import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Item.scss";

const Item = ({ item, cartable, addToCart, reduceFromCart, removeItem }) => (
  <div className={styles.item}>
    {cartable && (
      <FontAwesomeIcon
        className={styles.itemRemove}
        icon={faTimesCircle}
        size={"sm"}
        color={"#333"}
        onClick={removeItem}
      />
    )}
    {item.bestSeller && <span className={styles.flag}>Best Seller</span>}
    <div className={styles.item__details}>
      <div className={styles.item__imgContainer}>
        <Link to={`/items/${item.id}`}>
          <img className={styles.item__img} src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className={styles.item__info}>
        <div className={styles.item__title}>
          <Link to={`/items/${item.id}`} className={styles.item__titleLink}>
            {item.title}
          </Link>
        </div>
        <div className={styles.item__model}>{item.model}</div>
        <div className={styles.item__description}>{item.description}</div>
        <div className={styles.item__label}>{item.label}</div>
      </div>
    </div>
    <div className={styles.item__availability}>
      <div className={styles.item__prices}>
        <div className={styles.item__newPrice}>{item.newPrice}</div>
        <div className={styles.item__oldPrice}>{item.oldPrice}</div>
      </div>
      <div>
        {cartable ? (
          <Counter
            addToCart={addToCart}
            reduceFromCart={reduceFromCart}
            defaultValue={item.quantity}
          />
        ) : (
          <Button size="sm" onClick={addToCart}>
            Add To Cart
          </Button>
        )}
      </div>
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
  cartable: PropTypes.bool,
  addToCart: PropTypes.func,
  reduceFromCart: PropTypes.func,
  removeItem: PropTypes.func
};

export default Item;
