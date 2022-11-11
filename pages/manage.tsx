import { useState, useEffect } from "react";
import { addCustomer, deleteCustomer } from "../firebase/init";
import { tailwindStyles } from "../components/tailwindStyles";

export default function Manage() {
  const [firstName, setFirstName] = useState("empty");
  const [lastName, setLastName] = useState("empty");
  const [email, setEmail] = useState("empty");
  const [address, setAddress] = useState("empty");
  const [invoice, setInvoice] = useState(0);
  let [id, setId] = useState("");

  const handleAdd = () => {
    addCustomer(firstName, lastName, email, address, invoice);
  };

  const handleDelete = () => {
    deleteCustomer(id);
    setId("");
    alert("User with ID: " + id + " has been deleted.");
  };

  return (
    <div className="h-screen">
      <div className="flex p-6 rounded-lg shadow-lg max-w-md justify-center">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
              text-gray-700
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
              text-gray-700
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
            text-gray-700
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
            text-gray-700
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="
            w-full
            px-6
            py-2.5
          bg-blue-600
          text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
          >
            Sign up
          </button>
        </form>
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
