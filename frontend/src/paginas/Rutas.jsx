import { NavLink, Link } from 'react-router-dom';

export const Rutas = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      {/* Imagen de rutas */}
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Rutas" className="w-40 h-40 object-cover rounded-xl shadow mb-6" />
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center w-full">Rutas</h1>
        <ul className="space-y-2">
          <li>
            <NavLink to='/' className="text-blue-600 hover:underline">Home</NavLink>
          </li>
          <li>
            <Link to='/sobre-nosotros' className="text-blue-600 hover:underline">Sobre nosotros</Link>
          </li>
          <li>
            <Link to='/Context' className="text-blue-600 hover:underline">ContextEjemplo</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Rutas;