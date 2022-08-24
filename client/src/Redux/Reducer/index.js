import {
  GET_ALL_GAMES
} from '../Action/action.js';




const initialState = {
    games: [],
    /* recipesfiterdit: [], */ //copia de recipes
    allgames: [], //copia de recipes
    gender: [],
    details: [],
    page: 1,
    error: undefined,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
       case GET_ALL_GAMES :{
        return {
          ...state,
          games: action.payload,
          allgames: action.payload,
        }
       }

      default:
        return state;
    }
  };
  
  export default Reducer;