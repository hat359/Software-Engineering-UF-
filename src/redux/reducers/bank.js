import { combineReducers } from "redux";


const BfnameReducer = (state='',action)=>{
switch(action.type){
    case 'FNAME':
        state=action.payload
        return state
    default:
        return state

    }       


}

const BlnameReducer = (state='',action)=>{
    switch(action.type){
        case 'LNAME':
            state=action.payload
            return state
        default:
            return state
    
        }       
    
    
    }




    const BankReducer = combineReducers({
        fname:BfnameReducer,
        lname:BlnameReducer
        
        
        
        
        })
        
        export default BankReducer