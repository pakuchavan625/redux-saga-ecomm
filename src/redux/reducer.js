export const cartData = (data = [], action) => {
  if (action.type === "ADD_TO_CART") {
    console.log("reducer called", action);
    console.log(action.data)
    return [action.data, ...data];
  } else if (action.type === "REMOVE_FROM_CART") {
    console.log("reducer called", action);
    // data.length=data.length ?data.length - 1:[];
    console.log(data)
    const filterarray = data.filter((items)=>{
      return items.id !== action.data
    })
    console.log(filterarray)
    return [...filterarray];
  } else if (action.type === "EMPTY_CART") {
    console.log("reducer called", action);
    data = [];
    return [...data];
  } else {
    return data;
  }
};
