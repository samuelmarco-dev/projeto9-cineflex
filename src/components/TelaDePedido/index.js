import { Link } from "react-router-dom";

import InformacoesPedido from "../InformacoesPedido";
import Botao from "../Botao";
import Loading from "../Loading";

import "./style.css"

function TelaDePedido(props) {
    const {nomeFilme, data, horario, nome, cpf, assentos, diaSemana} = props;

    if(Object.keys(props).length > 0){
        return ( 
            <section className="TelaDePedido">
                <header>
                    <p>Pedido feito com sucesso!</p>
                </header>
                <InformacoesPedido classe="filme-sessao" paragrafo="sessao" 
                div="informacoes-adicionais" titulo="Filme e sessão" 
                texto={nomeFilme} info={`${data} ${horario}`} extra={diaSemana}/>
                <div className="ingressos">
                    <p className="sessao">Ingressos</p>
                    <div className="informacoes-adicionais">
                        {assentos.map((item, index)=>{
                            return (
                                <p key={index}>{`Assento ${item.name}`}</p>
                            )
                        })} 
                    </div>
                </div>
                <InformacoesPedido classe="comprador" paragrafo="sessao" 
                div="informacoes-adicionais" titulo="Comprador" 
                texto={`Nome: ${nome}`} info={`CPF: ${cpf}`}/>
                <Link to="/">
                    <div className="botao">
                            <Botao texto="Voltar pra Home"/>    
                    </div>
                </Link>
            </section> 
        );
    }else{
        return <Loading />
    }

}

export default TelaDePedido;