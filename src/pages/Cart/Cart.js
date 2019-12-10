import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Item from "../../components/Item/Item";
import TotalResults from "../../components/TotalResults/TotalResults";
import Button from "../../components/Button/Button";
import ItemsNotFound from "../../components/ItemsNotFound/ItemsNotFound";
import styles from "./Cart.scss";
import {
  addItem,
  reduceItem,
  removeItem,
  removeAllItems
} from "../../actions/cart";

const Cart = ({
  selectedItems,
  totalPrice,
  totalQuantity,
  dispatch,
  history
}) => {
  const handleItemAdd = itemId => () => {
    dispatch(addItem(itemId));
  };

  const handleItemReduce = itemId => () => {
    dispatch(reduceItem(itemId));
  };

  const handleItemRemove = itemId => () => {
    dispatch(removeItem(itemId));
  };

  const handleAllItemsRemove = () => {
    dispatch(removeAllItems());
  };

  const changeRoute = () => {
    history.push("/thank-you");
    handleAllItemsRemove();
  };

  return (
    <div className={styles.cartComponent}>
      <h1 className={styles.cartComponent__title}>My Order</h1>
      <div className={styles.cartComponent__wrapper}>
        <div className={styles.cartComponent__items}>
          {totalQuantity > 0 && (
            <div className={styles.cartComponent__clearAll}>
              <span
                className={styles.cartComponent__clearAllBtn}
                onClick={handleAllItemsRemove}
              >
                Remove All
              </span>
            </div>
          )}
          {selectedItems.length ? (
            selectedItems.map(item => (
              <Item
                key={item.id}
                item={item}
                cartable={true}
                addToCart={handleItemAdd(item.id)}
                reduceFromCart={handleItemReduce(item.id)}
                removeItem={handleItemRemove(item.id)}
              />
            ))
          ) : (
            <ItemsNotFound />
          )}
        </div>
        <div className={styles.cartComponent__info}>
          <TotalResults totalPrice={totalPrice} totalQuantity={totalQuantity} />
          <div className={styles.itemDescription__addToCartContainer}>
            <Button size={"md"} disabled={!totalQuantity} onClick={changeRoute}>
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ items, cart }) => {
  const selectedItems = Object.keys(cart).map(id => {
    return {
      ...items[id],
      id,
      quantity: cart[id].quantity
    };
  });

  const totalPrice = Object.keys(cart).reduce((acc, val) => {
    if (!items[val]) {
      return acc;
    }
    const totalPricePerItem =
      cart[val].quantity *
      parseFloat(items[val].newPrice.replace(/[^\d.-]/g, ""));
    return acc + totalPricePerItem;
  }, 0);

  const totalQuantity = Object.keys(cart).reduce((acc, val) => {
    return acc + cart[val].quantity;
  }, 0);

  return {
    selectedItems,
    totalPrice,
    totalQuantity
  };
};

Cart.propTypes = {
  selectedItems: PropTypes.array,
  totalPrice: PropTypes.number,
  totalQuantity: PropTypes.number,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Cart);
