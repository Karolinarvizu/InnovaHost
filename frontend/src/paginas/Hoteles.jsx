import React, { useEffect, useState } from "react";
import HotelCard from '../componentes/HotelCard';
import { fetchHoteles } from '../servicios/hotelAPI';

const Hoteles = () => {
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchHoteles()
      .then(data => {
        setHoteles(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar hoteles: ' + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Hoteles</h1>
        <p className="text-gray-600">Explora los mejores hoteles y reserva tu próxima experiencia.</p>
      </div>

      {loading && (
        <div className="text-center text-blue-600 mb-4">
          <p>Cargando hoteles...</p>
        </div>
      )}

      {error && (
        <div className="text-center text-red-600 mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hoteles.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hoteles;
