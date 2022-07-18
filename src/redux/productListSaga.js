import {takeEvery,put} from "redux-saga/effects"

function* getProductList(){
    let data = yield fetch("http://localhost:6632/product")
    data = yield data.json()
    console.log("call API here",data)
    yield put({type:"SET_PRODUCT_LIST",data:data})
}


function* testCart(data){
    console.log("add to cart api called here")
}

function* searchProduct(data){
    let result = yield fetch(`http://localhost:6632/product?q=${data.query}`)
    result = yield result.json()
    console.log("call API here",data)
    yield put({type:"SET_PRODUCT_LIST",data:result})
}

function* productListsaga(){
yield takeEvery("PRODUCT_LIST",getProductList)
yield takeEvery("ADD_TO_CART",testCart)
yield takeEvery("SEARCH_PRODUCT",searchProduct)
}

export default productListsaga