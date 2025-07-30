// src/paginas/SobreNosotros.jsx
import React from "react";

const SobreNosotros = () => (
  <div className="min-h-screen bg-gray-50 pt-0">
    <div
      className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 py-24 text-center"
      style={{ marginTop: "-4rem" }}
    >
      <h1 className="text-5xl font-bold text-white mb-4">
        Sobre{" "}
        <span className="text-yellow-300">InnovaHost</span>
      </h1>
      <p className="text-lg text-blue-100 max-w-2xl mx-auto">
        Innovando en hospitalidad desde 2020, creando experiencias únicas para
        viajeros de todo el mundo
      </p>
    </div>
    <div className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Nuestra Historia
        </h2>
        <p className="text-gray-700 mb-6">
          InnovaHost nació de la visión de revolucionar la industria hotelera,
          combinando la calidez humana con la tecnología más avanzada. Desde
          nuestros inicios en 2020, hemos crecido de una pequeña startup a una
          plataforma líder en reservaciones.
        </p>
        <p className="text-gray-700 mb-6">
          Con más de 10,000 propiedades afiliadas y millones de huéspedes
          satisfechos, seguimos comprometidos con ofrecer experiencias
          excepcionales que superen las expectativas de nuestros clientes.
        </p>
        <div className="flex gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">10,000+</div>
            <div className="text-blue-600">Propiedades</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">5M+</div>
            <div className="text-blue-600">Huéspedes</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Hotel"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>
    </div>
  </div>
);

export default SobreNosotros;
