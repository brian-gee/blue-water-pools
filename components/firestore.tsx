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
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const dbRef = collection(db, "customers");

// Get customers
export const getCustomer = () => {
  getDocs(dbRef).then((snapshot) => {
    let customers: any = [];
    snapshot.docs.forEach((e) => {
      customers.push({ ...e.data(), id: e.id });
    });
    console.log(customers);
  });
};

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

// Delete customer
export const deleteCustomer = (id: string) => {
  const docRef = doc(db, "customers", id);
  deleteDoc(docRef);
};
