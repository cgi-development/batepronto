import { Route, Routes } from "react-router-dom"
import Welcome from "./Welcome.js";
import Form1 from "./Form1.js";
import Form2 from "./Form2.js";
import Form3 from "./Form3.js";
import Form4 from "./Form4.js";

const Rotas = () => {
    return (
    <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/form1" Component={Form1} />
        <Route path="/form2" Component={Form2} />
        <Route path="/form3" Component={Form3} />
        <Route path="/form4" Component={Form4} />
    </Routes>
    )
}

export default Rotas;