import { Link } from "react-router-dom";

const Exito = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 text-center bg-green-100 border border-green-300 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-4">¡Registro exitoso!</h2>
      <p className="text-gray-700 mb-6">Tu cuenta ha sido creada correctamente.</p>

      <Link
        to="/acceso-login"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Accede aqui para Iniciar Sesión 
      </Link>
    </div>
  );
};
export default Exito;