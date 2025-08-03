const API_URL = 'http://localhost:8000/api';

async function crearReservacion(reservacionData) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No hay token de autenticación');
        }

        const response = await fetch(`${API_URL}/reservaciones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(reservacionData)
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Error al crear la reservación');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la API:', error);
        throw error;
    }
}

async function obtenerReservaciones() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No hay token de autenticación');
        }

        const response = await fetch(`${API_URL}/reservaciones`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Error al obtener las reservaciones');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la API:', error);
        throw error;
    }
}

export default {
    crearReservacion,
    obtenerReservaciones
};
