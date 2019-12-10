import {
  ADD_ITEM,
  REDUCE_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL_ITEMS
} from "../actions/cart";

const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { item } = action;

      return {
        ...state,
        [item.itemId]: {
          ...state[item.itemId],
          quantity: state[item.itemId]
            ? state[item.itemId].quantity + item.quantity
            : item.quantity
        }
      };
    }

    case REDUCE_ITEM: {
      const { item } = action;

      return {
        ...state,
        [item.itemId]: {
          ...state[item.itemId],
          quantity: state[item.itemId].quantity - item.quantity
        }
      };
    }

    case REMOVE_ITEM: {
      const { [action.itemId]: target, ...savedItems } = state;

      // const cloneState = { ...state };
      // delete cloneState[action.itemId];

      return {
        // ...cloneState
        ...savedItems
      };
    }

    case REMOVE_ALL_ITEMS: {
      let { ...clonedItems } = state;

      clonedItems = {};

      return {
        ...clonedItems
      };
    }

    default: {
      return state;
    }
  }
};

export default cart;
