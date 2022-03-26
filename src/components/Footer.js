function Footer(props) {
    const {nomeFilme, horarioSessao, imagem} = props;

    return ( 
        <footer>
            <figure>
                <img src={imagem} alt="imagem"/>
            </figure>
            <div className="informacoes-filme">
                <p>{nomeFilme}</p>
                <p>{horarioSessao}</p>
            </div>
        </footer>
    );
}

export default Footer;