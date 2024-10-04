import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";


//create reducer
const reducer = combineReducers({

})
//create middleware
const middleWare = [thunk]

//create store
const store = createStore(reducer,applyMiddleware(...middleWare))

export default store