import { Button, Card, Stack } from "react-bootstrap"

const IndicePagina = () => {

    return(
        <Card>
            <Card.Body>
                <div className="form-etapas">
                    <Stack gap={3}>
                    <div className="p-2"><Button variant="primary">Termos</Button></div>
                    <div className="p-2"><Button variant="secondary">Validação</Button></div>
                    <div className="p-2"><Button variant="secondary">Relato</Button></div>
                    <div className="p-2"><Button variant="secondary">Relato</Button></div>
                    </Stack>
                </div>
            </Card.Body>
        </Card>
    )
}