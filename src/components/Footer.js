function Footer(props) {
    const {nomeFilme, horarioSessao, imagem, alt} = props;

    return ( 
        <footer>
            <figure>
                <img src={imagem} alt={alt}/>
            </figure>
            <div className="informacoes-filme">
                <p>{nomeFilme}</p>
                <p>{horarioSessao}</p>
            </div>
        </footer>
    );
}

export default Footer;