import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Counter from "../../components/Counter/Counter";
import { addItem, reduceItem } from "../../actions/cart";
import Button from "../../components/Button/Button";
import styles from "./ItemDescription.scss";

const ItemDescription = ({ item, dispatch, match }) => {
  const handleItemAdd = () => {
    dispatch(addItem(match.params.itemId));
  };

  const handleItemReduce = () => {
    dispatch(reduceItem(match.params.itemId));
  };

  return (
    <div className={styles.itemDescription}>
      <div className={styles.itemDescription__info}>
        <div className={styles.itemDescription__imgWrapper}>
          {item.bestSeller && <span className={styles.flag}>Best Seller</span>}
          <img
            className={styles.itemDescription__img}
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className={styles.itemDescription__intro}>
          <h2 className={styles.itemDescription__title}>{item.title}</h2>
          <div className={styles.itemDescription__label}>{item.label}</div>
          <div className={styles.itemDescription__overview}>
            {item.description}
          </div>
          <ul className={styles.itemDescription__options}>
            {item.options.map((option, index) => (
              // TODO: index for keys - not cool!
              <li key={index} className={styles.itemDescription__option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentContainer__wrapper}>
          <div className={styles.paymentContainer__prices}>
            <div className={styles.paymentContainer__newPrice}>
              {item.newPrice}
            </div>
            <div className={styles.paymentContainer__oldPrice}>
              {item.oldPrice}
            </div>
          </div>
          <Counter
            defaultValue={item.quantity ? item.quantity : 0}
            addToCart={handleItemAdd}
            reduceFromCart={handleItemReduce}
          />
          <div className={styles.itemDescription__addToCartContainer}>
            <Button size={"md"} onClick={handleItemAdd}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ items, cart }, { match }) => {
  const selectedItem = { ...items[match.params.itemId] };

  if (cart[match.params.itemId]) {
    selectedItem.quantity = cart[match.params.itemId].quantity;
  }

  return {
    item: selectedItem
  };
};

ItemDescription.propTypes = {
  item: PropTypes.object,
  dispatch: PropTypes.func,
  match: PropTypes.object
};

export default connect(mapStateToProps)(ItemDescription);
