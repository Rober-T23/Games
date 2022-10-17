import { useParams, Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { details } from '../../Redux/Action/index'
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'
export default function Details() {
    const { id } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(details(id));;
    }, [dispatch]);
    let dataDetails = useSelector(state => state.details);
    return (
        <>
           
            {dataDetails.map((el) => (
                <div className="container" key={el.id}>
                     
                    <div className="container-x">
                        <img src={el.image} alt="" />
                       
                        <div className="container-data" >
                        <Link to='/Home'><button>x</button></Link>
                            <div className='container-izquierda'>
                                <h1>{el.name}</h1>
                                <p>Fecha lanzamiento: {el.released}</p>
                            
                                <p>Rating : {el.rating}</p>
                                <div className="container-gender">
                                    {
                                        el.generos.map(a => (<p key={a.id}> {a.name}</p>))
                                    }
                                </div>
                            </div>
                            <div className='container-derecha'>
                                <div className="container-platformsr">
                                    {
                    
                                        <p>{el.platforms}</p>
                                    }
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: el?.description }}></p></div>

                        </div>
                    </div>


                </div>
            ))}
        </>


    )
}
// image: 

// name: 
//   description
//   released 
//   rating
//   platforms
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción *
// Fecha de lanzamiento
// Rating
// Plataformas *


{/* <img src={el.image} alt="no existe" /> */ }