// URL base de la API
const API_URL = 'http://localhost:8000/api';

export const crearReserva = async (reservaData) => {
    try {
        const response = await fetch(`${API_URL}/reservas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Asumiendo que usas token de autenticación
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(reservaData)
        });

        if (!response.ok) {
            throw new Error('Error al crear la reserva');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const obtenerReservasCliente = async (idCliente) => {
    try {
        const response = await fetch(`${API_URL}/reservas/cliente/${idCliente}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener las reservas');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
