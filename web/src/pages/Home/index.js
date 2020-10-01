import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './styles.css';
import '../../assets/styles/global.css';

import api from '../../services/api';
import IntemFilmes from '../../components/intemFilmes';
import SobreFilme from '../../components/sobreFilme';


function Home() {
    const dispatch = useDispatch();
    const filmes = useSelector(state => state.filmes);
    const sobreFilme = useSelector(state => state.filmes);
    
    const [nome, setNome] = useState('');
    const [ano, setAno] = useState('');
    const [nomeOrdenacao, setNomeOrdenacao] = useState('');
 
    const filmeSubmit = useCallback((e) => {
        e.preventDefault();
        var listaFilmes;

        async function submit(e) {
            if(nome === "") {
                alert("Infome o nome do filme!");
            } else {
                await api.get(`?s=${nome}&y=${ano}&apikey=c508a7d5`)
                .then(response => {
                    if(response.data.Response === "True") {
                        listaFilmes = ordernarPorOrdemAfabetica(response.data.Search);         
                        dispatch({
                            type: 'LIST_FILMES',
                            listaFilmes
                        }); 
                        localStorage.sobre = 'false';  
                    } else if(response.data.Error === "Too many results.") {
                        alert("Ops!! Filme não encontrada na plataforma.");
                    } else {
                        alert("Ops!! aconteceu um erro, tente mais tarde");
                    }
                   
                }).catch (response => {
                    alert("Ops!! aconteceu um erro, tente mais tarde");
                });
            }
        } 

        function ordernarPorOrdemAfabetica(filmes) {
            filmes.sort(function (a, b) {
                return (a.Title > b.Title) ? 1 : ((b.Title > a.Title) ? -1 : 0);
            });

            return filmes;
        }

        submit();   
    },[ano, nome, dispatch]);

    return (
        <div>
            <div className="page-home">
                <div className="formulario">
                    <form onSubmit={filmeSubmit} >
                        <main className="campos">
                            <field>
                                <legend className="label">Nome</legend>
                                <input type="text"
                                    placeholder="Qual o nome do filme ?"
                                    value={nome}  
                                    onChange = {e => setNome(e.target.value)} 
                                    className="inputCampo" />
                            </field>
                            <field>
                                <legend className="label">Ano</legend>
                                <input type="number"
                                    placeholder="Informe o ano"
                                    value={ano} 
                                    onChange = {e => setAno(e.target.value)} 
                                    className="inputCampo"/>  
                            </field>
                        </main>    
                        <button type="submit" className="search">Buscar</button> 
                    </form>
                </div>
            </div>
            
            {localStorage.sobre !== 'true' &&
            <div className="listaFilmes">
                {filmes.map((filme, key) => {
                    return(
                        <IntemFilmes titulo={filme.Title} poster={filme.Poster} imdbRating={filme.imdbID} key={key}/>
                    )
                })}      
            </div>
            }

            {localStorage.sobre === 'true' && sobreFilme &&    
                <div className="listaFilmes">
                    <SobreFilme titulo={sobreFilme.Title} 
                        poster={sobreFilme.Poster} 
                        imdbRating = {sobreFilme.imdbRating}
                        descricao = {sobreFilme.Plot}
                        autor = {sobreFilme.Actors}
                        ano = {sobreFilme.Year}
                    />
                </div>                
            }
        </div>
    );
} 

export default Home;