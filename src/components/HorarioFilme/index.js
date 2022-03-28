import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";
import Loading from "../Loading";

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
        // eslint-disable-next-line
    }, []);

    if(Object.keys(horarioFilme).length > 0){
        const {title, posterURL, days, id} = horarioFilme;
        return ( 
            <section className="HorarioFilme" id={id}>
                <nav>
                    <ParagrafoTopo classe="topo-filmes" texto="Selecione o horário" />
                    {days.map((day)=> {
                        return(
                            <div className="sessao" key={day.id}>
                                <p>{`${day.weekday} - ${day.date}`}</p>
                                <div className="botoes-horario">
                                {day.showtimes.map((item) => {
                                    return (
                                        <Link to={`/assentos/${item.id}`} key={item.id}>
                                            <Botao classe="botao" texto={item.name}/>
                                        </Link>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })}
                </nav>
                <Footer nomeFilme={title} imagem={posterURL} alt={title}/>
            </section>
        );
    }else{
        return <Loading />
    }
}

export default HorarioFilme;