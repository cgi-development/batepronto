import './App.css';
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import LinhaAmarela from "./Componentes/LinhaAmarela";
import Rotas from "./paginas/Rotas.js";

function App() {
  return (
    <div className="App">
      <Header />
      <LinhaAmarela />
      <Rotas/>
      <Footer />
    </div>
  );
}

export default App;
