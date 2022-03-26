import { useState, useEffect } from "react";
import axios from "axios";

import ParagrafoTopo from "../ParagrafoTopo";

import "./style.css";

function TelaInicial() {
    const [listaFilmes, setListaFilmes] = useState([]);

    function obterListaDeFilmes(){
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        .then((response)=>{
            console.log(response.data);
            setListaFilmes(response.data);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    useEffect(()=>{
        obterListaDeFilmes();
    }, [])

    return ( 
        <main className="TelaInicial">
            <ParagrafoTopo classe="topo-inicio" texto="Selecione o filme" />
            <section className="conteudo">
                {
                    listaFilmes.map((filme, index)=>{
                    return (
                        <figure key={index} id={filme.id} title={filme.title}>
                            <img src={filme.posterURL} alt={filme.title} />
                        </figure>
                    )
                    })
                }
            </section>
        </main>
    );
}

export default TelaInicial;