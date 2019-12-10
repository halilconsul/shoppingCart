export const ADD_ITEM = "ADD_ITEM";
export const REDUCE_ITEM = "REDUCE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS";

export const addItem = (itemId, quantity = 1) => {
  return {
    type: ADD_ITEM,
    item: {
      itemId,
      quantity
    }
  };
};

export const reduceItem = (itemId, quantity = 1) => {
  return {
    type: REDUCE_ITEM,
    item: {
      itemId,
      quantity
    }
  };
};

export const removeItem = itemId => {
  return {
    type: REMOVE_ITEM,
    itemId
  };
};

export const removeAllItems = () => {
  return {
    type: REMOVE_ALL_ITEMS
  };
};
