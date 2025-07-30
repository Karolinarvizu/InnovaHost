import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');

  // Si NO está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, muestra el contenido protegido
  return children;
};

export default RutaProtegida;