import { combineReducers } from "redux";
import cart from "./cart.js";
import items from "./items.js";

export default combineReducers({
  items,
  cart
});
