// Datos de ejemplo para desarrollo
const hotelesEjemplo = {
    'hermosillo': [
        {
            id: 1,
            nombre: 'Hotel Fiesta Americana',
            ubicacion: 'Blvd. Eusebio Kino 369, Hermosillo, Sonora',
            descripcion: '5 Estrellas - Hotel de Lujo',
            imagen: 'https://www.fiestamericana.com/assets/img/Hermosillo-Hotel-Fiesta-Americana-Hermosillo-Habitacion.jpg',
            precio: 2500
        },
        {
            id: 2,
            nombre: 'Hotel Lucerna',
            ubicacion: 'Blvd. Kino y Periférico Poniente, Hermosillo, Sonora',
            descripcion: '4 Estrellas - Hotel Ejecutivo',
            imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1b/7d/1e/hotel-lucerna-hermosillo.jpg',
            precio: 1800
        },
        {
            id: 3,
            nombre: 'Holiday Inn',
            ubicacion: 'Blvd. Kino 401, Hermosillo, Sonora',
            descripcion: '4 Estrellas - Hotel Business Class',
            imagen: 'https://digital.ihg.com/is/image/ihg/holiday-inn-hermosillo-5909337738-2x1',
            precio: 1600
        }
    ],
    'san carlos': [
        {
            id: 4,
            nombre: 'Marina San Carlos Resort',
            ubicacion: 'Blvd. Manlio Fabio Beltrones, San Carlos',
            descripcion: '4 Estrellas - Resort Frente al Mar',
            imagen: 'https://marina-san-carlos.com/wp-content/uploads/2019/03/marina-san-carlos-1.jpg',
            precio: 2800
        },
        {
            id: 5,
            nombre: 'Hotel Marinaterra',
            ubicacion: 'Blvd. Scenic, San Carlos',
            descripcion: '4 Estrellas - Hotel & Spa',
            imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/49/82/01/marinaterra-hotel-spa.jpg',
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
