const appReducer = (state, action)=>{
    switch(action.type){
        case 'INCREASE':
            return {count:action.payload}
        case 'DECREASE':
            return {count:action.payload}
        case 'SET_COUNT':
            return {count:action.payload}
        default:
            return state;
    }
}

export default appReducer;