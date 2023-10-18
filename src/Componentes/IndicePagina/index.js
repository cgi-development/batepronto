import { Button, Card, Container, Stack } from "react-bootstrap";
import "./IndicePagina.css";

const IndicePagina = ({indice}) => {
    const indices = ["", "secondary","secondary","secondary","secondary"];
    indices[indice] = "primary";

    return(
        <Container>
            <Card>
                <Card.Body>
                    <div className="form-etapas">
                        <Stack direction="horizontal" gap={2}>
                        <div className="p-2"><Button variant={indices[1]}>Termos</Button></div>
                        <div className="p-2"><Button variant={indices[2]}>Validação</Button></div>
                        <div className="p-2"><Button variant={indices[3]}>Relato</Button></div>
                        <div className="p-2"><Button variant={indices[4]}>Confirmação</Button></div>
                        </Stack>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default IndicePagina;