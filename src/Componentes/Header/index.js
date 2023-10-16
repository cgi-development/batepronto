const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="menutopoL">
                    <img src="imagens/logo.png" alt="logo do sistema" width={150} />
                </div>
                <div className="menutopoR">
                    <ul className="lista-header">
                        <li><i className="fa-solid fa-lock icon"></i><a className="botao-header1" href="/acompanhamento">Acompanhe Aqui</a></li>
                        <li><i className="fa-solid fa-circle-info icon"></i><a className="botao-header2" href="/login">Acesso Restrito</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;