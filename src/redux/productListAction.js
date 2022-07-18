export const productListAction =()=>{
    let data="apple"
    // data =await data.json()
    // console.log(data)
    console.log("ProductAction is called",data)
    return {
        type:"PRODUCT_LIST",
       
    }
}


export const searchProduct=(query)=>{
    console.log("search product is called")
    return {
        type:"SEARCH_PRODUCT",
        query
    }
}

