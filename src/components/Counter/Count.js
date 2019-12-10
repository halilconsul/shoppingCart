import React from "react";
import PropTypes from "prop-types";

class Count extends React.Component {
  constructor(props) {
    super();

    this.state = {
      count: props.defaultValue || 0
    };
  }

  handleIncrement = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    return this.props.children({
      count: this.state.count,
      incrementCount: this.handleIncrement,
      decrementCount: this.handleDecrement
    });
  }
}

Count.propTypes = {
  children: PropTypes.func.isRequired
};

export default Count;
