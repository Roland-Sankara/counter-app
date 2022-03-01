import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    count:0
}

// create Context
export const GlobalContext = createContext(initialState);

// Context provider Component
export const GlobalProvider = ({children})=>{
    const [state, disptach] = useReducer(AppReducer,initialState)

    function increaseCount(num){
        disptach({
            type:'INCREASE',
            payload: num
        })
    }

    function decreaseCount(num){
        disptach({
            type:'DECREASE',
            payload: num
        })
    }

    function setCount(count){
        disptach({
            type: 'SET_COUNT',
            payload: count
        })
    }

    return(
        <GlobalContext.Provider value={{
            count:state.count,
            decreaseCount,
            increaseCount,
            setCount
        }}>
            {children}
        </GlobalContext.Provider>
    )
}