import { FETCH_JOKES, LOADING } from '../_actions/types';

const initialState = {
    items: [],
    loading: true
}

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case FETCH_JOKES:
            return {
                ...state,
                items: payload,
            }
        case LOADING:
            return {
                ...state,
                loading: payload,
            }

        default:
            return state;
    }


}