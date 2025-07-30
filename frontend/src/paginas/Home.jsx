// src/paginas/Home.jsx
import React, { useState, useEffect } from "react";

const hoteles = [
	{
		nombre: "El Dorado",
		ciudad: "Hermosillo",
		imagen:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		estrellas: 5,
		usuario: "Ericka",
		fecha: "16/04/2025",
	},
	{
		nombre: "El Nora",
		ciudad: "Sonoyta",
		imagen:
			"https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
		estrellas: 3,
		usuario: "Ivan",
		fecha: "24/04/2025",
	},
	{
		nombre: "Esmeralda",
		ciudad: "Puerto Peñasco",
		imagen:
			"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
		estrellas: 4,
		usuario: "Andrik",
		fecha: "01/05/2025",
	},
	{
		nombre: "Lucerna",
		ciudad: "Review body",
		imagen:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
		estrellas: 5,
		usuario: "Yareth",
		fecha: "09/05/2025",
	},
	{
		nombre: "City express",
		ciudad: "Hermosillo",
		imagen:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		estrellas: 5,
		usuario: "Julio",
		fecha: "10/05/2025",
	},
	{
		nombre: "San Sebastian",
		ciudad: "Hermosillo",
		imagen:
			"https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
		estrellas: 4,
		usuario: "Luis",
		fecha: "15/05/2025",
	},
	{
		nombre: "Sleep inn",
		ciudad: "Mexicali",
		imagen:
			"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
		estrellas: 3,
		usuario: "Julia",
		fecha: "21/05/2025",
	},
];

const destacados = [
	{
		nombre: "El Dorado",
		imagen:
			"https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel El Nora",
		imagen:
			"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel Esmeralda",
		imagen:
			"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel Lucerna",
		imagen:
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "City Express Hotel",
		imagen:
			"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel Playa Bonita",
		imagen:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel Mar Azul",
		imagen:
			"https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel Cielo Claro",
		imagen:
			"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
	},
	{
		nombre: "Hotel Estrella",
		imagen:
			"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
	},
];

const Home = () => {
	const [destacadoIndex, setDestacadoIndex] = useState(0);
	const visible = 3;
	const total = destacados.length;

	const getDestacadosVisibles = () => {
		let arr = [];
		for (let i = 0; i < visible; i++) {
			arr.push(destacados[(destacadoIndex + i) % total]);
		}
		return arr;
	};

	return (
		<div className="w-full">
			{/* Hero principal limpio, solo imagen de fondo y texto */}
			<div className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center bg-gray-900 overflow-hidden border-none outline-none pt-20">
				<img
					src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
					alt="hero visible"
					className="absolute inset-0 w-full h-full object-cover opacity-70 border-none outline-none shadow-none m-0 p-0 select-none"
					draggable={false}
				/>
				{/* Contenido hero */}
				<div className="relative z-30 text-center text-white flex flex-col items-center justify-center w-full">
					<h1 className="text-4xl md:text-5xl font-bold drop-shadow mb-2">
						InnovaHost
					</h1>
					<p className="text-lg md:text-2xl mb-4 drop-shadow">
						El mejor sitio para reservaciones de hoteles, moteles y más.
					</p>
					<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition">
						Reservar ahora
					</button>
				</div>
			</div>

			{/* Hoteles Destacados Carrusel */}
			<div className="bg-white py-16">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						Hoteles Destacados
					</h2>
					<div className="relative flex items-center justify-center mb-8">
						{/* Flecha izquierda */}
						<button
							onClick={() =>
								setDestacadoIndex((prev) => (prev - 1 + total) % total)
							}
							className="absolute left-0 z-10 bg-white/80 hover:bg-blue-100 text-blue-700 rounded-full p-2 shadow transition flex items-center justify-center text-xl"
							aria-label="Anterior"
							style={{ top: "50%", transform: "translateY(-50%)" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
						{/* Imágenes del carrusel */}
						<div className="flex gap-6 w-full justify-center">
							{getDestacadosVisibles().map((hotel, idx) => (
								<div key={idx} className="flex-shrink-0 w-64">
									<img
										src={hotel.imagen}
										alt={hotel.nombre}
										className="rounded-lg w-full h-40 object-cover"
									/>
									<div className="text-center mt-2 font-semibold text-gray-700">
										{hotel.nombre}
									</div>
								</div>
							))}
						</div>
						{/* Flecha derecha */}
						<button
							onClick={() =>
								setDestacadoIndex((prev) => (prev + 1) % total)
							}
							className="absolute right-0 z-10 bg-white/80 hover:bg-blue-100 text-blue-700 rounded-full p-2 shadow transition flex items-center justify-center text-xl"
							aria-label="Siguiente"
							style={{ top: "50%", transform: "translateY(-50%)" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Hoteles */}
			<div className="max-w-7xl mx-auto px-4 py-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{hoteles.map((hotel, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
						>
							<img
								src={hotel.imagen}
								alt={hotel.nombre}
								className="h-40 w-full object-cover"
							/>
							<div className="p-4 flex-1 flex flex-col justify-between">
								<div>
									<div className="flex items-center mb-1">
										{Array.from({ length: 5 }).map((_, i) => (
											<span
												key={i}
												className={
													i < hotel.estrellas
														? "text-yellow-400"
														: "text-gray-300"
												}
											>
												★
											</span>
										))}
									</div>
									<h3 className="font-bold text-lg text-gray-800">
										{hotel.nombre}
									</h3>
									<p className="text-gray-500 text-sm mb-2">
										{hotel.ciudad}
									</p>
								</div>
								<div className="flex items-center gap-2 mt-2">
									<span className="text-xs text-gray-400">
										{hotel.usuario}
									</span>
									<span className="text-xs text-gray-300">
										{hotel.fecha}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Footer */}
			<footer className="bg-white border-t-0 py-8 mt-10 text-center">
				<div className="flex justify-center items-center gap-8">
					<a
						href="https://x.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="X"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
						</svg>
					</a>
					<a
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
						</svg>
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Home;
