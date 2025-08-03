import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Frontend from './componentes/Frontend';
import Home from './paginas/Home';
import AccesoLogin from './paginas/AccesoLogin';
import AccesoRegistro from './paginas/AccesoRegistro';
import Hoteles from './paginas/Hoteles';
import HotelDetalle from './paginas/HotelDetalle';
import Reservas from './paginas/Reservas';
import PanelAdmin from './paginas/PanelAdmin';
import Dashboard from './paginas/Dashboard';
import Rutas from './paginas/Rutas';
import SobreNosotros from './paginas/SobreNosotros';
import Error404 from './paginas/Error404';
import RutaProtegida from './componentes/RutaProtegida';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="login" element={<AccesoLogin />} />
          <Route path="registro" element={<AccesoRegistro />} />
          <Route path="hoteles" element={<Hoteles />} />
          <Route path="hotel/:id" element={<HotelDetalle />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="rutas" element={<Rutas />} />
          {/* Rutas protegidas */}
          <Route path="reservas" element={<RutaProtegida><Reservas /></RutaProtegida>} />
          <Route path="admin" element={<RutaProtegida><PanelAdmin /></RutaProtegida>} />
          <Route path="dashboard" element={<RutaProtegida><Dashboard /></RutaProtegida>} />
          {/* Error 404 */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
