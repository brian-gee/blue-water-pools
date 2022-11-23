import { app } from "./initAuth";
import { getDatabase, ref, child, get, remove} from "firebase/database";

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

// // Delete customer
export const deleteCustomer = (customer: { id: number; }) => {
  const id = customer.id - 1
  remove(ref(db, `/customers/${id}`))
};
