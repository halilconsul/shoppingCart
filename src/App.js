import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";
import styles from "./App.module.scss";

const App = () => (
  <div className={styles.App}>
    <Router>
      <Header />
      <MainContainer />
      {/* <Footer /> */}
    </Router>
  </div>
);

export default App;
