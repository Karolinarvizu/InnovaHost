// Datos de ejemplo para desarrollo
const hotelesEjemplo = {
    'hermosillo': [
        {
            id: 1,
            nombre: 'Hotel Fiesta Americana',
            ubicacion: 'Blvd. Eusebio Kino 369, Hermosillo, Sonora',
            descripcion: '5 Estrellas - Hotel de Lujo',
            imagen: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
            habitaciones: [
                {
                    id_habitacion: 1,
                    tipo: 'Standard',
                    precio: 2500,
                    disponible: true
                },
                {
                    id_habitacion: 2,
                    tipo: 'Deluxe',
                    precio: 3500,
                    disponible: true
                }
            ],
            servicios: [
                {
                    id_servicio: 1,
                    nombre: 'Desayuno Buffet',
                    precio: 250
                },
                {
                    id_servicio: 2,
                    nombre: 'Acceso a Spa',
                    precio: 500
                }
            ]
        },
        {
            id: 2,
            nombre: 'Hotel Lucerna',
            ubicacion: 'Blvd. Kino y Periférico Poniente, Hermosillo, Sonora',
            descripcion: '4 Estrellas - Hotel Ejecutivo',
            imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
            precio: 1800
        },
        {
            id: 3,
            nombre: 'Holiday Inn',
            ubicacion: 'Blvd. Kino 401, Hermosillo, Sonora',
            descripcion: '4 Estrellas - Hotel Business Class',
            imagen: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
            precio: 1600
        }
    ],
    'san carlos': [
        {
            id: 4,
            nombre: 'Marina San Carlos Resort',
            ubicacion: 'Blvd. Manlio Fabio Beltrones, San Carlos',
            descripcion: '4 Estrellas - Resort Frente al Mar',
            imagen: 'https://images.trvl-media.com/lodging/1000000/530000/527100/527033/a853bb4a.jpg',
            precio: 2800
        },
        {
            id: 5,
            nombre: 'Hotel Marinaterra',
            ubicacion: 'Blvd. Scenic, San Carlos',
            descripcion: '4 Estrellas - Hotel & Spa',
            imagen: 'https://images.trvl-media.com/lodging/2000000/1120000/1119700/1119700/2e22ae95.jpg',
            precio: 2200
        }
    ]
};

export const fetchHoteles = async (ciudad = 'hermosillo') => {
    try {
        console.log('Buscando hoteles en:', ciudad);
        
        // Convertimos la ciudad a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
        const ciudadNormalizada = ciudad.toLowerCase();
        
        // Simulamos un pequeño delay para emular el tiempo de respuesta de una API real
        await new Promise(resolve => setTimeout(resolve, 500));

        // Verificamos si hay hoteles para la ciudad buscada
        if (!hotelesEjemplo[ciudadNormalizada]) {
            console.log('No se encontraron hoteles para esta ciudad');
            return [];
        }

        // Devolvemos los hoteles de ejemplo para la ciudad
        return hotelesEjemplo[ciudadNormalizada];
    } catch (error) {
        console.error('Error al buscar hoteles:', error);
        return [];
    }
};
