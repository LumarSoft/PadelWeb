import { userSchema } from "@/shared/services/zod/userSchema";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../app";
import { saveDatesInFirestore } from "../../firestore/register/saveDates";

export interface inputDates {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  document: string;
}

export const registerUser = async (userInput: inputDates) => {
  const user = userSchema.parse(userInput);

  const { email, password } = user;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const dates = {
        name: userInput.name,
        uuid: user?.uid,
        phone: userInput.phoneNumber,
        doc: userInput.document,
        email: user?.email,
        avatar: "",
      };

      saveDatesInFirestore(dates);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const registerUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};
