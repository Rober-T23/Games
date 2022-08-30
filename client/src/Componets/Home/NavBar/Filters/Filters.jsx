import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByaz,paginado,filterByGender, orderByRating} from '../../../../Redux/Action/index'
import './filter.css'
export default function Search() {
    //const [order, setOrder] = useState(''); //para guardar los ordenamientos
    // const [socre, setScore] = useState('')
    const generos = useSelector(state=> state.gender)
 
    const dispatch = useDispatch();
    function handleOderByname(e) {
        dispatch(paginado());
        dispatch(orderByaz(e.target.value));
    }
    function handleOderByGender(e) {
        dispatch(paginado());
        dispatch(filterByGender(e.target.value));     
    }
    function handleOderByRating(e) {
        dispatch(paginado());
        dispatch(orderByRating(e.target.value));     
    }

    return (
        <div className='container-filter'>
            {/* ------------Ordenar de a-z z-a------------ */}
            <select onChange={handleOderByname} name="orderaz" id="orderaz">
                <option value="asc">A-z</option>
                <option value="des">Z-A</option>
            </select>


            <select onChange={handleOderByGender} name="orderaz" id="orderaz">
            <option  value='all'>all</option>
                {
                    generos.map(e=> ( <option key={e.id} value={e.name}>{e.name}</option>) )
                }
            </select>

            {/* ------------Ordenar de asc des los Rating------------ */}
            <select onChange={handleOderByRating} name="order" id="order">
                <option value="asc">Menor Raiting</option>
                <option value="des">mayor Raiting</option>
            </select>
        </div>
    );
}