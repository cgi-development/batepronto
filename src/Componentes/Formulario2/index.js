import { useState } from "react";
import { useNavigate } from "react-router-dom"

const { Form, Card, Button } = require("react-bootstrap")

const Formulario2 = () => {
    const navegar = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
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
                            <Form.Check type="switch" name="s1" className="m-1" onChange={handleChange} defaultChecked={checkboxes.s1}
                            label="Você é maior de 18 anos ou emancipado civilmente?" />
                        </Form.Group>
                        <br />
                        <br />
                        <Form.Group>
                            <Form.Check type="switch" name="s2" className="m-1" onChange={handleChange} defaultChecked={checkboxes.s2}
                            label="O sinistro de trânsito ocorreu no interior de condomínios, postos de
                            combustíveis,
                            estacionamentos de mercados, lojas, shoppings ou outras áreas particulares?" />
                        </Form.Group>
                        <br />
                        <br />
                        <Form.Group>
                            <Form.Check type="switch" name="s3" className="m-1" onChange={handleChange} defaultChecked={checkboxes.s3}
                            label="O sinistro de trânsito ocorreu em rodovias estaduais ou federais?" />
                        </Form.Group>
                        <br />
                        <br />
                        <Form.Group>
                            <Form.Check type="switch" name="s4" className="m-1" onChange={handleChange} defaultChecked={checkboxes.s4}
                            label="O sinistro de trânsito ocorreu na cidade do Olinda?" />
                        </Form.Group>
                        <br />
                        <br />
                        
                            <Form.Check type="switch"name="s5" className="m-1" onChange={handleChange} defaultChecked={checkboxes.s5}
                            label="Alguém feriu-se, ainda que levemente, nesse sinistro?" />
                        
                            <br />
                            <br />
                        <Button variant="success" className="mt-2"
                            onClick={handleVoltar}>
                            <i className="bi bi-arrow-left"></i>
                            <span>Anterior</span>
                        </Button>
                        <Button variant="primary" className="mt-2" type="submit">
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