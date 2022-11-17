import Head from "next/head";
import { useState, useEffect } from "react";
// import { addCustomer, deleteCustomer } from "../firebase/initFirebase";
import { tailwindStyles } from "../components/tailwindStyles";

export default function Manage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [invoice, setInvoice] = useState(0);
  var [id, setId] = useState("");

  // Add customer to firestore using form data then reset
  // const handleAdd = () => {
  //   addCustomer(firstName, lastName, email, address, invoice);
  // };

  // // Delete customer from firestore using form data then reset
  // const handleDelete = () => {
  //   deleteCustomer(id);
  // };

  return (
    <div className="h-screen">
      <Head>
        <title>SK Cleaning</title>
        <meta
          name="description"
          content="SK Cleaning, the pool service for you"
        />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        {/* Add Customer Form */}
        <form className="rounded-lg shadow-lg p-8 bg-blue-900">
          <h1 className="text-2xl flex justify-center pb-5">
            Add a new customer
          </h1>
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-5">
            <input
              type="address"
              className={tailwindStyles.formItem}
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="email"
              className={tailwindStyles.formItem}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="number"
              className={tailwindStyles.formItem}
              placeholder="Invoice"
              value={invoice}
              onChange={(e) => setInvoice(parseInt(e.target.value))}
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
        <form className="shadow-lg p-10 bg-blue-900">
          <h1 className="text-2xl flex justify-center pb-5">
            Delete a customer
          </h1>
          <div className="form-group mb-5">
            <input
              type="text"
              className={tailwindStyles.formItem}
              placeholder="ID"
              value={id}
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
