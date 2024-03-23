import { collection, addDoc } from "firebase/firestore";
import { db } from "../../app";

interface userDates {
  name: string | null;
  uuid: string | null;
  phone: string | null;
  doc: string | null;
  email: string | null;
  avatar: string | null;
}

export const saveDatesInFirestore = async (dates: userDates) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: dates.name,
      uuid: dates.uuid,
      phone: dates.phone,
      doc: dates.doc,
      email: dates.email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
