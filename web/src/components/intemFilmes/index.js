import React, {Component} from 'react';
import './styles.css';


class IntemFilmes extends Component {
    render() {
        return(
            <div className='boxFilme'>
                <div className="conteudo">
                    <div className="poster">
                        <img src="http://www.omdbapi.com/src/poster.jpg" className="imagemPoster" alt="Banner"/>
                    </div>
                    <div className="descricao">
                        <h2>Dog Day Afternoon</h2>
                        <h4><img src="https://img.icons8.com/flat_round/2x/star--v1.png" className="star" alt="Rating"/> 8.0</h4>

                        <button className="detalhar">Detalhar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntemFilmes;