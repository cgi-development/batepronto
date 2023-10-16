import {useNavigate} from "react-router-dom";

const Botao = (rota) => {
    const navegar = useNavigate();

    const redirect = () => {
        navegar(rota);
    }

    return (
    <a className="botao-registro" onClick={redirect}>
        <span className="textobotaoregistrar">Registrar Sinistro</span>
    </a>
    )
}

export default Botao;