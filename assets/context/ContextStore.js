import React, {createContext, useReducer} from "react";
import ContextReducer from './ContextReducer'


const initialState = {
    app: {
        sideNavCollapse: false
    },
    dateFilter: {
        startDate: null,
        endDate: null
    },
    globalError: null,
};

const ContextStore = ({children}) => {
    const [state, dispatch] = useReducer(ContextReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default ContextStore;