import { tailwindStyles } from "../components/tailwindStyles";
import { useEffect, useState } from "react";
// import CustomerTable from "../components/customerTable";
import { getDocs } from "firebase/firestore";
import { customerRef } from "../firebase/initFirestore";

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const getCustomers = async () => {
      const data = await getDocs(customerRef);
      setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCustomers();
  }, []);

  return (
    <>
      {/* <CustomerTable /> */}
      <div className={tailwindStyles.table}>
        <table className="min-w-full">
          <thead className="bg-blue-700">
            <tr>
              <th className="p-3">ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Address</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, i) => {
              return (
                <tr key={i} className="p-3 bg-gray-500">
                  <td>{customer.id}</td>
                  <td>{customer.first_name}</td>
                  <td>{customer.last_name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{dollarUS.format(customer.invoice)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
