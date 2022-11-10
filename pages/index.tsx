import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { db, addCustomer } from "../components/firestore";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "customers");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>SK Cleaning</title>
        <meta
          name="description"
          content="SK Cleaning, the pool service for you"
        />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {users.map((customer) => {
            return (
              <div>
                {" "}
                <h1>Name: {customer.firstName}</h1>
                <h1>Name: {customer.lastName}</h1>
                <br></br>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
