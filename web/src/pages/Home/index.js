import React, {useState} from 'react';
import './styles.css';
import '../../assets/styles/global.css';
import IntemFilmes from '../../components/intemFilmes';

function Home() {

    const [nome, setNome] = useState('');
    const [ano, setAno] = useState('');

    return (
        <div>
            <div className="page-home">
                <div className="formulario">
                    <form onSubmit='' >
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
            <div className="ordernacao">
                
            </div>
            <div className="listaFilmes">
                <IntemFilmes/>
                <IntemFilmes/>
                <IntemFilmes/>
                <IntemFilmes/>
                <IntemFilmes/>
                <IntemFilmes/>
            </div>
        </div>
    );
}


export default Home;