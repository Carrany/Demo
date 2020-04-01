import request from '../_helpers/request';
import { RANDOM_JOKES } from '../_helpers/apis';


const getRandomJokes = () => {
   return request(RANDOM_JOKES)
}


export const jokesService = {
   getRandomJokes,

}