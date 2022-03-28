function InformacoesPedido(props) {
    const {classe, paragrafo, div, titulo, texto, info, extra} = props
    
    return ( 
        <div className={classe}>
            <p className={paragrafo}>{titulo}</p>
            <div className={div}>
                <p>{texto}</p>
                <p>{info}</p>
                <p>{extra}</p>
            </div>
        </div>
    );
}

export default InformacoesPedido;