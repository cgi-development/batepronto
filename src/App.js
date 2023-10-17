import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import LinhaAmarela from "./Componentes/LinhaAmarela";
import Welcome from "./paginas/Welcome";
import Formu1 from "./paginas/Form1";

function App() {
  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/form1",
      element: <Form1 />,
    },
    {
      path: "/form2",
      element: <Form2 />,
    },
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
