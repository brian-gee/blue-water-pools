import { useState, useEffect } from "react";
import { addCustomer, deleteCustomer } from "../firebase/init";
import { tailwindStyles } from "../components/tailwindStyles";

export default function Manage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [invoice, setInvoice] = useState(0);
  let [id, setId] = useState("");

  // Add customer to firestore using form data then reset
  const handleAdd = () => {
    addCustomer(firstName, lastName, email, address, invoice);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setInvoice(0);
    alert(firstName + " " + lastName + " has been created.");
  };

  // Delete customer from firestore using form data then reset
  const handleDelete = () => {
    deleteCustomer(id);
    setId("");
    alert("Customer with ID: " + id + " has been deleted.");
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        {/* Add Customer Form */}
        <form className="rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-5">
              <input
                type="text"
                className={tailwindStyles.formItem}
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mb-5">
              <input
                type="text"
                className={tailwindStyles.formItem}
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-5">
            <input
              type="address"
              className={tailwindStyles.formItem}
              placeholder="Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="email"
              className={tailwindStyles.formItem}
              placeholder="Email"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="number"
              className={tailwindStyles.formItem}
              placeholder="Invoice"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="">
            <button onClick={handleAdd} className={tailwindStyles.btn}>
              Create customer
            </button>
          </div>
        </form>
      </div>

      {/* Delete customer form */}
      <div className="pt-10 flex justify-center">
        <form className="shadow-lg p-10">
          <div className="form-group mb-5">
            <input
              type="text"
              className={tailwindStyles.formItem}
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="">
            <button onClick={handleDelete} className={tailwindStyles.btn}>
              Delete customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
