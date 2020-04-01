import { FETCH_JOKES } from './types';
import { jokesService } from '../_services'
import { fetchLoading } from './loadingAction'

export const fetchJokes = () => dispatch => {
    dispatch(fetchLoading(true))
    jokesService.getRandomJokes()
        .then(response => {
            dispatch(fetchLoading(false))
            dispatch({ type: FETCH_JOKES, payload: response.data, })
        }).catch(error => {
            dispatch(fetchLoading(false))
        })

}

