function Botao({classe, texto, click}) {
    return ( <button className={classe} onClick={click}>{texto}</button> );
}

export default Botao;