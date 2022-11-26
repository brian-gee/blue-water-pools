import { app } from "./initAuth";
import { getDatabase, ref, child, get, set, remove} from "firebase/database";

export const db = getDatabase();
export const dbRef = ref(db, 'customers');

// Add customer
export const addCustomer = (
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  invoice: number,
  id: number
) => {
  const newId = id - 1
  set(ref(db, `/customers/${newId}`), {
    first_name: firstName,
    last_name: lastName,
    email: email,
    address: address,
    invoice: invoice,
    id: id,
  });
};

// // Delete customer
export const deleteCustomer = (customer: { id: number; }) => {
  const id = customer.id - 1
  remove(ref(db, `/customers/${id}`))
};
