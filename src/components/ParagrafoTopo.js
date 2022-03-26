function ParagrafoTopo(props) {
    const {classe, texto} = props

    return ( <p className={classe}>{texto}</p> );
}

export default ParagrafoTopo;