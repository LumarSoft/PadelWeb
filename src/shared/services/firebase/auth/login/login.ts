import {
  AuthError,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../app";
import { saveCredentialsInCookies } from "@/shared/services/credentialsCookies";
import { userLoginSchema } from "@/shared/services/zod/userSchema";

interface userInputLogin {
  email: string;
  password: string;
}

export const loginUserWhitEmailAndPassword = async (
  userInput: userInputLogin
) => {
  
  const user = userLoginSchema.parse(userInput);
  const { email, password } = user;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);

    const user = result.user;

    const accessToken = await user.getIdToken();

    const credentials = {
      email: user?.email,
      accessToken: accessToken,
      uid: user?.uid,
      avatar: user?.photoURL,
    };

    console.log(credentials);
  } catch (error) {
    const { code, message } = error as { code: string; message: string };

    console.log(code, message);
  }
};

export const loginUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const accessToken = await user.getIdToken();

    const credentials = {
      email: user?.email,
      accessToken: accessToken,
      uid: user?.uid,
      avatar: user?.photoURL,
      phone: "",
    };

    console.log(credentials);
  } catch (error) {
    const { code, message } = error as { code: string; message: string };
    console.log(code, message);
  }
};
