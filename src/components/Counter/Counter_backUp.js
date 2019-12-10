import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle as faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle as faMinus } from "@fortawesome/free-solid-svg-icons";
import Count from "./Count";
import styles from "./Counter.module.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.defaultValue
    };
  }

  handleIncrement = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));

    this.props.addToCart();
  };

  handleDecrement = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));

    this.props.reduceFromCart();
  };

  handleValueChange = ({ target }) => {
    this.setState({
      counter: target.value
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className={styles.counter}>
        <button
          className={styles.counter__dec}
          onClick={this.handleDecrement}
          disabled={counter <= 1}
        >
          <FontAwesomeIcon icon={faMinus} size={"sm"} color={"black"} />
        </button>
        {/* <input
          className={styles.counter__input}
          type="text"
          value={counter}
          onChange={this.handleValueChange}
          maxLength={2}
        /> */}
        <div className={styles.counter__input}>{counter}</div>
        <button
          className={styles.counter__inc}
          onClick={this.handleIncrement}
          disabled={counter >= 99}
        >
          <FontAwesomeIcon icon={faPlus} size={"sm"} color={"black"} />
        </button>
      </div>
    );
  }
}

export default Counter;
