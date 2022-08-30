
import axios from 'axios';
import {
  GET_ALL_GAMES,
  GET_ALL_GEDERS,
  PAGINADO,
  SEARCH_NAME_GAMES,
  ORDER_BY_NAME,
  FILTER_BY_GENDER,
  ORDER_BY_RATING,
  DETAILS,
  SET_ERROR,

} from './action';

/* --------------lISTAR TODAS LOS VIDEO JUEGOS-------------- */
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

export function paginado(numero) {
  return (dispatch) => {
    dispatch({ type: PAGINADO, payload: numero });
  };
}

export const getGamesName = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get('http://localhost:3001/videogames/allGames?name='+name);
      return dispatch({ type: SEARCH_NAME_GAMES, payload: json.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};

/*   ----------------ORDENAR a-z,z-a-----------------*/
export function orderByaz(order) {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
}

/* --------------lISTAR TODAS LOS GENEROS-------------- */
export const getAllGenders = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get('http://localhost:3001/videogames/genders');
      return dispatch({ type:  GET_ALL_GEDERS, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
};

/*------------------- FITET BY GENDER------------------- */

export function filterByGender(gender) {
  return {
    type: FILTER_BY_GENDER,
    payload: gender,
  };
}

export function orderByRating(order){

  console.log(order);
  return{
    type: ORDER_BY_RATING,
    payload: order
  }
}
export function details(id){
  return{
    type: DETAILS,
    payload: id
  };
}
export function postAddGames(payload) {
  return function () {
    return axios
      .post('http://localhost:3001/videogames', payload)
      .then((json) => {
        alert('Video Juego Creado Exitosamente');
      })
      .catch((error) => {
        alert('Video Juego Fallido');
      });
  };
}