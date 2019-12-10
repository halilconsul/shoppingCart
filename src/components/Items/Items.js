import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem, reduceItem } from "../../actions/cart";
import Item from "../Item/Item";
import styles from "./Items.scss";

const Items = ({ items, dispatch }) => {
  const handleItemAdd = itemId => () => {
    dispatch(addItem(itemId));
  };

  const handleItemReduce = itemId => () => {
    dispatch(reduceItem(itemId));
  };

  return (
    <div className={styles.Items}>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          addToCart={handleItemAdd(item.id)}
          removeFromCart={handleItemReduce(item.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ items, cart }) => {
  const itemList = Object.keys(items).map(item => {
    return {
      ...items[item],
      id: item
    };
  });

  return {
    items: itemList,
    cart
  };
};

Items.propTypes = {
  items: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Items);
