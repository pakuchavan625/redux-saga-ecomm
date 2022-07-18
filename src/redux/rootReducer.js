import {combineReducers} from "redux"
import { cartData } from "./reducer"
import { productListReducer } from "./productListReducer"

// export default combineReducers({
//     cartData

// })

const rootReducer=combineReducers({cartData,productListReducer})

export default rootReducer