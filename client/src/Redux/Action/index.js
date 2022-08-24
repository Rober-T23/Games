
import axios from 'axios';
import {
  GET_ALL_GAMES,

} from './action';
/* const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3001',
}); */

/* --------------lISTAR TODAS LAS RECIPES-------------- */
export const getAllGames = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get('http://localhost:3001/videogames/allGames');
      return dispatch({ type: GET_ALL_GAMES, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
};