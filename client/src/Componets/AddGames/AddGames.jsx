import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { postAddGames, getAllGenders } from '../../Redux/Action/index'
import { useHistory } from 'react-router-dom';
import './addGames.css'

export default function AddGames() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGenders())
    }, [dispatch])

    const histori = useHistory();
    const generos = useSelector((state) => state.gender);
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: 0,
        platforms: [],
        genero: []
    });
    console.log(input)
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postAddGames(input));
        setInput({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: 0,
            platforms: [],
            genero: []
        });
        histori.push('/home');
    }


    function inputHandleChangue(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }
    function selectHandleGames(e) {
        if (!input.genero.includes(e.target.value)) {
            setInput({
                ...input,
                genero: [...input.genero, e.target.value],
            });
            setErrors(
                validate({
                    ...input,
                    genero: [...input.genero, e.target.value],
                })
            );
        }
        e.target.value = '';
    }
    function handleDelete(el) {
        const newinput = {
            ...input,
            genero: input.genero.filter((d) => d !== el),
        };
        setInput(newinput);
        setErrors(validate(newinput));
    }

    function handleInputChanguePlataform(e) {
        e.preventDefault();
        let dato = document.querySelector("#platforms");

        setInput({
            ...input,
            platforms: [...input.platforms, dato.value],
        });
        setErrors(
            validate({
                ...input,
                platforms: [...input.platforms, dato.value],
            })
        );
    }
    function handleDeletePlatform(el) {
        const newinput = {
            ...input,
            platforms: input.platforms.filter((d) => d !== el),
        };
        setInput(newinput);
        setErrors(validate(newinput));
    }
    //usamos un state para el error
    const [errors, setErrors] = useState({});
    return (
        <>
            <Link to='/Home'><button className='btn'>x</button></Link>
            <h1>NEW GAMES</h1>
            <div className="container__forms">


                <form onSubmit={handleSubmit}>

                    <div className="izquierda">

                        <div className="data-one">
                            {/*DATO NOMNBRE */}
                            <div className="input__text">
                                <p>Nombre</p>
                                <input
                                    type="text"
                                    onChange={inputHandleChangue}
                                    name="name"
                                    value={input.name}
                                />
                                {errors.name && <p className='danger'>{errors.name}</p>}
                            </div>

                            {/*DATOS IMAGENES  */}
                            <div className="input__text">
                                <p>Imagen</p>
                                <input
                                    type="text"
                                    name="image"
                                    value={input.image}
                                    onChange={inputHandleChangue}
                                />
                            </div>
                        </div>

                        <div className="data-two">
                            {/* DATOS Fecha */}
                            <div>
                                <p>Fecha de creasion</p>
                                <input id='fecha'
                                    type="date"
                                    name="released"
                                    value={input.released}
                                    onChange={inputHandleChangue}
                                />
                            </div>
                            {/* DATOS Generos */}
                            <div>
                                <p>Generos</p>
                                <select name="generos" onChange={(e) => selectHandleGames(e)}>
                                    {generos?.map((el) => (
                                        <option key={el.id} value={el.name}>{el.name}</option>
                                    ))}
                                </select>
                                {errors.generos && <p className='danger'>{errors.generos}</p>}
                            </div>

                        </div>
                        {/* DATOS Rating */}
                        <div className="data-rating">
                            <p>{input.rating}</p>
                            <input

                                type="range"
                                min="1"
                                max="100"
                                name="rating"
                                value={input.rating}
                                onChange={inputHandleChangue}
                            />
                        </div>

                        {/* DATOS platforms */}
                        <div className="data-platforms">
                            <div className="title-platforms">
                                <p>Plataformas</p>
                                <input
                                    type="text"
                                    name="platforms"
                                    id="platforms"
                                />
                            </div>
                            <div >

                                <button onClick={(e) => handleInputChanguePlataform(e)}>Adicionar</button>
                            </div>
                            {errors.platforms && <p className='danger'>{errors.platforms}</p>}
                        </div>

                        {/*DATOS Descripción */}
                        <div className="data-descripcion">
                            <textarea
                                cols="40"
                                rows="3"
                                name="description"
                                placeholder="ruta Descripción"
                                value={input.description}
                                onChange={inputHandleChangue}
                            />

                        </div>
                        {errors.description && <p className='danger'>{errors.description}</p>}
                        {!input.name || !input.description || !input.platforms.length ? (
                            <div>
                                <button
                                    id='button'
                                    type="submit"
                                    value=" Add Recipe"
                                    disabled
                                >Guardar</button>
                            </div>
                        ) : (
                            <div >
                                <button
                                    id='button'
                                    type="submit"
                                    value=" Add Recipe"

                                >Guardar</button>
                            </div>
                        )}
                    </div>
                    <div className="derecha">
                        <ul className='data-gender'>
                            <p>Generos: </p>
                            <div className='posicion'>

                                {input.genero.map((el) => (
                                    <div className='chip' key={el}>
                                        <li>{el}</li>
                                        <span
                                            className='button-x'
                                            onClick={() => handleDelete(el)}
                                        >
                                            x
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </ul>
                        <ul className='data-platforms-x'>
                            <p>Plataformas:</p>
                            <div className='posicion'>

                                {input.platforms.map((el) => (
                                    <div className='chip' key={el}>
                                        <li>{el}</li>
                                        <span
                                            className='button-x'
                                            onClick={() => handleDeletePlatform(el)}
                                        >
                                            x
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </ul>

                    </div>

                </form>

            </div>


        </>
    )
}


// creamos la funcion de validacion
export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = '! Games  is required';
    } else if (!input.description) {
        errors.description = '! description  is required';
    } else if (!input.platforms) {
        errors.platforms = '! platforms  is required';
    } else if (!input.genero.length) {
        errors.genero = 'Seleccione al menos un genero';
    }

    return errors;
}