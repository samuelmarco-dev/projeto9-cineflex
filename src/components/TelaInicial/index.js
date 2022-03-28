import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

import ParagrafoTopo from "../ParagrafoTopo";

import "./style.css";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function TelaInicial() {
    const [listaFilmes, setListaFilmes] = useState([]);

    function obterListaDeFilmes(){
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        .then((response)=>{
            setListaFilmes(response.data);
        })
        .catch((error)=>{
            swal("Erro ao obter a lista de filmes");
        })
    }

    useEffect(()=>{
        obterListaDeFilmes();
    }, [])

    if(listaFilmes.length > 0){
        return ( 
            <main className="TelaInicial">
                <ParagrafoTopo classe="topo-inicio" texto="Selecione o filme" />
                <section className="conteudo">
                    {
                        listaFilmes.map((filme, index)=>{
                        return (
                            <Link to={`/sessoes/${filme.id}`} key={index}>
                                <figure id={filme.id} title={filme.title}>
                                    <img src={filme.posterURL} alt={filme.title} />
                                </figure>
                            </Link>
                        )
                        })
                    }
                </section>
            </main>
        );
    }else{
        return <Loading />
    }

}

export default TelaInicial;