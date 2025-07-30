import axios  from 'axios';

export async function authRegistro(request) {
    try {
        const response = await axios.post(
            'http://localhost:8000/api/auth/register',
            request,
            { headers: { 'Content-Type': 'application/json' } }
        );
        // Devuelve tanto el status como los datos
        return { status: response.status, data: response.data };
    } catch (error) {
        // Manejo de errores
        return { status: error.response?.status || 500, data: error.response?.data || {} };
    }
}

export async function authLogin(request) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}login`,
        request,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return { status: response.status, data: response.data };
    } catch (error) {
      console.log("Error en el login:", error);
      return { status: error.response?.status || 500, data: {} };
    }
  }
  