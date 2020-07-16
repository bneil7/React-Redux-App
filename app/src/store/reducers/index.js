import {
    FETCH_FACTS_START,
    FETCH_FACTS_SUCCESS,
    FETCH_FACTS_FAILURE
} from "../actions";

const initialState = {
    isLoading: false,
    facts: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FACTS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_FACTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                facts: [...state.facts, action.payload],
                error: ""
            };
        case FETCH_FACTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};