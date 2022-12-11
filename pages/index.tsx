import Head from "next/head";
import SignIn from "../components/signIn";
import MaterialTable from "../components/materialTable"
import CustomerGrid from "../components/customerGrid"
import { AuthContextProvider } from "../firebase/initAuth";

export default function Home() {
  const { user } = AuthContextProvider();

  return (
    <div className="">
      <Head>
        <title>Blue Water Pools</title>
        <meta
          name="description"
          content="The pool service for you"
        />
        <link rel="icon" href="../public/favicon.svg" />
      </Head>

      <main className="px-10">
        <div className="p-10">{user ? <CustomerGrid/> : <SignIn />}</div>
        {/* <div className="p-10">{user ? <MaterialTable/> : <SignIn />}</div> */}
      </main>
    </div>
  );
}
