import {
  AuthError,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../app";
import { saveCredentialsInCookies } from "@/shared/services/credentialsCookies";

export const loginUserWhitEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const accessToken = await user.getIdToken();

    if (!accessToken) {
      console.error("Error: No se pudo obtener el token de acceso.");
      return;
    }

    const credentials = {
      email: user.email || null,
      accessToken: accessToken || null,
    };

    console.log(user);
    saveCredentialsInCookies(credentials);
  } catch (error) {
    console.log(error);
  }
};

export const loginUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credentialUser = GoogleAuthProvider.credentialFromResult(result);

      if (!credentialUser) {
        return;
      }

      const user = result.user;

      const credentials = {
        email: user.email || null,
        accessToken: credentialUser.accessToken || null,
      };

      saveCredentialsInCookies(credentials);
    })
    .catch((error: AuthError) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email; // Usando el operador de encadenamiento opcional para evitar errores si 'customData' es nulo
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};

export const loginUserWithFacebook = async () => {};
