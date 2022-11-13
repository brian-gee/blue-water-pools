import { app } from "./initAuth";
// import CustomerTable from "../components/customerTable";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
// DB

export const db = getFirestore(app);
export const customerRef = collection(db, "customers");

// Add customer
export const addCustomer = (
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  invoice: number
) => {
  addDoc(customerRef, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
    invoice: invoice,
  });
};

// // Delete customer
export const deleteCustomer = (id: string) => {
  const customerRef = doc(db, "customers", id);
  deleteDoc(customerRef);
};
