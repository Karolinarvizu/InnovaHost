// Simulamos almacenamiento local para las reservas
let reservas = [];

export const crearReserva = async (reserva) => {
    try {
        // En un caso real, aquí haríamos una llamada a la API
        // Por ahora, solo almacenamos en memoria
        reserva.id = Date.now(); // Generamos un ID único
        reservas.push(reserva);
        
        // También guardamos en localStorage para persistencia
        localStorage.setItem('reservas', JSON.stringify(reservas));
        
        return reserva;
    } catch (error) {
        console.error('Error al crear la reserva:', error);
        throw new Error('No se pudo crear la reserva');
    }
};

export const obtenerReservas = async () => {
    try {
        // Intentamos obtener las reservas del localStorage
        const reservasGuardadas = localStorage.getItem('reservas');
        if (reservasGuardadas) {
            reservas = JSON.parse(reservasGuardadas);
        }
        return reservas;
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        return [];
    }
};

export const obtenerReservasPorUsuario = async (email) => {
    try {
        const todasLasReservas = await obtenerReservas();
        return todasLasReservas.filter(reserva => reserva.email === email);
    } catch (error) {
        console.error('Error al obtener las reservas del usuario:', error);
        return [];
    }
};

export const cancelarReserva = async (reservaId) => {
    try {
        reservas = reservas.map(reserva => 
            reserva.id === reservaId 
                ? { ...reserva, estado: 'cancelada' }
                : reserva
        );
        
        localStorage.setItem('reservas', JSON.stringify(reservas));
        return true;
    } catch (error) {
        console.error('Error al cancelar la reserva:', error);
        throw new Error('No se pudo cancelar la reserva');
    }
};
