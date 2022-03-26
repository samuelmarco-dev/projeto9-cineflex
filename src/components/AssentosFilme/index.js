import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";

import "./style.css";

function AssentosFilme() {
    const[assentosSessao, setAssentosSessao] = useState({});
    const {idSessao} = useParams();

    function obterIdSessao(){
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        .then((response)=>{
            console.log(response.data);
            setAssentosSessao(response.data);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    useEffect(() => {
        obterIdSessao()
        // eslint-disable-next-line
    }, []);

    console.log(assentosSessao);

    
    if(Object.keys(assentosSessao).length > 0){
        const {day, movie, seats} = assentosSessao;

        return ( 
            <section className="AssentosFilme">
                <nav>
                    <ParagrafoTopo classe="topo-assentos" texto="Selecione o(s) assento(s)" />
                    <div className="selecionar-assentos">
                        {seats.map((seat)=>{
                            if(seat.isAvailable === true){
                                return <div className="assento disponivel" key={seat.id}>{seat.name}</div>
                            }else{
                                return <div className="assento indisponivel" key={seat.id}>{seat.name}</div>
                            }
                        })}
                    </div>
                    <div className="opcoes-assentos">
                        <article>
                            <div className="assento-diferente selecionado">
                            </div>
                            <p>Selecionado</p>
                        </article>
                        <article>
                            <div className="assento-diferente disponivel">
                            </div>
                            <p>Disponível</p>
                        </article>
                        <article>
                            <div className="assento-diferente indisponivel">
                            </div>
                            <p>Indisponível</p>
                        </article>
                    </div>
                    <form>
                        <div className="informacoes-usuario">
                            <p>Nome do comprador:</p>
                            <input type="text" placeholder="Digite seu nome..."/>
                        </div>
                        <div className="informacoes-usuario">
                            <p>CPF do comprador:</p>
                            <input type="text" placeholder="Digite seu CPF..."/>
                        </div>
                        <div className="botao">
                            <Botao texto="Reservar assento(s)" />
                        </div>
                    </form>
                </nav>
                <Footer nomeFilme={movie.title} imagem={movie.posterURL} alt={movie.id} 
                horarioSessao={`${day.weekday} - ${assentosSessao.name}`}/>
            </section> 
        );
    }
    else{
        return <></>
    }

}

export default AssentosFilme;