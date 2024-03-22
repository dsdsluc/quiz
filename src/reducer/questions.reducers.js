export const questionItemReducers = (state = "", action )=>{

    switch (action.type) {
        case "INDEX": 
            return action.index;
    
        default:
            return state;
    }
  
}

export const selectedReducer = (state = "", action )=>{

    switch (action.type) {
        
        case "SELECTED": 
            return action.indexSelected;
    
        default:
            return state;
    }
  
}
