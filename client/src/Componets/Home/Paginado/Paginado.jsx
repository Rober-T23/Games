import React from 'react';
import { paginado } from '../../../Redux/Action/index';
import { useDispatch } from 'react-redux';
import './paginate.css'

export default function Paginado({ tamañoGames, tamañoPorpagina, pageactual }) {
    const dispach = useDispatch();
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(tamañoGames / tamañoPorpagina); i++) {
        pageNumbers.push(i + 1);
    }

    function handelClickpage(numero) {
        dispach(paginado(numero));
    }
    function handleClickPreview() {
        if (pageactual > 1) {
            dispach(paginado(pageactual - 1));
        }
    }
    function handleClickNext() {
        if (pageactual < pageNumbers.length) {
            dispach(paginado(pageactual + 1));
        }
    }
    return (
        <div className="container__paginate">
            <button className="button__paginado" onClick={handleClickPreview}>
                pre
            </button>
            {pageNumbers.map((page) => {
                return (
                    <button className={`button__paginado ${page === pageactual ? 'b__active' : 'button__paginado'}`} key={page} onClick={() => handelClickpage(page)}>
                        {page}
                    </button>
                );
            })}
            <button className="button__paginado" onClick={handleClickNext}>
                nex
            </button>
        </div>

    )
}