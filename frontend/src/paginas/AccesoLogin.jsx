import React, { useEffect } from 'react';
import { Link, Form, useActionData, useNavigate } from 'react-router-dom';

const AccesoLogin = () => {
  const data = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem('authToken', data.token);
      navigate('/');
    }
  }, [data, navigate]);

  const errores = Array.isArray(data) ? data : undefined;

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative py-16 px-4">
      {/* Fondo con imagen */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Contenedor del formulario */}
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md z-10 relative">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 21V7l8-6 8 6v14H4zm2-2h2v-3h8v3h2V8.5l-6-4.5-6 4.5V19zm4-5h1v1H10v-1zm3 0h1v1h-1v-1zm-3-2h1v1H10v-1zm3 0h1v1h-1v-1zm-3-2h1v1H10v-1zm3 0h1v1h-1v-1z"/>
            </svg>
            <span className="text-2xl font-bold text-blue-600">InnovaHost</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>

        {errores?.length > 0 && (
          <div className="mb-4 bg-red-50 p-3 rounded-lg border border-red-200">
            <ul className="text-sm text-red-600">
              {errores.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
          </div>
        )}

        <Form method="post" className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2 border rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg"
          >
            Iniciar sesión
          </button>
        </Form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Regístrate
            </Link>
          </p>
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccesoLogin;
