function Botao({classe, texto, tipo}) {
    return ( <button className={classe} type={tipo}>{texto}</button> );
}

export default Botao;