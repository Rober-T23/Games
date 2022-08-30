import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { postAddGames, getAllGenders } from '../../Redux/Action/index'
import { useHistory } from 'react-router-dom';


export default function AddGames() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGenders())
    }, [dispatch])

    const histori = useHistory();
    const genders = useSelector((state) => state.gender);
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: 0,
        platforms: [],
        gender: []
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
            gender: []
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
        if (!input.gender.includes(e.target.value)) {
            setInput({
                ...input,
                gender: [...input.gender, e.target.value],
            });
            setErrors(
                validate({
                    ...input,
                    gender: [...input.gender, e.target.value],
                })
            );
        }
        e.target.value = '';
    }
    function handleDelete(el) {
        const newinput = {
            ...input,
            gender: input.gender.filter((d) => d !== el),
        };
        setInput(newinput);
        setErrors(validate(newinput));
    }

    function handleInputChanguePlataform(e) {
        e.preventDefault();
        let dato = document.querySelector("#platforms");
        console.log(dato.value);
    }
    //usamos un state para el error
    const [errors, setErrors] = useState({});
    return (
        <>
            <div className="container__forms">
                <div >
                    <h1>NEW GAMES</h1>
                    <form onSubmit={handleSubmit}>
                        {/*DATO NOMNBRE */}
                        <div className="input__text">
                            <input

                                type="text"
                                placeholder="Agregar un nombre de games:"
                                onChange={inputHandleChangue}
                                name="name"

                                value={input.name}
                            />
                        </div>
                        {/*DATOS IMAGENES  */}
                        <div className="input__text">
                            <input
                                type="text"
                                name="image"
                                placeholder="ruta imagen"
                                value={input.image}
                                onChange={inputHandleChangue}
                            />
                        </div>
                        {/*DATOS Descripción */}
                        <div className="input__text">
                            <input
                                type="text"
                                name="description"
                                placeholder="ruta Descripción"
                                value={input.description}
                                onChange={inputHandleChangue}
                            />
                        </div>
                        {/* DATOS Fecha */}

                        <div className="input__text">
                            <input
                                type="date"
                                name="released"
                                placeholder="ruta  released"
                                value={input.released}
                                onChange={inputHandleChangue}
                            />
                        </div>
                        {/* DATOS Rating */}
                        <div className="input__text">

                            <input
                                type="range"
                                min="1"
                                max="100"
                                name="rating"
                                placeholder="ruta  rating"
                                value={input.rating}
                                onChange={inputHandleChangue}
                            />
                        </div>
                        {/* DATOS Generos */}
                        <div>
                            <select name="generos" onChange={(e) => selectHandleGames(e)}>
                                {genders?.map((el) => (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                ))}
                            </select>

                            <ul>
                                <div >
                                    {input.gender.map((el) => (
                                        <div key={el.id}>
                                            <li>{el}</li>
                                            <span

                                                onClick={() => handleDelete(el)}
                                            >
                                                x
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </ul>
                        </div>
                        {/* DATOS platforms */}
                        <div>
                            <input
                                type="text"
                                name="platforms"
                                placeholder="ruta  platforms"
                                id="platforms"
                                 
                            />
                            <button onClick={(e) => handleInputChanguePlataform(e)}>adicionar</button>

                            <ul>
                                <div >
                                    {input.platforms.map((el) => (
                                        <div key={el.id}>
                                            <li>{el}</li>
                                            <span

                                                onClick={() => handleDelete(el)}
                                            >
                                                x
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </ul> 
                        </div>
                        {!input.name || !input.description || !input.platforms.length ? (
                            <div>
                                <input
                                    type="submit"
                                    value=" Add Recipe"
                                    disabled
                                />
                            </div>
                        ) : (
                            <div >
                                <input
                                    type="submit"
                                    value=" Add Recipe"                              
                                    
                                />
                            </div>
                        )}

                    </form>

                </div>
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
    } else if (!input.gender.length) {
        errors.gender = 'Seleccione al menos un genero';
    }

    return errors;
}