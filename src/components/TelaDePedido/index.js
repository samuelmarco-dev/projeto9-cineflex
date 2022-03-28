import InformacoesPedido from "../InformacoesPedido";
import Botao from "../Botao";
import "./style.css"
import { Link } from "react-router-dom";

function TelaDePedido(props) {
    const {nomeFilme, data, horario, nome, cpf, assentos} = props;

    if(Object.keys(props).length > 0){
        return ( 
            <section className="TelaDePedido">
                <header>
                    <p>Pedido feito com sucesso!</p>
                </header>
                <InformacoesPedido classe="filme-sessao" paragrafo="sessao" 
                div="informacoes-adicionais" titulo="Filme e sessão" 
                texto={nomeFilme} info={`${data} ${horario}`}/>
                <div className="ingressos">
                    <p className="sessao">Ingressos</p>
                    <div className="informacoes-adicionais">
                        {assentos.map((item, index)=>{
                            return (
                                <p key={index}>{`Assento ${item.name}`}</p>
                            )
                        })} 
                        <p>Assento 15</p>
                        <p>Assento 16</p>
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
        return <></>
    }

}

export default TelaDePedido;