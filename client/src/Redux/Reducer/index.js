import {
  GET_ALL_GAMES,
  GET_ALL_GEDERS,
  PAGINADO,
  SEARCH_NAME_GAMES,
  ORDER_BY_NAME,
  FILTER_BY_GENDER,
  ORDER_BY_RATING,
  DETAILS,
  SET_ERROR
} from '../Action/action.js';




const initialState = {
  games: [],
  /* gamesfiterdit: [], */ //copia de games
  allgames: [], //copia de games
  gender: [],
  details:[],
  page: 1,
  error: undefined,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES: {
      return {
        ...state,
        games: action.payload,
        allgames: action.payload,
      }
    }
    case SEARCH_NAME_GAMES: {
      return {
        ...state,
        games: action.payload,
        error: undefined,
        page: state.page < action.payload.length ? state.page : 1

      }
    }
    case PAGINADO: {
      return {
        ...state,
        page: action.payload,
      }
    }
    case ORDER_BY_NAME: {
      let sortArray =
        action.payload === 'asc'
          ? state.games.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) {
              return -1;
            } else return 0;
          })
          : /* forma desendente DES */
          state.games.sort(function (a, b) {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            else return 0;
          });
      console.log(sortArray);
      return {
        ...state,
        games: sortArray,
        page: 1,
      };
    }
    case GET_ALL_GEDERS: {
      return {
        ...state,
        gender: action.payload
      }
    }
    case FILTER_BY_GENDER: {
      const allgames = state.allgames;
      const gamesFilterGender =
        action.payload === 'all'
          ? allgames
          : allgames.filter((el) => {
              let names = el.generos.map((d) => d.name);
              if (names.includes(action.payload)) return el;
            });
            console.log(gamesFilterGender)
      return {
        ...state,
        games: gamesFilterGender,
        page: state.page < gamesFilterGender.length ? state.page : 1,
      };
   
    }
    case ORDER_BY_RATING: {
      let sortArray =
      action.payload === 'asc'
        ? state.games.sort(function (a, b) {
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) {
            return -1;
          } else return 0;
        })
        : /* forma desendente DES */
        state.games.sort(function (a, b) {
          if (a.rating > b.rating) return -1;
          if (a.rating < b.rating) return 1;
          else return 0;
        });
        console.log(sortArray)
    return {
      ...state,
      games: sortArray,
      page: 1,
    };
    }
    case DETAILS: {
       let array =state.games.filter(a=> a.id == action.payload)
      return {
         ...state,
         details: array

      }   
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        games: [],
        allgames: [],
      }
    }
    default:
      return state;
  }
};

export default Reducer;