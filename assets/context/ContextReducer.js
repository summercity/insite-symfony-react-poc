import { SET_APP, SET_DATE_FILTER, SET_APP_ERROR } from './constant'

const ContextReducer = (state, action) => {
    switch (action.type) {
        case SET_APP:
            return {
                ...state,
                app: action.payload
            };
        case SET_DATE_FILTER:
            return {
                ...state,
                dateFilter: action.payload
            };
        case SET_APP_ERROR:
            return {
                ...state,
                globalError: action.payload
            };
        default:
            return state;
    }
};

export default ContextReducer;