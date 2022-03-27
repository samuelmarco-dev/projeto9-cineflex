import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Botao from "../Botao";
import Footer from "../Footer";
import ParagrafoTopo from "../ParagrafoTopo";

import "./style.css";

function AssentosFilme() {
    const [assentosSessao, setAssentosSessao] = useState({});
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([]);
    const {idSessao} = useParams();

    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const navigate = useNavigate();

    function obterIdSessao(){
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        .then((response)=>{
            console.log(response.data);
            setAssentosSessao(response.data);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    useEffect(() => {
        obterIdSessao()
        // eslint-disable-next-line
    }, []);

    console.log(assentosSessao);

    function mascaraDeCPF(cpfDigitado){
        if(cpfDigitado.length === 14){
            return cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        }
    }

    function mascaraDeNome(nome){
        if(nome.includes('0') === true || nome.includes('1') === true || nome.includes('2') === true || nome.includes('3') === true || 
        nome.includes('4') === true || nome.includes('5') === true || nome.includes('6') === true || nome.includes('7') === true || 
        nome.includes('8') === true || nome.includes('9') === true){
            nome = false;
        }else{
            nome = true;
        }
        return nome
    }

    function postarDados(event){
        event.preventDefault();
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {
            ids: [1, 2, 3],
            name: nome,
            cpf: cpf
        })
        .then((response)=>{
            console.log(response.data);
            navigate("/sucesso");
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    function selecionarAssentos(assento){
        setAssentosEscolhidos([...assentosEscolhidos, assento]);
    }

    console.log(assentosEscolhidos)

    if(Object.keys(assentosSessao).length > 0){
        const {day, movie, seats} = assentosSessao;

        return ( 
            <section className="AssentosFilme">
                <nav>
                    <ParagrafoTopo classe="topo-assentos" texto="Selecione o(s) assento(s)" />
                    <div className="selecionar-assentos">
                        {seats.map((seat)=>{
                            if(seat.isAvailable === true){
                                if(assentosEscolhidos.includes(seat) === false){
                                    return <div className={`assento disponivel`} key={seat.id}
                                    onClick={()=> selecionarAssentos(seat)}>{seat.name}</div>
                                }
                                if(assentosEscolhidos.includes(seat) === true){
                                    return <div className={`assento selecionado`} key={seat.id}
                                    onClick={()=> selecionarAssentos(seat)}>{seat.name}</div>
                                }
                            }else{
                                return <div className="assento indisponivel" 
                                key={seat.id} onClick={()=>alert('Esse assento não está disponível')}>{seat.name}</div>
                            }
                        })}
                    </div>
                    <div className="opcoes-assentos">
                        <article>
                            <div className="assento-diferente selecionado">
                            </div>
                            <p>Selecionado</p>
                        </article>
                        <article>
                            <div className="assento-diferente disponivel">
                            </div>
                            <p>Disponível</p>
                        </article>
                        <article>
                            <div className="assento-diferente indisponivel">
                            </div>
                            <p>Indisponível</p>
                        </article>
                    </div>
                    <form onSubmit={postarDados}>
                        <div className="informacoes-usuario">
                            <p>Nome do comprador:</p>
                            <input type="text" placeholder="Digite seu nome..." required 
                            onChange={(e)=>{
                                setNome(e.target.value);
                                }}/>
                        </div>
                        <div className="informacoes-usuario">
                            <p>CPF do comprador:</p>
                            <input type="text" placeholder="Digite seu CPF..." required 
                            value={cpf} onChange={(e)=>{
                                setCPF(e.target.value);
                                mascaraDeCPF(cpf)
                            }}/>
                        </div>
                        <div className="botao">
                            <Botao texto="Reservar assento(s)" click={()=>{
                                setNome('');
                                setCPF('');
                            }}/>
                        </div>
                    </form>
                </nav>
                <Footer nomeFilme={movie.title} imagem={movie.posterURL} alt={movie.id} 
                horarioSessao={`${day.weekday} - ${assentosSessao.name}`}/>
            </section> 
        );
    }
    else{
        return <></>
    }

}

export default AssentosFilme;