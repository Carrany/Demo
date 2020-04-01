import { PERSON, LOADING } from '../_actions/types';

const initialState = {
    item: {},
    loading: true
}

export default function (state = initialState, { type, payload }) {
    console.log('payload.....',payload)

    switch (type) {
        case PERSON:
            return {
                ...state,
                item: payload,
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