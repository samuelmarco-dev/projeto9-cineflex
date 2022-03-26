function InformacoesPedido(props) {
    const {classe, paragrafo, div, titulo, texto, info} = props
    
    return ( 
        <div className={classe}>
            <p className={paragrafo}>{titulo}</p>
            <div className={div}>
                <p>{texto}</p>
                <p>{info}</p>
            </div>
        </div>
    );
}

export default InformacoesPedido;