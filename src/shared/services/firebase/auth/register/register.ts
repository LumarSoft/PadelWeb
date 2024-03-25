import { userRegisterSchema } from "@/shared/services/zod/userSchema";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../app";
import { saveDatesInFirestore } from "../../firestore/register/saveDates";

interface userInputRegister {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  document: string;
}

export const registerUser = async (userInput: userInputRegister) => {
  const user = userRegisterSchema.parse(userInput);

  const { email, password } = user;

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    const user = result.user;

    const accessToken = await user.getIdToken();

    // Falta meter todos los datos del usuario y guardarlos en firestore
    //Luego retornar email,accesstoken,uid,avatar
  } catch (error) {
    const { code, message } = error as { code: string; message: string }; // Asertamos el tipo de error

    console.log(code, message);
  }
};

export const registerUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const accessToken = await user.getIdToken();

    const credentials = {
      email: user?.email,
      avatar: user?.photoURL,
      uid: user?.uid,
      accessToken: accessToken,
      phone: "",
    };

    console.log(credentials);
  } catch (error) {
    const { code, message } = error as { code: string; message: string };

    console.log(code, message);
  }
};
