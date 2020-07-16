import axios from "axios";

export const FETCH_FACTS_START = "FETCH_FACTS_START";
export const FETCH_FACTS_SUCCESS = "FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_FAILURE = "FETCH_FACTS_FAILURE";

export const fetchFacts = () => dispatch => {
        dispatch({ type: FETCH_FACTS_START });

        axios
            .get("https://cat-fact.herokuapp.com/facts/random")
            .then(res => {
                console.log('response here', res);
                dispatch({ type: FETCH_FACTS_SUCCESS, payload: res.data.text });
            })
            .catch(err => {
                dispatch({ type: FETCH_FACTS_FAILURE, payload: err.message });
            });
};
