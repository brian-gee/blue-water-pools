import Head from "next/head";
import SignIn from "../components/signIn";
import MaterialTable from "../components/materialTable"
import EzGrid from "../components/ezGrid"
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
        <link rel="icon" href="../public/favicon.svg" />
      </Head>

      <main className="px-10 m-h-screen">
        <div className="p-10">{user ? <EzGrid/> : <SignIn />}</div>
        <div className="p-10">{user ? <MaterialTable/> : ''}</div>
      </main>
    </div>
  );
}
