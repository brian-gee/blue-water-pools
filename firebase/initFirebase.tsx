import { app } from "./initAuth";
import { getDatabase, ref, child, get } from "firebase/database";

export const db = getDatabase();
export const dbRef = ref(db, 'customers');

// Add customer
// export const addCustomer = (
//   firstName: string,
//   lastName: string,
//   email: string,
//   address: string,
//   invoice: number
// ) => {
//   addDoc(customerRef, {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     address: address,
//     invoice: invoice,
//   });
// };

// // // Delete customer
// export const deleteCustomer = (id: string) => {
//   const customerRef = doc(db, "customers", id);
//   deleteDoc(customerRef);
// };
