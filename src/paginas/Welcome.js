import "./style.css";
import Disclaimer from "../Componentes/Disclaimer";
import Banner from "../Componentes/Banner";
import Botao from "../Componentes/Botao";

const Welcome = () => {
    return (
        <main className="container">
            <Banner />
            <div className="botaoclasse">
                <Botao rota="/form1" />
            </div>
            <Disclaimer />
        </main>
    )
}

export default Welcome;