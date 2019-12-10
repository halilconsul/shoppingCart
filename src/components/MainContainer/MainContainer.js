import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemDescription from "../../pages/ItemDescription/ItemDescription";
import Cart from "../../pages/Cart/Cart";
import ItemsList from "../../pages/ItemsList/ItemList";
import Home from "../../pages/Home/Home";
import ThankYou from "../../pages/ThankYou/ThankYou";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import styles from "./MainContainer.scss";

const MainContainer = () => (
  <div className={styles.MainContainer}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ItemsList} />
      <Route path="/items/:itemId" component={ItemDescription} />
      <Route path="/cart" component={Cart} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default MainContainer;
