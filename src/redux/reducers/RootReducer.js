import BankReducer from "./bank";
import { combineReducers } from "redux";



const allReducers = combineReducers({

Form:BankReducer


})

export default allReducers