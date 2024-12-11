import "./style.css";
import Disclaimer from "../Componentes/Disclaimer";
import Banner from "../Componentes/Banner";
import Botao from "../Componentes/Botao";
import { Col, Row, Stack } from "react-bootstrap";

const Welcome = () => {
    return (
            <Row className="p-5" >
                <Stack>
                    <Col>
                        <Banner />
                    </Col>
                    <Col>
                        <div className="botaoclasse">
                            <Botao rota="/form/1" />
                        </div>
                    </Col>
                    <Col>
                        <Disclaimer />
                    </Col>
                </Stack>
            </Row>
    )
}

export default Welcome;