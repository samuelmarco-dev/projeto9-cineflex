import InformacoesPedido from "../InformacoesPedido";
import Botao from "../Botao";
import "./style.css"

function TelaDePedido(props) {
    return ( 
        <section className="TelaDePedido">
            <header>
                <p>Pedido feito com sucesso!</p>
            </header>
            <InformacoesPedido classe="filme-sessao" paragrafo="sessao" 
            div="informacoes-adicionais" titulo="Filme e sessão" 
            texto="Enola Holmes" info="24/06/2021 15:00"/>
            <div className="ingressos">
                <p className="sessao">Ingressos</p>
                <div className="informacoes-adicionais">
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
            </div>
            <InformacoesPedido classe="comprador" paragrafo="sessao" 
            div="informacoes-adicionais" titulo="Comprador" 
            texto="Nome: João da Silva Sauro" info="CPF: 123.456.789-10"/>
            <div className="botao">
                <Botao texto="Voltar pra Home"/>
            </div>
        </section> 
    );
}

export default TelaDePedido;