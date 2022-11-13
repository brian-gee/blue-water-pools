import Head from "next/head";
import SignIn from "../components/signIn";
import CustomerTable from "../components/customerTable";
import { AuthContextProvider } from "../firebase/initAuth";

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
        <div className="p-10">{user ? <CustomerTable /> : <SignIn />}</div>
      </main>
    </div>
  );
}
