import { setCookie } from 'cookies-next';

interface Credentials {
  email: string | null;
  accessToken: string | null;
}

export const saveCredentialsInCookies = (credentials: Credentials) => {
  if (credentials.email !== null && credentials.accessToken !== null) {
    // Configurar las opciones de la cookie
    const cookieOptions = {
      secure: true, // Enviar solo a través de HTTPS
      path: '/', // Ruta para la cual la cookie es válida
      maxAge: 3600, // Tiempo de vida de la cookie (1 hora en este ejemplo)
    };

    // Guardar las credenciales en una cookie
    setCookie('credentials', JSON.stringify(credentials), cookieOptions);
  } else {
    console.error(
      "Error: No se guardaron las credenciales debido a valores nulos."
    );
  }
};