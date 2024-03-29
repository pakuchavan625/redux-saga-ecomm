// import {createStore} from "redux";

import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import productListsaga from "./productListSaga";
import createSagaMiddleware from "@redux-saga/core";


// const store=createStore(rootReducer)

const sagaMiddleware=createSagaMiddleware()
const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})
   
sagaMiddleware.run(productListsaga)

export default store