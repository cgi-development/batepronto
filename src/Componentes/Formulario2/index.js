import { useState } from "react";
import { useNavigate } from "react-router-dom"

const { Form, Card } = require("react-bootstrap")

const Formulario2 = () => {
    const navegar = useNavigate();
    const [checkboxes, setcheckboxes] = useState({
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false
    })

    const handleChange = (evento) => {
        const { name, checked } = evento.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    }

    const handleVoltar = () => {
        navegar('/form1');
    }

    const handleForm = (e) => {
        e.preventDefault();
        localStorage.setItem('checkboxes', checkboxes);
        navegar('/form3');
    }

    return (
        <div className="form-conteudo">
            <Form id="formulario2" onSubmit={handleForm}>
                <h1 className="text-center">Validação</h1>
                <Card>
                    <Card.Body>
                        <Form.Group>
                            <Form.Check type="switch" className="m-1" onChange={handleChange}
                            label="Você é maior de 18 anos ou emancipado civilmente?" />
                        </Form.Group>
                        <br />
                        <br />
                        <span>
                            <b>O sinistro de trânsito ocorreu no interior de condomínios, postos de
                                combustíveis,
                                estacionamentos de mercados, lojas, shoppings ou outras áreas particulares?</b>
                            <br />
                            <Form.Check type="radio" name="s2" value="0" className="m-1" />Sim
                            <Form.Check type="radio" name="s2" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>O sinistro de trânsito ocorreu em rodovias estaduais ou federais?</b>
                            <br />
                            <Form.Check type="radio" name="s5" value="0" className="m-1" />Sim
                            <Form.Check type="radio" name="s5" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>O sinistro de trânsito ocorreu na cidade do Olinda?</b>
                            <br />
                            <Form.Check type="radio" name="s3" value="0" className="m-1" />Sim
                            <Form.Check type="radio" name="s3" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>Alguém feriu-se, ainda que levemente, nesse sinistro?</b>
                            <br />
                            <Form.Check type="radio" name="s4" value="0" className="m-1" />Sim
                            <Form.Check type="radio" name="s4" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <Button variant={success} className="mt-2"
                            onclick={handleVoltar}>
                            <i className="bi bi-arrow-left"></i>
                            <span>Anterior</span>
                        </Button>
                        <Button variant={primary} className="mt-2" type="submit">
                            <i className="bi bi-arrow-right"></i>
                            <span>Próximo</span>
                        </Button>
                    </Card.Body>
                </Card>
            </Form>
        </div>
    )
}

export default Formulario2;