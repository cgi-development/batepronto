import "./style.css";
import Disclaimer from "../Componentes/Disclaimer";
import Banner from "../Componentes/Banner";
import Botao from "../Componentes/Botao";
import { Col, Row } from "react-bootstrap";

const Welcome = () => {
    return (
        <main className="container">

            <Row>
                <Col>
                    <Banner />
                </Col>

            </Row>
            <div className="botaoclasse">
                <Botao rota="/form/1" />
            </div>
            <Disclaimer />
        </main>
    )
}

export default Welcome;