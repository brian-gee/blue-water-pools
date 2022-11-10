import Head from "next/head";
import SignIn from "../components/signIn";
// import Table from "../components/table";
import { tailwindStyles } from "../components/tailwindStyles";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "../components/googleAuth";

import { useCollectionData } from "react-firebase-hooks/firestore";

// DB
import { db, app, customerRef, addCustomer } from "../firebase/init";
import { getDocs } from "firebase/firestore";

export default function Home() {
  const { user } = AuthContextProvider();

  return (
    <div className="">
      <Head>
        <title>SK Cleaning</title>
        <meta
          name="description"
          content="SK Cleaning, the pool service for you"
        />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className="px-10 h-screen">
        <div className="p-10">{user ? <Table /> : <SignIn />}</div>
      </main>
    </div>
  );
}

// This is where I'll put all the user data
function Table() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await getDocs(customerRef);
      setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCustomers();
  }, []);

  return (
    <>
      <div className={tailwindStyles.table}>
        <table className="min-w-full">
          <thead className="bg-gray-700">
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
            {customers.map((customer) => {
              return (
                <tr className="p-3 bg-gray-500">
                  <th key={customer.id}>{customer.id}</th>
                  <th>{customer.firstName}</th>
                  <th>{customer.lastName}</th>
                  <th>{customer.email}</th>
                  <th>{customer.address}</th>
                  <th>{customer.invoice}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
