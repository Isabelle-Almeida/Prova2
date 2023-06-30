import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/pages/Error";
import CadastroDespesa from "./components/pages/CadastroDespesa";
import ListarDespesas from "./components/pages/ListarDespesa";



const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroDespesa />,
      },
      {
        path: "/cadastrar",
        element: <CadastroDespesa />,
      },
      {
        path: "/listar",
        element: <ListarDespesas />,
      },
    
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
