import { useState } from "react";
import { Form, Button, Container, Card, Row, Col, Alert, Table, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LinhaAzul from "../LinhaAzul";
import "./Formularios.css";
import FormModalPessoa from "../FormModal/FormModalPessoa";

const Formulario1 = () => {
    const navegar = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();

        const checkbox = e.target.elements.aceite;

        if (checkbox.checked) {
            navegar('/form/2');
        } else {
            alert('Para prosseguir, esteja de acordo com os termos de uso.');
        }
    };


    return (
        <Container fluid className="m-0 mt-4">
            <h1 className="text-center mt-4">Termos e Condições de Uso</h1>

            As informações prestadas são de inteira responsabilidade do Declarante, que deverá ser maior de 18
            (dezoito anos) ou emancipado, podendo sofrer sanções penais/administrativas diante de informações
            falsas.

            Os dados relacionados ao sinistro poderão ser fornecidos, em caráter sigiloso, a outros órgãos públicos
            e entidades privadas, com objetivos de prevenção a fraude, estatísticas de trânsito, prevenção e
            identificação de nexo causal de sinistros, entre outros.

            O registro só é válido para informar sinistros sem vítimas, de veículos não oficiais, que não tenham
            causado danos ao meio ambiente, ao patrimônio público, que não envolvam condutor estrangeiro, nem crime
            de trânsito e com ocorrência no Município do Recife, em no máximo 24 (vinte e quatro) horas do momento
            do seu registro neste sistema.

            É fundamental que o formulário seja preenchido com a maior quantidade de detalhes possível, pois todas
            as informações fornecidas poderão auxiliar na redução de riscos de sinistros pelas ações de engenharia
            de trânsito da Autarquia de Trânsito e Transporte Urbano do Recife - CTTU.

            O Declarante poderá informar dados parciais do(s) veiculo(s) envolvido(s), caso não tenha identificado
            a(s) placa(s) por completo como por exemplo marca, cor e modelo.

            O Declarante autoriza a disponibilização do seu relato do sinistro de trânsito às outras partes
            envolvidas na ocorrência registrada.

            Após a conclusão e envio do formulário, a CTTU fornecerá um número de protocolo ao usuário que deverá
            ser guardado para acesso ao registro da ocorrência após a homologação do RAT.

            Após envio do formulário, este não poderá ser alterado.

            O preenchimento do formulário não implica automaticamente na geração do RAT (Registro de Sinistro de
            Trânsito). Todos os relatos estão sujeitos à verificação da CTTU, que disponibilizará o documento
            oficial num prazo máximo de 03 (três) dias úteis.

            Caso o registro do RAT seja indeferido, devidamente justificado pela CTTU, o declarante deverá acionar
            outros meios para registrar a ocorrência.

            Esta ferramenta permite que o registro de um sinistro seja reportado às autoridades de maneira segura e
            eficiente, em formato mais conveniente ao cidadão.

            Este website está disponível 24 (vinte e quatro) horas por dia, 07 (sete) dias por semana.

            Falsa comunicação é crime previsto no artigo 340 do Código Penal Brasileiro, ficando sujeito o autor à
            detenção de 1 a 5 meses ou multa.

            <Form id="formulario1" onSubmit={handleForm}>
                <Form.Group className="mt-2">
                    <Form.Check
                        className="mt-2"
                        name="aceite"
                        id="aceite"
                        label="Aceito os termos e condições de uso"
                    />
                </Form.Group>
                <Button variant="primary" id="botaoForm1" type="submit" className="m-3">
                    <i className="bi bi-arrow-right"></i>
                    <span>Próximo</span>
                </Button>
            </Form>
        </Container>
    )
}

const Formulario2 = () => {
    const navegar = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
    });

    const handleChange = (evento) => {
        const { name, checked } = evento.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    };

    const handleForm = (e) => {
        e.preventDefault();

        // Verifica se todos os checkboxes estão marcados
        const todosMarcados = Object.values(checkboxes).every((valor) => valor === true);

        if (todosMarcados) {
            localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
            navegar('/form/3');
        } else {
            alert('Por favor, marque todos os checkboxes antes de continuar.');
        }
    };

    return (
        <div className="form-conteudo">
            <Form id="formulario2" onSubmit={handleForm}>
                <h1 className="text-center mt-4">Validação</h1>
                <Card>
                    <Card.Body>
                        <Stack gap={3}>

                            <Form.Group className="d-flex justfy-contents-center">
                                <Form.Check type="switch" name="s1" className="m-1" onChange={handleChange}
                                    label="Você é maior de 18 anos ou emancipado civilmente?" />
                            </Form.Group>
                            <Form.Group className="d-flex justfy-contents-center">
                                <Form.Check type="switch" name="s2" className="m-1" onChange={handleChange}
                                    label="O sinistro de trânsito ocorreu no interior de condomínios, postos de
                                combustíveis,
                                estacionamentos de mercados, lojas, shoppings ou outras áreas particulares?" />

                            </Form.Group>
                            <Form.Group className="d-flex justfy-contents-center">
                                <Form.Check type="switch" name="s5" className="m-1" onChange={handleChange}
                                    label="O sinistro de trânsito ocorreu em rodovias estaduais ou federais?" />

                            </Form.Group>
                            <Form.Group className="d-flex justfy-contents-center">
                                <Form.Check type="switch" name="s3" className="m-1" onChange={handleChange}
                                    label="O sinistro de trânsito ocorreu na cidade do Olinda?" />

                            </Form.Group>
                            <Form.Group className="d-flex justfy-contents-center">
                                <Form.Check type="switch" name="s4" className="m-1" onChange={handleChange}
                                    label="Alguém feriu-se, ainda que levemente, nesse sinistro?" />

                            </Form.Group>

                            <Button variant="primary" className="mt-2" type="submit">
                                <i className="bi bi-arrow-right"></i>
                                <Form.Group>Próximo</Form.Group>
                            </Button>
                        </Stack>
                    </Card.Body>
                </Card>
            </Form>
        </div>
    )
}

const Formulario3 = () => {
    const [mostrarModalPessoa, setMostrarModalPessoa] = useState(false);
    const [mostrarModalVeiculo, setMostrarModalVeiculo] = useState(false);
    const [mostrarModalAnexo, setMostrarModalAnexo] = useState(false);

    const handleModalPessoa = () => setMostrarModalPessoa(!mostrarModalPessoa)
    const handleModalVeiculo = () => setMostrarModalVeiculo(!mostrarModalVeiculo)
    const handleModalAnexo = () => setMostrarModalAnexo(!mostrarModalAnexo)

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState({
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
    })

    const handleCep = (evento) => {
        setCep(evento.target.value);

        if (cep.length > 7) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => resposta.json())
                .then(resposta => setEndereco(resposta))
        }
    }

    return (
        <Container fluid>
            <Form id="formSinistro" action="" method="post" encType="multipart/form-data">
                <h1 className="text-center">LOCAL DO SINISTRO</h1>

                <Container fluid className="text-center mb-3">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="cep">CEP</Form.Label>
                                <Form.Control name="cep" type="text" id="cep" required=""
                                    onInput={handleCep} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="logradouro">Logradouro</Form.Label>

                                <Form.Control name="logradouro" type="text" required=""
                                    id="logradouro" value={endereco.logradouro} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="bairro">Bairro</Form.Label>
                                <Form.Control id="bairro" name="bairro" required="" value={endereco.bairro} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="complemento">Complemento</Form.Label>
                                <Form.Control name="complemento" type="text" id="complemento"
                                    value="" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <LinhaAzul className="linha mt-2 p-2 " />
                <Row className="mb-3 ">
                    <Col md={4}>
                        <Form.Label><b>Data do Sinistro*</b> </Form.Label>
                        <Form.Control type="date" />
                    </Col>
                    <Col md={8}>
                        <Form.Label><b>Ponto de referência</b></Form.Label>
                        <Form.Control type="text" />
                    </Col>
                </Row>
                <LinhaAzul className="linha mt-2 p-2 " />
                <Row>
                    <h3>CIRCUNSTÂNCIAS DO SINISTRO</h3>
                    <h6>Descreva a ocorrência</h6>
                    <Col md={6}>
                        <Form.Label><b>Sentido da Via*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="sentidosinistro" >

                            <option value={0}>Selecione</option>
                            <option value={"Cidade"}>Cidade</option>
                            <option value={"Outro"}>Outro</option>
                            <option value={"Subúrbio"}>Subúrbio</option>

                        </Form.Select>
                        <br />
                        <Form.Label><b>Sinalização da Via*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="sinalizacaosinistro" >
                            <option value={0}>Selecione</option>
                            <option value={"Estava em perfeito estado"}>Estava em perfeito estado</option>
                            <option value={"Estava ilegível"}>Estava ilegível</option>
                            <option value={"Estava incompleta"}>Estava incompleta</option>
                            <option value={"Não existe sinalização"}>Não existe sinalização</option>
                        </Form.Select>
                        <br />
                        <Form.Label><b>Condição da Via*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="condicaosinistro" >
                            <option value={0}>Selecione</option>
                            <option value={"Alagada"}>Alagada</option>
                            <option value={"Arenosa"}>Arenosa</option>
                            <option value={"Molhada"}>Molhada</option>
                            <option value={"Oleosa"}>Oleosa</option>
                            <option value={"Seca"}>Seca</option>
                        </Form.Select>
                        <br />
                        <Form.Label><b>Natureza do Sinistro*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="naturezasinistro">
                            <option value={0}>Selecione</option>
                            <option value={"Atropelamento de animal"}>Atropelamento de animal</option>
                            <option value={"Atropelamento de pedestre"}>Atropelamento de pedestre</option>
                            <option value={"Capotamento"}>Capotamento</option>
                            <option value={"Choque em obejto fixo"}>Choque em obejto fixo</option>
                            <option value={"Choque em veículo parado / estacionado"}>Choque em veículo parado / estacionado</option>
                            <option value={"Colisão envolvendo ciclista"}>Colisão envolvendo ciclista</option>
                            <option value={"Colisão frontal"}>Colisão frontal</option>
                            <option value={"Colisão lateral"}>Colisão lateral</option>
                            <option value={"Colisão tranversal"}>Colisão tranversal</option>
                            <option value={"Colisão traseira"}>Colisão traseira</option>
                            <option value={"Engavetamento"}>Engavetamento</option>
                            <option value={"Outro"}>Outro</option>
                            <option value={"Tombamento"}>Tombamento</option>
                        </Form.Select>
                        <br />
                    </Col>
                    <Col md={6}>
                        <Form.Label><b>Local da Via*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="localsinistro">
                            <option value={0}>Selecione</option>
                            <option value={""}>Ao logo da via</option>
                            <option value={""}>Em um cruzamento</option>
                            <option value={""}>Em um estacionamento</option>
                            <option value={""}>Em uma esquina</option>
                            <option value={""}>Em uma rotatória</option>
                            <option value={""}>Sob um túnel</option>
                            <option value={""}>Sobre um viaduto</option>
                            <option value={""}>Sobre uma ponte</option>
                        </Form.Select>
                        <br />
                        <Form.Label><b>Tempo/Clima*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="temposinistro">
                            <option value={0}>Selecione</option>
                            <option value={""}>Chovia na hora do acidente</option>
                            <option value={""}>Esta bom</option>
                            <option value={""}>Estava nublado</option>
                        </Form.Select>
                        <br />
                        <Form.Label><b>Semáforo*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="semaforosinistro">
                            <option value={0}>Selecione</option>
                            <option value={""}>Estava com defeito</option>
                            <option value={""}>Estava desligado</option>
                            <option value={""}>Estava intermitente</option>
                            <option value={""}>Estava sem defeito</option>
                            <option value={""}>Não existia no local</option>
                        </Form.Select>
                        <br />
                        <Form.Label><b>Conservação da Via*</b> </Form.Label>
                        <Form.Select defaultValue={0} name="conservacaosinistro">
                            <option value={0}>Selecione</option>
                            <option value={""}>Em obras</option>
                            <option value={""}>Mal Conservada</option>
                            <option value={""}>Mal iluminada</option>
                            <option value={""}>Perfeito estado</option>
                        </Form.Select>
                        <br />
                    </Col>
                </Row>
                <LinhaAzul className="linha mt-2 p-2 " />
                <Row>
                    <h3><i className="fa fa-person"></i> ENVOLVIDOS</h3>
                    <h6>Condutores envolvidos na ocorrência.</h6>
                    <Col md={2}>
                        <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalEnv"
                            onClick={() => handleModalPessoa}
                        >
                            Adicionar Pessoa
                        </button>
                    </Col>
                    <br />
                    <Col md={12}>
                        <Table className=" mt-2">
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
                        </Table>
                    </Col>
                </Row>
                <LinhaAzul className="linha mt-2 p-2 " />
                <Row>
                    <h3><i className="fa fa-car"></i> VEÍCULOS ENVOLVIDOS</h3>
                    <Col md={2}>
                        <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalVe"
                            onClick={handleModalVeiculo}
                        >
                            Adicionar Veículo
                        </button>
                    </Col>
                    <Col md={8}>
                        <span>Cada veículo deve estar vinculado a uma pessoa. Mas, caso tenha-se evadido ou não
                            tenha os dados do proprietário, você pode cadastrar separademente clicando em <b>
                                Adicionar Veículo.</b></span>

                    </Col>
                    <Col md={12}>
                        <Table className=" mt-2">
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
                        </Table>
                    </Col>
                </Row>
                <LinhaAzul className="linha mt-2 p-2 " />
                <Row>
                    <h3><i className="fa fa-file"></i> ANEXOS</h3>
                    <Col md={2}>
                        <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalAne"
                            onClick={handleModalAnexo}
                        >
                            Adicionar Anexo
                        </button>
                    </Col>
                    <Col md={8}>
                        <span>
                            É necessário anexar a<b> CNH</b> do condutor e o<b> CRLV </b>do veículo.
                            <b>Só é permitido 4 imagens por veículo.</b>
                        </span>
                    </Col>
                </Row>
                <Col md={12}>
                    <Table className=" mt-2">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Anexo</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody id="anexos">
                        </tbody>
                    </Table>
                </Col>
                <br />
                <button className="btn btn-success mt-2 " onClick={() => window.location.href = 'formulario-2.html'}>
                    <i className="bi bi-arrow-left"></i>
                    <span>Anterior</span>
                </button>
                <button className="btn btn-primary mt-2 " type="submit">
                    <i className="bi bi-arrow-right"></i>
                    <span>Próximo</span>
                </button>
            </Form>
            <FormModalPessoa show={mostrarModalPessoa} handleClose={handleModalPessoa} />
        </Container>
    )
}

const Formulario4 = () => {

    return (
        <Form action="" method="post" encType="multipart/form-data">
            <Alert className="alert alert-success text-center" role="alert">
                <h4 className="alert-heading">Concluído!</h4>
                <p>Obrigado Senhor(a) <span className="nome"></span>. Seu cadastro foi realizado com sucesso.</p>
                <hr />
                <p className="mb-0">
                    <Row>
                        <Col md={6}>
                            <Form.Label className="mt-2"><b>Protocolo:</b> </Form.Label>
                            <span className="protocolo"></span>
                            <br />
                            <Form.Label className="mt-2"> <b>Nome do Condutor:</b></Form.Label>
                            <span className="condutor"></span>
                        </Col>
                        <Col md={6}>
                            <Form.Label className="mt-2"> <b>Local:</b></Form.Label>
                            <span className="local"></span><br />
                            <Form.Label className="mt-2"> <b>Tipo de Sinistro:</b></Form.Label>
                            <span className="tipo"></span>
                        </Col>
                    </Row>
                </p>
            </Alert>
            <br />
            <Button className="mt-2 " variant="success" onClick={() => window.location.href = './formulario-3.html'}>
                <i className="bi bi-arrow-left"></i>
                <span>Anterior</span>
            </Button>
            <Button className="mt-2 " variant="primary" onClick={ () => window.location.href = './formulario-1.html'}>
                <i className="bi bi-arrow-right"></i>
                <span>Concluir</span>
            </Button>


        </Form>
    )
}

export { Formulario1, Formulario2, Formulario3, Formulario4 };
