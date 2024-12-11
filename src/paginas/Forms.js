import { useParams } from "react-router-dom";
import { Formulario1, Formulario2, Formulario3, Formulario4 } from "../Componentes/Formularios";
import ErrorPage from "./ErrorPage.js";
import IndicePagina from "../Componentes/IndicePagina"
import { Container } from "react-bootstrap";

const Forms = () => {
    let { pagina } = useParams();
    const formularios = [ErrorPage, Formulario1, Formulario2, Formulario3, Formulario4];
    const FormularioAtual = formularios[pagina];
    return (
        <>
        <IndicePagina indice={pagina}/>
        <Container>
            <FormularioAtual />
        </Container>
        </>
    )
}

export default Forms;