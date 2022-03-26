import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";

import "./style.css"

function HorarioFilme() {
    const [horarioFilme, setHorarioFilme] = useState({});
    const {idFilme} = useParams();
    
    function obterIdFilme(){
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        .then((response)=> {
            console.log(response.data);
            setHorarioFilme(response.data);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    useEffect(()=>{
        obterIdFilme();
    }, []);

    return ( 
        <section className="HorarioFilme">
            <nav>
                <ParagrafoTopo classe="topo-filmes" texto="Selecione o horário" />
                <div className="sessao">
                        <p>Quinta-feira - 24/06/2021</p>
                        <div className="botoes-horario">
                            <Botao classe="botao" texto="14:00"/>
                            <Botao classe="botao" texto="16:00"/>
                            <Botao classe="botao" texto="18:00"/>
                        </div>
                </div>
                <div className="sessao">
                        <p>Quinta-feira - 24/06/2021</p>
                        <div className="botoes-horario">
                            <Botao classe="botao" texto="14:00"/>
                            <Botao classe="botao" texto="16:00"/>
                            <Botao classe="botao" texto="18:00"/>
                        </div>
                </div>
                <div className="sessao">
                        <p>Quinta-feira - 24/06/2021</p>
                        <div className="botoes-horario">
                            <Botao classe="botao" texto="14:00"/>
                            <Botao classe="botao" texto="16:00"/>
                            <Botao classe="botao" texto="18:00"/>
                        </div>
                </div>
            </nav>
            <Footer nomeFilme={horarioFilme.title} imagem={horarioFilme.posterURL} />
        </section>
    );
}

export default HorarioFilme;