import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";

import "./style.css";

function AssentosFilme() {
    const [assentosSessao, setAssentosSessao] = useState({});
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

    function mascaraDeCPF(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }

    function mascaraDeNome(nome){
        if(nome.includes('0') === true || nome.includes('1') === true || nome.includes('2') === true || nome.includes('3') === true || 
        nome.includes('4') === true || nome.includes('5') === true || nome.includes('6') === true || nome.includes('7') === true || 
        nome.includes('8') === true || nome.includes('9') === true){
            nome = false;
        }else{
            nome = true;
        }
    }

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
                                return <div className="assento indisponivel" 
                                key={seat.id} onClick={()=>alert('Esse assento não está disponível')}>{seat.name}</div>
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