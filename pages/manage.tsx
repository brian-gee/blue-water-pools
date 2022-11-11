import { addCustomer } from "../firebase/init";
import { tailwindStyles } from "../components/tailwindStyles";

// function addCustomerForm() {
//   const addCustomerForm = document.querySelector(".add");
//   addCustomerForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     firstName: addCustomerForm.firstName.value,

//     addCustomer(firstName, lastName, email, address, invoice)
//     }
//   });
// }

export default function Admin() {
  return (
    <div className="h-screen">
      <div className="px-10 flex justify-center">
        <form className="add grid grid-flow-row-min grid-cols-2">
          {/* First Name */}
          <label className="mb-2" htmlFor="firstName">
            First Name:{" "}
            <input className="mb-2" type="text" name="firstName" required />
          </label>

          {/* Last Name */}
          <label className="mb-2" htmlFor="lastName">
            Last Name:{" "}
            <input className="mb-2" type="text" name="firstName" required />
          </label>

          {/* Email */}
          <label className="mb-2" htmlFor="email">
            Email:{" "}
            <input className="mb-2" type="text" name="firstName" required />
          </label>

          {/* Address */}
          <label className="mb-2" htmlFor="address">
            Address:{" "}
            <input className="mb-2" type="text" name="address" required />
          </label>

          {/* Invoice */}
          <label className="mb-2" htmlFor="title">
            Invoice
            <input className="mb-2" type="number" name="invoice" required />
          </label>
        </form>
      </div>
      <div className="flex justify-center pt-10">
        <button className={tailwindStyles.btn}>Submit</button>
      </div>
    </div>
  );
}
