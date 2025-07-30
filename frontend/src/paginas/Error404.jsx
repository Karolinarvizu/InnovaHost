import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center p-8">
    <svg className="w-16 h-16 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 21V7l8-6 8 6v14H4zm2-2h2v-3h8v3h2V8.5l-6-4.5-6 4.5V19zm4-5h1v1H10v-1zm3 0h1v1h-1v-1zm-3-2h1v1H10v-1zm3 0h1v1h-1v-1zm-3-2h1v1H10v-1zm3 0h1v1h-1v-1z"/>
    </svg>
    <h1 className="text-4xl font-bold text-blue-700 mb-2">404</h1>
    <p className="text-lg text-gray-700 mb-6">Página no encontrada</p>
    <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">Volver al inicio</Link>
  </div>
);

export default Error404;
