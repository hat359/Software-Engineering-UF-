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

    const RegfnameReducer = (state='',action)=>{
        switch(action.type){
            case 'RFNAME':
                state=action.payload
                return state
            default:
                return state
        
            }       
        
        
        } 
        const ReglnameReducer = (state='',action)=>{
            switch(action.type){
                case 'RLNAME':
                    state=action.payload
                    return state
                default:
                    return state
            
                }       
            
            
            } 
            const RegemailReducer = (state='',action)=>{
                switch(action.type){
                    case 'REMAIL':
                        state=action.payload
                        return state
                    default:
                        return state
                
                    }       
                
                
                } 

                const RegaddressReducer = (state='',action)=>{
                    switch(action.type){
                        case 'RADDRESS':
                            state=action.payload
                            return state
                        default:
                            return state
                    
                        }       
                    
                    
                    } 

                    const RegzipReducer = (state='',action)=>{
                        switch(action.type){
                            case 'RZIP':
                                state=action.payload
                                return state
                            default:
                                return state
                        
                            }       
                        
                        
                        }
                        const RegcontactReducer = (state='',action)=>{
                            switch(action.type){
                                case 'RCONTACT':
                                    state=action.payload
                                    return state
                                default:
                                    return state
                            
                                }       
                            
                            
                            } 

                            const RegunameReducer = (state='',action)=>{
                                switch(action.type){
                                    case 'RUNAME':
                                        state=action.payload
                                        return state
                                    default:
                                        return state
                                
                                    }       
                                
                                
                                } 

                                const RegpassReducer = (state='',action)=>{
                                    switch(action.type){
                                        case 'RPASS':
                                            state=action.payload
                                            return state
                                        default:
                                            return state
                                    
                                        }       
                                    
                                    
                                    } 




    const BankReducer = combineReducers({
        fname:BfnameReducer,
        lname:BlnameReducer,
        regfname:RegfnameReducer,
        reglname:ReglnameReducer,
        regemail:RegemailReducer,
        regaddress:RegaddressReducer,
        regzip:RegzipReducer,
        regcontact:RegcontactReducer,
        reguname:RegunameReducer,
        regpass:RegpassReducer
        
        
        
        
        })
        
        export default BankReducer