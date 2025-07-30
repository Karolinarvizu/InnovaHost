import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './input.css';
import './index.css'
import ContextEjemplo from "./paginas/contextEjemplo.jsx";
import AccesoRegistro, {action as registroAction} from './paginas/AccesoRegistro.jsx';
import AccesoLogin from './paginas/AccesoLogin.jsx';
import { action as actionLogin } from './paginas/AccessoLogin.action.jsx';
import Hoteles from './paginas/Hoteles.jsx';
import HotelDetalle from './paginas/HotelDetalle.jsx';
import Reservas from './paginas/Reservas.jsx';
import PanelAdmin from './paginas/PanelAdmin.jsx';
import Dashboard from './paginas/Dashboard.jsx';
import Error404 from './paginas/Error404.jsx';
import Frontend from "./componentes/Frontend.jsx";
import Rutas from "./paginas/Rutas.jsx";
import Home from './paginas/Home.jsx';
import SobreNosotros from './paginas/SobreNosotros.jsx';
import RutaProtegida from "./componentes/RutaProtegida.jsx";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// creamos el elmento route
const router = createBrowserRouter
(
  [
    {
      path:'/',
      element: <Frontend/>,
      children:
      [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'sobre-nosotros',
          element: <SobreNosotros/>
        },
        {
          path: 'contexto',
          element: <ContextEjemplo />,
        },
        {
          path: 'registro',
          element: <AccesoRegistro/>,
          action: registroAction,
        },
        {
          path: 'login',
          element: <AccesoLogin/>,
          action: actionLogin,
        },
        {
          path: 'hoteles',
          element: <Hoteles/>,
        },
        {
          path: 'hotel/:id',
          element: <HotelDetalle/>,
        },
        {
          path: 'reservas',
          element: <RutaProtegida><Reservas /></RutaProtegida>
        },
        {
          path: 'admin',
          element: <RutaProtegida><PanelAdmin /></RutaProtegida>
        },
        {
          path: 'dashboard',
          element: <RutaProtegida><Dashboard /></RutaProtegida>
        },
        {
          path: '*',
          element: <Error404 />
        },
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

