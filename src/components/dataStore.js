import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { carReducer } from "./reducerFolder/carReducer";


//create reducer
const reducer = combineReducers({
    reducerCar:carReducer

})
//create middleware
const middleWare = [thunk]

//create store
const store = createStore(reducer,applyMiddleware(...middleWare))

export default store