import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const createContact = async ({name, email, message, subject}) => {
  await addDoc(collection(db, "Contact"), {
    name,
    email,
    subject: subject || "No subject",
    message,
  });
};
