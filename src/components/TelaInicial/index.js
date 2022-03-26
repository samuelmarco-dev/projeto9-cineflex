import "./style.css"

import imgFilme from "./../../assets/img/img-filme.png";

function TelaInicial() {
    return ( 
        <main className="TelaInicial">
            <div className="topo">Selecione o filme</div>
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