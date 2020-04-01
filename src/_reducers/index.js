import { combineReducers } from 'redux';
import jokesReducer from './jokes.reducer'
import personReducer from './person.reducer'

export default combineReducers({
    jokes: jokesReducer,
    person: personReducer

});