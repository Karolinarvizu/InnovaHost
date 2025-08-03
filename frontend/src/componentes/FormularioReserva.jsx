import React, { useState } from 'react';
import '../App.css';
import { toast } from 'react-toastify';
import reservacionService from '../servicios/reservacionService';

const FormularioReserva = ({ hotel, onReservar, onClose }) => {
    const [formData, setFormData] = useState({
        hotel_id: hotel?.id,
        fecha_entrada: '',
        fecha_salida: '',
        num_huespedes: 1,
        tipo_habitacion: 'standard',
        nombre_huesped: '',
        email: '',
        telefono: '',
        total: 0
    });

    const [duracion, setDuracion] = useState(0);

    const calcularTotal = () => {
        if (formData.fecha_entrada && formData.fecha_salida) {
            const inicio = new Date(formData.fecha_entrada);
            const fin = new Date(formData.fecha_salida);
            const dias = Math.ceil((fin - inicio) / (1000 * 60 * 60 * 24));
            
            let precioPorNoche;
            switch(formData.tipo_habitacion) {
                case 'deluxe':
                    precioPorNoche = 200;
                    break;
                case 'suite':
                    precioPorNoche = 300;
                    break;
                default: // standard
                    precioPorNoche = 100;
            }
            
            const total = dias * precioPorNoche;
            setFormData(prev => ({...prev, total}));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Calcular total cuando cambian las fechas o tipo de habitación
        if (name === 'fecha_entrada' || name === 'fecha_salida' || name === 'tipo_habitacion') {
            calcularTotal();
        }

        // Calcular duración cuando cambian las fechas
        if (name === 'fecha_entrada' || name === 'fecha_salida') {
            const inicio = new Date(name === 'fecha_entrada' ? value : formData.fecha_entrada);
            const fin = new Date(name === 'fecha_salida' ? value : formData.fecha_salida);
            
            if (inicio && fin && inicio < fin) {
                const dias = Math.ceil((fin - inicio) / (1000 * 60 * 60 * 24));
                setDuracion(dias);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (!formData.fecha_entrada || !formData.fecha_salida || !formData.nombre_huesped || !formData.email) {
            toast.error('Por favor complete todos los campos requeridos');
            return;
        }

        try {
            const response = await reservacionService.crearReservacion(formData);
            console.log('Reservación creada:', response);
            toast.success('¡Reservación creada exitosamente!');
            
            if (onReservar) {
                onReservar(response.data);
            }
            
            if (onClose) {
                onClose();
            }

            // Limpiar el formulario
            setFormData({
                fecha_entrada: '',
                fecha_salida: '',
                num_huespedes: 1,
                tipo_habitacion: 'standard',
                nombre_huesped: '',
                email: '',
                telefono: '',
                total: 0
            });
        } catch (error) {
            console.error('Error al crear la reservación:', error);
            toast.error('Error al crear la reservación: ' + (error.response?.data?.message || 'Error desconocido'));
        }
    };

    // Obtener la fecha de mañana para el mínimo de fecha de inicio
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Reservar en {hotel.nombre}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Fecha de Entrada
                        </label>
                        <input
                            type="date"
                            name="fecha_entrada"
                            min={minDate}
                            required
                            value={formData.fecha_entrada}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Fecha de Salida
                        </label>
                        <input
                            type="date"
                            name="fecha_salida"
                            min={formData.fecha_entrada || minDate}
                            required
                            value={formData.fecha_salida}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Nombre del Huésped
                        </label>
                        <input
                            type="text"
                            name="nombre_huesped"
                            required
                            value={formData.nombre_huesped}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            name="telefono"
                            required
                            pattern="[0-9]{10}"
                            maxLength="20"
                            placeholder="Ej: 1234567890"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Número de Huéspedes
                        </label>
                        <input
                            type="number"
                            name="num_huespedes"
                            min="1"
                            max="4"
                            required
                            value={formData.num_huespedes}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Tipo de Habitación
                        </label>
                        <select
                            name="tipo_habitacion"
                            value={formData.tipo_habitacion}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        >
                            <option value="standard">Standard</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>

                    {duracion > 0 && (
                        <div className="bg-gray-50 p-4 rounded-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Resumen de la Reserva
                            </h3>
                            <p className="text-gray-600">
                                Duración: {duracion} {duracion === 1 ? 'noche' : 'noches'}
                            </p>
                        </div>
                    )}

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                        >
                            Confirmar Reserva
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioReserva;
