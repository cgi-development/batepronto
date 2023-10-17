const { Button } = require("bootstrap")
const { Alert } = require("bootstrap")
const { Form, Row, Col } = require("react-bootstrap/esm")

const Formulario4 = () => {

    return(
        <Form className="form-conteudo">
                    <Form action="" method="post" enctype="multipart/form-data">
                        <Alert className="alert alert-success text-center" role="alert">
                            <h4 className="alert-heading">Concluído!</h4>
                            <p>Obrigado Senhor(a) <span className="nome"></span>. Seu cadastro foi realizado com sucesso.</p>
                            <hr/>
                            <p className="mb-0">
                            <Row className="row">
                                <Col md={6}>
                                    <Form.Label   className="mt-2"><b>Protocolo:</b> </Form.Label>
                                    <span className="protocolo"></span>
                                    <br/>
                                    <Form.Label className="mt-2"> <b>Nome do Condutor:</b></Form.Label>
                                    <span className="condutor"></span>
                                </Col>
                                <Col md={6}>
                                    <Form.Label className="mt-2"> <b>Local:</b></Form.Label>
                                    <span className="local"></span><br/>
                                    <Form.Label className="mt-2"> <b>Tipo de Sinistro:</b></Form.Label>
                                    <span className="tipo"></span>
                                </Col>
                            </Row>


                            </p>
                        </Alert>

                        <br/>
                        <Button className="mt-2 " variant = "success" onclick="location.href = './formulario-3.html'">
                            <i className="bi bi-arrow-left"></i>
                            <span>Anterior</span>
                        </Button>
                        <Button className="mt-2 " variant = "primary" onclick="location.href = './formulario-1.html'">
                            <i className="bi bi-arrow-right"></i>
                            <span>Concluir</span>
                        </Button>


                    </Form>
                </Form>



    )






}