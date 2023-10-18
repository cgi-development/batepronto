import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import LinhaAmarela from "./Componentes/LinhaAmarela";
import Welcome from "./paginas/Welcome";
import Forms from "./paginas/Forms";
import ErrorPage from "./paginas/ErrorPage.js";

function App() {
  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/form/:pagina",
      element: <Forms />,
    }
  ]);

  return (
    <div className="App">
      <Header />
      <LinhaAmarela />
      <RouterProvider router={rotas} />
      <Footer />
    </div>
  );
}

export default App;
