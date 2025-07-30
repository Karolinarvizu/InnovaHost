import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const getUserRole = () => {
  const token = localStorage.getItem('authToken');
  if (!token) return null;
  if (token.includes('admin')) return 'admin';
  return 'user';
};

const menuConfig = [
  { to: '/', label: 'Inicio', show: () => true },
  { to: '/hoteles', label: 'Hoteles', show: () => true },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros', show: () => true },
  { to: '/reservas', label: 'Mis Reservas', show: role => role === 'user' || role === 'admin' },
  { to: '/admin', label: 'Panel Admin', show: role => role === 'admin' },
  { to: '/login', label: 'Login', show: role => !role },
  { to: '/registro', label: 'Registro', show: role => !role },
];

const Frontend = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setRole(getUserRole());
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setRole(null);
    navigate('/');
  };

  const filteredLinks = menuConfig.filter(link => link.show(role));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar visual mejorado */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo/NOMBRE */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 21V7l8-6 8 6v14H4zm2-2h2v-3h8v3h2V8.5l-6-4.5-6 4.5V19zm4-5h1v1H10v-1zm3 0h1v1h-1v-1zm-3-2h1v1H10v-1zm3 0h1v1h-1v-1zm-3-2h1v1H10v-1zm3 0h1v1h-1v-1z"/>
            </svg>
            <span className="text-xl font-bold text-white">InnovaHost</span>
          </Link>
          {/* Links desktop */}
          <div className="hidden md:flex gap-6">
            {filteredLinks.map((link, idx) => (
              link.to === '#' ? (
                <button
                  key={idx}
                  onClick={handleLogout}
                  className="px-3 py-1 font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                >Cerrar sesión</button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1 font-medium rounded transition ${location.pathname === link.to ? 'bg-white text-blue-700 shadow' : 'text-white hover:bg-blue-800'}`}
                >
                  {link.label}
                </Link>
              )
            ))}
            {role && (
              <button
                onClick={handleLogout}
                className="px-3 py-1 font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
              >Cerrar sesión</button>
            )}
          </div>
          {/* Hamburguesa mobile */}
          <button
            className="md:hidden flex flex-col gap-1 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span className="w-7 h-1 bg-white rounded"></span>
            <span className="w-7 h-1 bg-white rounded"></span>
            <span className="w-7 h-1 bg-white rounded"></span>
          </button>
        </div>
        {/* Menú mobile */}
        {open && (
          <div className="md:hidden bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 px-4 pb-4 flex flex-col gap-2 animate-fade-in-down">
            {filteredLinks.map((link, idx) => (
              link.to === '#' ? (
                <button
                  key={idx}
                  onClick={() => { handleLogout(); setOpen(false); }}
                  className="text-white font-medium py-2 bg-red-500 rounded hover:bg-red-600 transition"
                >Cerrar sesión</button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-white font-medium py-2 rounded ${location.pathname === link.to ? 'bg-white text-blue-700 shadow' : 'hover:bg-blue-800'}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            {role && (
              <button
                onClick={() => { handleLogout(); setOpen(false); }}
                className="text-white font-medium py-2 bg-red-500 rounded hover:bg-red-600 transition"
              >Cerrar sesión</button>
            )}
          </div>
        )}
      </nav>
      {/* Espacio para que el contenido no quede debajo de la barra */}
      <div className="flex-1 bg-white mt-20">
        <main className="w-full h-full m-0 p-0 border-0 outline-none shadow-none bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Frontend;