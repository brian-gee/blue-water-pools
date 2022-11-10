import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATA_BASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbRef = collection(db, "customers");

// // Get customers
// export const getCustomer = async () => {
//   const querySnapshot = await getDocs(collection(db, "customers"));
//   querySnapshot.forEach((doc) => {
//     return `${doc.id} => ${doc.data().firstName}`;
//   });
// };

// Add customer
export const addCustomer = (
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  invoice: number
) => {
  addDoc(dbRef, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
    invoice: invoice,
  });
};

// // Delete customer
// export const deleteCustomer = (id: string) => {
//   const docRef = doc(db, "customers", id);
//   deleteDoc(docRef);
// };
