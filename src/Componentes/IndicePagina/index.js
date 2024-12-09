import { Card, Container } from "react-bootstrap";
import { TiDocumentText } from "react-icons/ti";
import { FaListCheck, FaRegThumbsUp } from "react-icons/fa6";
import { RiSpeakLine } from "react-icons/ri";
import "./IndicePagina.css";

const IndicePagina = ({indice}) => {
    //const indices = ["", "secondary","secondary","secondary","secondary"];
    //indices[indice] = "primary";

    return(
        <Container>
            <Card>
                <Card.Body>
                    <div className="form-etapas">
                        <div className={`p-2 etapa text-primary`}>
                            <TiDocumentText />
                            <p>Termos</p>
                        </div>
                        <div className={`p-2 etapa text-${indice > 1 ? "primary" : "secondary"}`}>
                            <FaListCheck />
                            <p>Validação</p>
                        </div>
                        <div className={`p-2 etapa text-${indice > 2 ? "primary" : "secondary"}`}>
                            <RiSpeakLine />
                            <p>Relato</p>
                        </div>
                        <div className={`p-2 etapa text-${indice > 3 ? "primary" : "secondary"}`}>
                            <FaRegThumbsUp />
                            <p>Confirmação</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default IndicePagina;