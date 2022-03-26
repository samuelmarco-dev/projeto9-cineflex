import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";

import imgFilme from "./../../assets/img/img-filme.png"

import "./style.css"

function HorarioFilme() {
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
            <Footer nomeFilme="Enola Holmes" imagem={imgFilme} />
        </section>
    );
}

export default HorarioFilme;