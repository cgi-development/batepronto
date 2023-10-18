import { useNavigate } from "react-router-dom";
import "./Botao.css";

const Botao = ({rota}) => {
    const navegar = useNavigate();

    const handleBotao = () => {
        navegar(rota);
    }

    return (
    <a className="botao-registro" href={rota} onClick={handleBotao}>
        <span className="textobotaoregistrar">Registrar Sinistro</span>
    </a>
    )
}

export default Botao;