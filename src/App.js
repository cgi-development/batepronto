import './App.css';
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import LinhaAmarela from "./Componentes/LinhaAmarela";
import Welcome from "./paginas/Welcome.js";

function App() {
  return (
    <div className="App">
      <Header />
      <LinhaAmarela />
      <Welcome/>
      <Footer />
    </div>
  );
}

export default App;
