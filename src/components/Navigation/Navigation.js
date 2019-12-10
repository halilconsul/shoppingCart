import React from "react";
import NavBar from "react-responsive-menubar/lib/NavBar";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  state = {
    showSideNav: false
  };

  handleSideNavToggle = () => {
    this.setState(currentState => ({
      showSideNav: !currentState.showSideNav
    }));
  };

  render() {
    return (
      <NavBar
        handleSideNavToggle={this.handleSideNavToggle}
        showSideNav={this.state.showSideNav}
        logoStyles={{ display: "none" }}
        navBarStyles={{ boxShadow: "none" }}
      >
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
      </NavBar>
    );
  }
}

export default Navigation;
