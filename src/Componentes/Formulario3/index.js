import { Col, Row, Form, Container } from "react-bootstrap";
import LinhaAzul from "./../LinhaAzul";

const Formulario3 = () => {
    return (
    <Form className="form-conteudo">
        <Form id="formSinistro" action="" method="post" enctype="multipart/form-data">
            <h1 className="text-center">LOCAL DO SINISTRO</h1>

            <Container className="container text-center">
                <Row className="row">
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="cep" className="control-label">CEP</Form.Label>
                            <Form.Control name="cep" type="text" id="cep" required=""
                                value=""/>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="logradouro" className="control-label">Logradouro</Form.Label>

                            <Form.Control name="logradouro" type="text" required=""
                                id="logradouro" value=""/>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label htmlFor="bairro" className="control-label">Bairro</Form.Label>
                            <Form.Control id="bairro" name="bairro" required=""/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="complemento" className="control-label">Complemento</Form.Label>
                            <Form.Control name="complemento" type="text" id="complemento"
                                value=""/>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <LinhaAzul className="linha mt-2 p-2 "/>
            <Row className="row">
                <Col md={4}>
                    <Form.Label><b>Data do Sinistro*</b> </Form.Label>
                    <Form.Control type="date"/>
                </Col>
                <Col md={8}>
                    <Form.Label><b>Ponto de referência</b></Form.Label>
                    <Form.Control type="text"/>
                </Col>
            </Row>
            <LinhaAzul className="linha mt-2 p-2 " />
            <Row className="row">
                <h3>CIRCUNSTÂNCIAS DO SINISTRO</h3>
                <h6>Descreva a ocorrência</h6>
                <Col md={6}>
                    <Form.Label><b>Sentido da Via*</b> </Form.Label>
                    <select name="sentidosinistro" className="form-select">

                        <option selected>Selecione</option>
                        <option>Cidade</option>
                        <option>Outro</option>
                        <option>Subúrbio</option>

                    </select>
                    <br/>
                    <Form.Label><b>Sinalização da Via*</b> </Form.Label>
                    <select name="sinalizacaosinistro" className="form-select">
                        <option selected>Selecione</option>
                        <option>Estava em perfeito estado</option>
                        <option>Estava ilegível</option>
                        <option>Estava incompleta</option>
                        <option>Não existe sinalização</option>
                    </select>
                    <br/>
                    <Form.Label><b>Condição da Via*</b> </Form.Label>
                    <select name="condicaosinistro" className="form-select">
                        <option selected>Selecione</option>
                        <option>Alagada</option>
                        <option>Arenosa</option>
                        <option>Molhada</option>
                        <option>Oleosa</option>
                        <option>Seca</option>
                    </select>
                    <br/>
                    <Form.Label><b>Natureza do Sinistro*</b> </Form.Label>
                    <select className="form-select" name="naturezasinistro">
                        <option selected>Selecione</option>
                        <option>Atropelamento de animal</option>
                        <option>Atropelamento de pedestre</option>
                        <option>Capotamento</option>
                        <option>Choque em obejto fixo</option>
                        <option>Choque em veículo parado / estacionado</option>
                        <option>Colisão envolvendo ciclista</option>
                        <option>Colisão frontal</option>
                        <option>Colisão lateral</option>
                        <option>Colisão tranversal</option>
                        <option>Colisão traseira</option>
                        <option>Engavetamento</option>
                        <option>Outro</option>
                        <option>Tombamento</option>
                    </select>
                    <br/>
                </Col>
                <Col md={6}>
                    <Form.Label><b>Local da Via*</b> </Form.Label>
                    <select className="form-select" name="localsinistro">
                        <option selected>Selecione</option>
                        <option>Ao logo da via</option>
                        <option>Em um cruzamento</option>
                        <option>Em um estacionamento</option>
                        <option>Em uma esquina</option>
                        <option>Em uma rotatória</option>
                        <option>Sob um túnel</option>
                        <option>Sobre um viaduto</option>
                        <option>Sobre uma ponte</option>
                    </select>
                    <br/>
                    <Form.Label><b>Tempo/Clima*</b> </Form.Label>
                    <select className="form-select" name="temposinistro">
                        <option selected>Selecione</option>
                        <option>Chovia na hora do acidente</option>
                        <option>Esta bom</option>
                        <option>Estava nublado</option>
                    </select>
                    <br/>
                    <Form.Label><b>Semáforo*</b> </Form.Label>
                    <select className="form-select" name="semaforosinistro">
                        <option selected>Selecione</option>
                        <option>Estava com defeito</option>
                        <option>Estava desligado</option>
                        <option>Estava intermitente</option>
                        <option>Estava sem defeito</option>
                        <option>Não existia no local</option>
                    </select>
                    <br/>
                    <Form.Label><b>Conservação da Via*</b> </Form.Label>
                    <select className="form-select" name="conservacaosinistro">
                        <option selected>Selecione</option>
                        <option>Em obras</option>
                        <option>Mal Conservada</option>
                        <option>Mal iluminada</option>
                        <option>Perfeito estado</option>
                    </select>
                    <br/>
                </Col>
            </Row>
            <LinhaAzul className="linha mt-2 p-2 "/>
            <Row className="row">
                <h3><i className="fa fa-person"></i> ENVOLVIDOS</h3>
                <h6>Condutores envolvidos na ocorrência.</h6>
                <Cow className="col-md-2">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalEnv">
                        Adicionar Pessoa
                    </button>

                </Col>
                <br/>
                    <Col  md={12}>
                        <table className="table mt-2">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Habilitação</th>
                                    <th>Tipo</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody id="envolvidos">
                            </tbody>
                        </table>
                    </Col>
            </Row>
            <LinhaAzul className="linha mt-2 p-2 "/>
            <Row className="row">
                <h3><i className="fa fa-car"></i> VEÍCULOS ENVOLVIDOS</h3>
                <Col  md={2}>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalVe">
                        Adicionar Veículo
                    </button>
                </Col>
                <Col  md={8}>
                    <span>Cada veículo deve estar vinculado a uma pessoa. Mas, caso tenha-se evadido ou não
                        tenha os dados do proprietário, você pode cadastrar separademente clicando em <b>
                            Adicionar Veículo.</b></span>

                </Col>
                <Col  md={12}>
                    <table className="table mt-2">
                        <thead>
                            <tr>
                                <th>Placa</th>
                                <th>Tipo</th>
                                <th>Característica</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody id="veiculos">
                        </tbody>
                    </table>
                </Col>
            </Row>
            <LinhaAzul className="linha mt-2 p-2 "/>
            <Row className="row">
                <h3><i className="fa fa-file"></i> ANEXOS</h3>
                <Col md={2}>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalAne">
                        Adicionar Anexo
                    </button>
                </Col>
                <Col  md={8}>
                    <span>
                        É necessário anexar a<b> CNH</b> do condutor e o<b> CRLV </b>do veículo.
                        <b>Só é permitido 4 imagens por veículo.</b>
                    </span>
                </Col>
            </Row>
            <Col md={2}>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Anexo</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody id="anexos">
                    </tbody>
                </table>
            </Col>
            <br/>
            <button className="btn btn-success mt-2 " onclick="location.href = 'formulario-2.html'">
                <i className="bi bi-arrow-left"></i>
                <span>Anterior</span>
            </button>
            <button className="btn btn-primary mt-2 " type="submit">
                <i className="bi bi-arrow-right"></i>
                <span>Próximo</span>
            </button>
        </Form>
    </Form>
    )
}

export default Formulario3;