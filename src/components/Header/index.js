import styled from "styled-components";

function Topo() {
    return ( 
        <Header>CINEFLEX</Header>
     );
}

const Header = styled.header`
    width: 100%;
    height: 67px;
    background-color: rgba(195, 207, 217, 1);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-size: 34px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    color: rgba(232, 131, 58, 1);
    text-shadow: black 0.1em 0.1em 0.1em;
`;

export default Topo;