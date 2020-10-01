import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { Redirect } from 'react-router';

import './styles.css';
import api from '../../services/api';

function IntemFilmes (props) {   
    const dispatch = useDispatch();
    const [imdbRating, setImdbRating] = useState('');
    const [filme, setFilme] = useState([]);
        
    useEffect(() => {
        async function getRatings(e) {
           await api.get(`?i=${props.imdbRating}&apikey=c508a7d5&plot=short`)
            .then(response => {
                setImdbRating(response.data.imdbRating);
                setFilme(response.data);
            });     
        }
        getRatings();
    }, []);

    const detalharFilme = useCallback((listaFilme) => {
        function detalhar(filmeDetalhar) {
            dispatch({
                type: 'FILME_DETALHE',
                filmeDetalhar
            });  

            localStorage.sobre = "true";
        }
        detalhar(listaFilme);
    }, []);

 
    return(
        <div className='boxFilme'>
            <div className="conteudo">
                <div className="poster">
                    <img src={props.poster} className="imagemPoster" alt="Banner"/>
                </div>
                <div className="descricao">
                    <h2>{props.titulo}</h2>
                    <h4><img src="https://img.icons8.com/flat_round/2x/star--v1.png" className="star" alt="Rating"/> {imdbRating} </h4>

                    <button className="detalhar" onClick={() => detalharFilme(filme)}>Detalhar</button>
                </div>
            </div>
        </div>
    )
}
export default IntemFilmes;