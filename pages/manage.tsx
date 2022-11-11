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

  const handleAdd = () => {
    addCustomer(firstName, lastName, email, address, invoice);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setInvoice(0);
    alert(firstName + " " + lastName + " has been created.");
  };

  const handleDelete = () => {
    deleteCustomer(id);
    setId("");
    alert("Customer with ID: " + id + " has been deleted.");
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center">
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
        </form>
        <div className="flex justify-center pt-10">
          <button onClick={handleAdd} className={tailwindStyles.btn}>
            Add User
          </button>
        </div>
      </div>

      <div className="px-10 flex justify-center">
        <form className="grid grid-flow-row-min grid-cols-2 content-center">
          {/* First Name */}
          <label className="mb-2" htmlFor="firstName">
            First Name:{" "}
            <input
              className="mb-2"
              type="text"
              name="firstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          {/* Last Name */}
          <label className="mb-2" htmlFor="lastName">
            Last Name:{" "}
            <input
              className="mb-2"
              type="text"
              name="lastName"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          {/* Email */}
          <label className="mb-2" htmlFor="email">
            Email:{" "}
            <input
              className="mb-2"
              type="text"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Address */}
          <label className="mb-2" htmlFor="address">
            Address:{" "}
            <input
              className="mb-2"
              type="text"
              name="address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          {/* Invoice */}
          <label className="mb-2" htmlFor="invoice">
            Invoice
            <input
              className="mb-2"
              type="number"
              name="invoice"
              required
              onChange={(e) => setInvoice(parseFloat(e.target.value))}
            />
          </label>
        </form>
      </div>
      <div className="flex justify-center pt-10">
        <button onClick={handleAdd} className={tailwindStyles.btn}>
          Add User
        </button>
      </div>
      <div className="px-10 pt-20 flex justify-center">
        <form>
          <label className="mb-2" htmlFor="id">
            ID:{" "}
            <input
              className="mb-2"
              type="text"
              name="id"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="px-10 flex justify-center">
        <button onClick={handleDelete} className={tailwindStyles.btn}>
          Delete User
        </button>
      </div>
    </div>
  );
}
