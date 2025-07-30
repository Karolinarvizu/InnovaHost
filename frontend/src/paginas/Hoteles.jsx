import React, { useEffect, useState } from "react";
import HotelCard from '../componentes/HotelCard';

const Hoteles = () => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Consumo de API real de hoteles en Laravel
    fetch('http://127.0.0.1:8000/api/hoteles')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar hoteles');
        return res.json();
      })
      .then(data => {
        setHoteles(data);
        setLoading(false);
      })
      .catch(err => {
        setError('No se pudo cargar hoteles: ' + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Hoteles</h1>
        <p className="text-gray-600">Explora los mejores hoteles y reserva tu próxima experiencia.</p>
      </div>
      {loading && <div className="text-center text-blue-600">Cargando hoteles...</div>}
      {error && <div className="text-center text-red-600">{error}</div>}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {hoteles.map((hotel, idx) => (
          <HotelCard key={idx} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hoteles;
