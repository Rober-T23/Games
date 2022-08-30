import { React } from 'react';
import {paginado,getGamesName} from '../../../../Redux/Action/index'
import { useDispatch} from 'react-redux';
import './search.css'

export default function Search() {
  const dispatch = useDispatch();

  function handleInputChangue(e) {
    e.preventDefault();
    dispatch(paginado(1));
    dispatch(getGamesName(e.target.value));
 
  }

  return (
    <div>
      <div className="container__search">
        <div>
          <input
            onChange={handleInputChangue}
            type="text"
            placeholder="Search Video Games"
          />
        </div>
      </div>
    </div>
  );
}