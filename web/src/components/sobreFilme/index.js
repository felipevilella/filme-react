import React from 'react';
import './styles.css';
import '../../assets/styles/global.css';

function sobreFilme(props) {
    return(  
        <div className='boxFilme'>
            <div className="conteudo">
                <div className="poster">
                    <img src={props.poster} className="imagemPoster" alt="Banner"/>
                </div>
                <div className="descricao">
                    <h2>{props.titulo}</h2>
                    <h4><img src="https://img.icons8.com/flat_round/2x/star--v1.png" className="star" alt="Rating"/> {props.imdbRating} </h4>
                    <p>{props.descricao}</p>

                    <div className="outros">
                        Autor : {props.autor} <br></br>
                        ano: {props.ano}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default sobreFilme;