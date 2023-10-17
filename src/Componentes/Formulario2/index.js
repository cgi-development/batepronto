const { Form, Card } = require("react-bootstrap")

const Formulario2 = () => {
    const handleVoltar = () => {
        
    }
    return (
        <div className="form-conteudo">
            <Form id="formulario2">
                <h1 className="text-center">Validação</h1>
                <Card>
                    <Card.Body>
                        <span>
                            <b>Você é maior de 18 anos ou emancipado civilmente?</b>
                            <br />
                            <input type="radio" name="s1" value="0" className="m-1" />Sim
                            <input type="radio" name="s1" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>O sinistro de trânsito ocorreu no interior de condomínios, postos de
                                combustíveis,
                                estacionamentos de mercados, lojas, shoppings ou outras áreas particulares?</b>
                            <br />
                            <input type="radio" name="s2" value="0" className="m-1" />Sim
                            <input type="radio" name="s2" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>O sinistro de trânsito ocorreu em rodovias estaduais ou federais?</b>
                            <br />
                            <input type="radio" name="s5" value="0" className="m-1" />Sim
                            <input type="radio" name="s5" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>O sinistro de trânsito ocorreu na cidade do Olinda?</b>
                            <br />
                            <input type="radio" name="s3" value="0" className="m-1" />Sim
                            <input type="radio" name="s3" value="1" className="m-1" />Não
                        </span>
                        <br />
                        <br />
                        <span>
                            <b>Alguém feriu-se, ainda que levemente, nesse sinistro?</b>
                            <br />
                            <input type="radio" name="s4" value="0" className="m-1" />Sim
                            <input type="radio" name="s4" value="1" className="m-1" />Não
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