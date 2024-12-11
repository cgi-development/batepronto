import { Col, Form, Modal, Row } from "react-bootstrap";

const FormModalPessoa = ({show, handleClose}) => {

    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Row>
                    <h5>Habilitação</h5>
                    <Col md={9}>
                        <Form.Group>
                            <Form.Label>Número</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Modal.Body>
    </Modal>
}

export default FormModalPessoa;

