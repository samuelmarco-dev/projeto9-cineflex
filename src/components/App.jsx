import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Topo from "./Header";
import TelaInicial from "./TelaInicial";
import HorarioFilme from "./HorarioFilme";
import AssentosFilme from "./AssentosFilme";
import TelaDePedido from "./TelaDePedido";

import "../assets/css/reset.css";
import "../assets/css/style.css";

function App() {  
    const [infoIngresso, setInfoIngresso] = useState(null);
    
    return ( 
        <BrowserRouter>
        <Topo />
        <Routes>
            <Route path="/" element={<TelaInicial />}/>
            <Route path="/sessoes/:idFilme" element={<HorarioFilme />}/>
            <Route path="/assentos/:idSessao" element={<AssentosFilme setInfoIngresso={setInfoIngresso}/>}/>
            <Route path="/sucesso" element={<TelaDePedido {...infoIngresso} />}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;