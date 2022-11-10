import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { tailwindStyles } from "../components/tailwindStyles";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// DB
import { db, app, customerRef, addCustomer } from "../firebase/init";
import {
  collection,
  getDocs,
  query,
  orderBy,
  endAt,
  onSnapshot,
  doc,
} from "firebase/firestore";

// Auth
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="">
      {/* Header */}
      <Head>
        <title>SK Cleaning</title>
        <meta
          name="description"
          content="SK Cleaning, the pool service for you"
        />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      {/* Body */}
      <main className="px-10 h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">SK Cleaning</h1>
          <ul className="flex items-center">
            <li>
              <SignOut />
            </li>
          </ul>
        </nav>

        <div className="p-10">{user ? <Table /> : <SignIn />}</div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center p-10 text-xl">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Brian Geertsma
        </a>
      </footer>
    </div>
  );
}

// Sign in user using google account
function SignIn() {
  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <>
      <div className="pb-20 flex justify-center">
        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl ">
          Welcome to Sk Cleaning
        </h1>
      </div>
      <div className="flex justify-center">
        <button className={tailwindStyles.btn} onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </>
  );
}

// Sign out of user's google account
function SignOut() {
  return (
    auth.currentUser && (
      <button className="hover:text-blue-300" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
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
