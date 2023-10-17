import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import LinhaAmarela from "./Componentes/LinhaAmarela";
import Welcome from "./paginas/Welcome";
import Form1 from "./paginas/Form1";
import Form2 from "./paginas/Form2";
import Form3 from "./paginas/Form3";
import ErrorPage from "./paginas/ErrorPage";

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
    {
      path: "/form3",
      element: <Form3 />,
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
