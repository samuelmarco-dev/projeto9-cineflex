import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";

import imgFilme from "./../../assets/img/img-filme.png";

import "./style.css";

function AssentosFilme() {
    return ( 
        <section className="AssentosFilme">
            <nav>
                <ParagrafoTopo classe="topo-assentos" texto="Selecione o(s) assento(s)" />
                <div className="selecionar-assentos">
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento disponivel">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento selecionado">01</div>
                    <div className="assento indisponivel">01</div>
                    <div className="assento indisponivel">01</div>
                    <div className="assento indisponivel">01</div>
                    <div className="assento indisponivel">01</div>
                    <div className="assento indisponivel">01</div>
                    <div className="assento indisponivel">01</div>
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
            <Footer nomeFilme="Enola Holmes" imagem={imgFilme} horarioSessao="Quinta-feira - 15:00"/>
        </section> 
    );
}

export default AssentosFilme;