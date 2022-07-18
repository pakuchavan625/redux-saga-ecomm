export const add=(data)=>{
    console.log("add to cart action is called",data)
    return {
        type:"ADD_TO_CART",
        data

    };
};

export const remove=(data)=>{
    console.log("rmove from cart action is called",data)
    return {
        type:"REMOVE_FROM_CART",
        data

    };
};

export const empty=(data)=>{
    console.log("empty  cart action is called",data)
    return {
        type:"EMPTY_CART",
        data

    };
};
