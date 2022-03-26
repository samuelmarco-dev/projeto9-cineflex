// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topo from "./Header";
import TelaInicial from "./TelaInicial";
import HorarioFilme from "./HorarioFilme";
import AssentosFilme from "./AssentosFilme";

import "../assets/css/reset.css";
import "../assets/css/style.css";

function App() {       
    // {
    //     // <BrowserRouter>
    //     //     <Topo />
    //     //     <Routes>
    //     //         <Route path="" element={<TelaInicial />}/>
    //     //         <Route path="" element={<HorarioFilme />}/>
    //     //     </Routes>
    //     // </BrowserRouter>
    // }

    return ( 
        <>
        <Topo />
        <TelaInicial />
        <HorarioFilme />
        <AssentosFilme />
        </>
    );
}

export default App;