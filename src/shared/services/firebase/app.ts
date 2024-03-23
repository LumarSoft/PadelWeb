import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs6uDcMN6Aqsr887lk0vnOrAaaevarvj8",
  authDomain: "lavallepadel.firebaseapp.com",
  projectId: "lavallepadel",
  storageBucket: "lavallepadel.appspot.com",
  messagingSenderId: "244761360739",
  appId: "1:244761360739:web:ad197394e8a5e7f8143b56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
