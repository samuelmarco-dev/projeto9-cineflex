import "./style.css"

import imgFilme from "./../../assets/img/img-filme.png";

function TelaInicial() {
    return ( 
        <main className="TelaInicial">
            <p className="topo-inicio">Selecione o filme</p>
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