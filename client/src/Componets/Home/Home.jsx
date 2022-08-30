import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllGames, getAllGenders } from '../../Redux/Action/index'
import NavBar from './NavBar/NavBar';
import Paginado from './Paginado/Paginado';
import Card from './Card/Card';
import Loading from './Loading/Loading';
import './home.css'
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getAllGenders());
    }, [dispatch]);
    const gamesData = useSelector(state => state.games);
    const page = useSelector(state => state.page);
    const error = useSelector(state => state.error);
 

    /*----------------- Paginado Nuevo----------------- */
    let currenGames = [];
    const tamañoGames = gamesData.length;
    const tamañoPorpagina = 15;
    let indexFinal = tamañoPorpagina * page; // 9 pagina
    let inicial = indexFinal - tamañoPorpagina; // 9-9=0
    currenGames = gamesData.slice(inicial, indexFinal);
    console.log(currenGames)
    return (
        <div className='container_Home'>
            <NavBar />


            <div className="paginate">
                {/* --------------Paginado-------------- */}
                <Paginado tamañoGames={tamañoGames} tamañoPorpagina={tamañoPorpagina}
                    pageactual={page}
                />
            </div>
            {
                
                error ? (<div className='error-data'>adas</div>) : currenGames.length === 0 ? <Loading/>:(
                    <div className="gallary_image_box">
                        {
                            currenGames?.map(data => <Card key={data.id} data={data} />)
                        }
                    </div>
                )
            }


        </div>
    )


}