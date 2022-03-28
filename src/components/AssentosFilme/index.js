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

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [cpf, setCPF] = useState('');
    const navigate = useNavigate();
    let postObj = null;

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

    function postarDados(event){
        event.preventDefault();
        const arrayAssentos = assentosEscolhidos.map((assento) => assento.id);
        postObj = {
            ids: arrayAssentos,
            name: nomeUsuario,
            cpf: mascaraCPF(cpf)
        }

        if(postObj.name === '' || (postObj.cpf === '' || (postObj.cpf.includes('a') === true || postObj.cpf.includes('b') === true || 
        postObj.cpf.includes('c') === true || postObj.cpf.includes('d') === true || postObj.cpf.includes('e') === true || postObj.cpf.includes('f') === true || 
        postObj.cpf.includes('g') === true || postObj.cpf.includes('h') === true || postObj.cpf.includes('i') === true || postObj.cpf.includes('j') === true || 
        postObj.cpf.includes('k') === true || postObj.cpf.includes('l') === true || postObj.cpf.includes('m') === true || postObj.cpf.includes('n') === true || 
        postObj.cpf.includes('o') === true || postObj.cpf.includes('p') === true || postObj.cpf.includes('q') === true || postObj.cpf.includes('r') === true || 
        postObj.cpf.includes('s') === true || postObj.cpf.includes('t') === true || postObj.cpf.includes('u') === true || postObj.cpf.includes('v') === true || 
        postObj.cpf.includes('w') === true || postObj.cpf.includes('x') === true || postObj.cpf.includes('y') === true || postObj.cpf.includes('z') === true )) 
        || postObj.ids.length === 0){
            alert('Preencha os dados novamente, inserindo ao menos um assento na sessão seu nome e sobrenome e CPF (XXX.XXX.XXX-XX)');
            setNomeUsuario('');
            setCPF('');
            return
        }

        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', postObj)
        .then((response)=>{
            console.log(response.data);
            navigate("/sucesso");
        })
        .catch((error)=>{
            alert('Preencha os dados novamente');
        })
        console.log(postObj);
        setNomeUsuario('');
        setCPF('');
      }


    function selecionarAssentos(assento){
        if(assentosEscolhidos.includes(assento) === true){
            const arrayToggleFiltrado = assentosEscolhidos.filter((remover)=>{
                return remover.id !== assento.id
            })
            setAssentosEscolhidos(arrayToggleFiltrado);
            return;
        }
        setAssentosEscolhidos([...assentosEscolhidos, assento]);
    }

    function mascaraCPF(cpfDigitado) {
        return cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
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
                            value={nomeUsuario} maxLength='30' onChange={(e)=>{
                                setNomeUsuario(e.target.value);
                                }}/>
                        </div>
                        <div className="informacoes-usuario">
                            <p>CPF do comprador:</p>
                            <input type="text" placeholder="Digite seu CPF..." required
                            value={cpf} maxLength='14' onChange={(e)=>{
                                setCPF(e.target.value);
                            }}/>
                        </div>
                        <div className="botao">
                            <Botao texto="Reservar assento(s)" tipo="submit" />
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