const Formulario3 = () => {
    return (
    <div className="form-conteudo">
        <form id="formSinistro" action="" method="post" enctype="multipart/form-data">
            <h1 className="text-center">LOCAL DO SINISTRO</h1>

            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="form-group ">
                            <label htmlFor="cep" className="control-label">CEP</label>
                            <input className="form-control" name="cep" type="text" id="cep" required=""
                                value=""/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group ">
                            <label htmlFor="logradouro" className="control-label">Logradouro</label>

                            <input className="form-control" name="logradouro" type="text" required=""
                                id="logradouro" value=""/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group ">
                            <label htmlFor="bairro" className="control-label">Bairro</label>
                            <input className="form-control" id="bairro" name="bairro" required=""/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group ">
                            <label htmlFor="complemento" className="control-label">Complemento</label>
                            <input className="form-control" name="complemento" type="text" id="complemento"
                                value=""/>
                        </div>
                    </div>
                </div>
            </div>
            <canvas className="linha mt-2 p-2 "></canvas>
            <div className="row">
                <div className="col-md-4">
                    <label><b>Data do Sinistro*</b> </label>
                    <input type="date" className="form-control"/>
                </div>
                <div className="col-md-8">
                    <label><b>Ponto de referência</b></label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <canvas className="linha mt-2 p-2 "></canvas>
            <div className="row">
                <h3>CIRCUNSTÂNCIAS DO SINISTRO</h3>
                <h6>Descreva a ocorrência</h6>
                <div className="col-md-6">
                    <label><b>Sentido da Via*</b> </label>
                    <select name="sentidosinistro" className="form-select">

                        <option selected>Selecione</option>
                        <option>Cidade</option>
                        <option>Outro</option>
                        <option>Subúrbio</option>

                    </select>
                    <br/>
                    <label><b>Sinalização da Via*</b> </label>
                    <select name="sinalizacaosinistro" className="form-select">
                        <option selected>Selecione</option>
                        <option>Estava em perfeito estado</option>
                        <option>Estava ilegível</option>
                        <option>Estava incompleta</option>
                        <option>Não existe sinalização</option>
                    </select>
                    <br/>
                    <label><b>Condição da Via*</b> </label>
                    <select name="condicaosinistro" className="form-select">
                        <option selected>Selecione</option>
                        <option>Alagada</option>
                        <option>Arenosa</option>
                        <option>Molhada</option>
                        <option>Oleosa</option>
                        <option>Seca</option>
                    </select>
                    <br/>
                    <label><b>Natureza do Sinistro*</b> </label>
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
                </div>
                <div className="col-md-6">
                    <label><b>Local da Via*</b> </label>
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
                    <label><b>Tempo/Clima*</b> </label>
                    <select className="form-select" name="temposinistro">
                        <option selected>Selecione</option>
                        <option>Chovia na hora do acidente</option>
                        <option>Esta bom</option>
                        <option>Estava nublado</option>
                    </select>
                    <br/>
                    <label><b>Semáforo*</b> </label>
                    <select className="form-select" name="semaforosinistro">
                        <option selected>Selecione</option>
                        <option>Estava com defeito</option>
                        <option>Estava desligado</option>
                        <option>Estava intermitente</option>
                        <option>Estava sem defeito</option>
                        <option>Não existia no local</option>
                    </select>
                    <br/>
                    <label><b>Conservação da Via*</b> </label>
                    <select className="form-select" name="conservacaosinistro">
                        <option selected>Selecione</option>
                        <option>Em obras</option>
                        <option>Mal Conservada</option>
                        <option>Mal iluminada</option>
                        <option>Perfeito estado</option>
                    </select>
                    <br/>
                </div>
            </div>
            <canvas className="linha mt-2 p-2 "></canvas>
            <div className="row">
                <h3><i className="fa fa-person"></i> ENVOLVIDOS</h3>
                <h6>Condutores envolvidos na ocorrência.</h6>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalEnv">
                        Adicionar Pessoa
                    </button>

                </div>
                <br/>
                    <div className="col-md-12">
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
                    </div>
            </div>
            <canvas className="linha mt-2 p-2 "></canvas>
            <div className="row">
                <h3><i className="fa fa-car"></i> VEÍCULOS ENVOLVIDOS</h3>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalVe">
                        Adicionar Veículo
                    </button>
                </div>
                <div className="col-md-8">
                    <span>Cada veículo deve estar vinculado a uma pessoa. Mas, caso tenha-se evadido ou não
                        tenha os dados do proprietário, você pode cadastrar separademente clicando em <b>
                            Adicionar Veículo.</b></span>

                </div>
                <div className="col-md-12">
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
                </div>
            </div>
            <canvas className="linha mt-2 p-2 "></canvas>
            <div className="row">
                <h3><i className="fa fa-file"></i> ANEXOS</h3>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalAne">
                        Adicionar Anexo
                    </button>
                </div>
                <div className="col-md-8">
                    <span>
                        É necessário anexar a<b> CNH</b> do condutor e o<b> CRLV </b>do veículo.
                        <b>Só é permitido 4 imagens por veículo.</b>
                    </span>
                </div>
            </div>
            <div className="col-md-12">
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
            </div>
            <br/>
            <button className="btn btn-success mt-2 " onclick="location.href = 'formulario-2.html'">
                <i className="bi bi-arrow-left"></i>
                <span>Anterior</span>
            </button>
            <button className="btn btn-primary mt-2 " type="submit">
                <i className="bi bi-arrow-right"></i>
                <span>Próximo</span>
            </button>
        </form>
    </div>
    )
}

export default Formulario3;