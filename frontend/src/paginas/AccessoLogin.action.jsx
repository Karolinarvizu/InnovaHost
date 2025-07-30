import { authLogin } from '../servicios/ApiAuth';

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const response = await authLogin(datos);
  console.log('RESPUESTA LOGIN:', response);

  // Ajusta aquí según el nombre real de la propiedad del token
  const token = response.data?.access_token || response.data?.token || response.data?.data?.token;

  if (response.status === 200 && token) {
    // Devuelve el token para que el componente lo maneje
    return { token };
  } else {
    return ['Credenciales incorrectas o error del servidor'];
  }
}
