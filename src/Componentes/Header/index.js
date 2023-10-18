import { Stack } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="menutopoL">
                    <img src="/imagens/logo.png" alt="logo do sistema" width={150} />
                </div>
                <div className="menutopoR">
                    <Stack direction="horizontal" gap={4}>
                        <div>
                            <i className="fa-solid fa-lock icon"></i>
                            <a className="botao-header1" href="/acompanhamento">Acompanhe Aqui</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-circle-info icon"></i>
                            <a className="botao-header2" href="/login">Acesso Restrito</a>
                        </div>
                    </Stack>
                </div>
            </nav>
        </header>
    )
}

export default Header;