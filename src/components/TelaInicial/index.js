import ParagrafoTopo from "../ParagrafoTopo";

import imgFilme from "./../../assets/img/img-filme.png";
import "./style.css";

function TelaInicial() {
    return ( 
        <main className="TelaInicial">
            <ParagrafoTopo classe="topo-inicio" texto="Selecione o filme" />
            <section className="conteudo">
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
                <figure>
                    <img src={imgFilme} alt="imagem" />
                </figure>
            </section>
        </main>
    );
}

export default TelaInicial;