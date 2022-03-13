import BankReducer from "./bank";
import { combineReducers } from "redux";



const allReducers = combineReducers({

Bank:BankReducer


})

export default allReducers