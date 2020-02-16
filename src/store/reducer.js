import {decrement, increment} from "./actions";
import {handleActions} from "redux-actions";

export const defaultState = {
    counter: 0,
};

export const reducer = handleActions(
    {
        [increment]: (state, action) => {
            let newState = { ...state };
            for (let i = 0; i < 100000000; i++) {
                newState = {...state, counter: state.counter + action.payload.amount};;
            }

            return newState;
        },
        [decrement]: (state, action) => {
            let newState = { ...state };
            for (let i = 0; i < 100000000; i++) {
                newState = {...state, counter: state.counter - action.payload.amount};;
            }

            return newState;
        },
    },
    defaultState
);
