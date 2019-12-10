import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle as faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle as faMinus } from "@fortawesome/free-solid-svg-icons";
import Count from "./Count";
import styles from "./Counter.scss";

const Counter = ({ defaultValue, addToCart, reduceFromCart }) => {
  const increase = incrementCounter => () => {
    incrementCounter();
    addToCart();
  };

  const decrease = decrementCounter => () => {
    decrementCounter();
    reduceFromCart();
  };

  return (
    <Count defaultValue={defaultValue}>
      {({ count, incrementCount, decrementCount }) => (
        <div className={styles.counter}>
          <button
            className={styles.counter__dec}
            onClick={decrease(decrementCount)}
            disabled={count <= 1}
          >
            <FontAwesomeIcon icon={faMinus} size={"sm"} color={"black"} />
          </button>
          <div className={styles.counter__input}>{count}</div>
          <button
            className={styles.counter__inc}
            onClick={increase(incrementCount)}
            disabled={count >= 99}
          >
            <FontAwesomeIcon icon={faPlus} size={"sm"} color={"black"} />
          </button>
        </div>
      )}
    </Count>
  );
};

Counter.propTypes = {
  defaultValue: PropTypes.number,
  addToCart: PropTypes.func,
  reduceFromCart: PropTypes.func
};

export default Counter;
