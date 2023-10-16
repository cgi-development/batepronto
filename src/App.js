import './App.css';
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import LinhaAmarela from "./Componentes/LinhaAmarela";
import Form1 from "./paginas/Form1.js";

function App() {
  return (
    <div className="App">
      <Header />
      <LinhaAmarela />
      <Form1/>
      <Footer />
    </div>
  );
}

export default App;
