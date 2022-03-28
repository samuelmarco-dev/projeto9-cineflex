import loading from "./../../assets/img/loading.gif";

import "./style.css"

function Loading() {
    return ( 
        <div className="Loading">
            <section className="container">
                <img src={loading} alt="gif de carregamento" />
            </section>
        </div>
    );
}

export default Loading;