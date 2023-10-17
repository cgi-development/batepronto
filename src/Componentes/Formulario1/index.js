import { Form } from "react-bootstrap"

const Formulario1 = () => {
    const navegar = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        
        if(e.target[0].value === "checked"){
            navegar('/form2');
        }

        alert('Para prosseguir, esteja de acordo com os termos de uso.');
    }


    return (
        <div className="form-conteudo">
            <h1 className="text-center">Termos e Condições de Uso</h1> 

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
                <div className="form-group">
                    <Form.Control type="checkbox" className="mt-2" name="aceite" id="aceite"/>
                    <Form.Label htmlFor="aceite">Aceito os termos e condições de uso</Form.Label>
                </div>
                <Button className="btn btn-primary mt-2" id="botaoForm1" type="submit">
                    <i className="bi bi-arrow-right"></i>
                    <span>Próximo</span>
                </Button>
            </Form>
        </div>
    )
}

export default Formulario1;
