export const productListReducer = (state = [], action) => {
  if (action.type === "SET_PRODUCT_LIST") {
    return [...action.data];
  } else {
    console.log(state);
    return state;
  }
};
