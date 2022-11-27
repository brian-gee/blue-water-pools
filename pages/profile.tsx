import Head from "next/head";
import Image from "next/image";
import SignIn from "../components/signIn";
import MaterialTable from "../components/materialTable"
import { AuthContextProvider } from "../firebase/initAuth";

export default function Home() {
  const { user } = AuthContextProvider();

  return (
		<div className="">
			<Head>
				<title>Profile</title>
				<meta
					name="description"
					content="SK Cleaning, the pool service for you"
				/>
				<link rel="icon" href="../public/favicon.ico" />
			</Head>

			<main className="px-10 m-h-screen">
				<div className="flex justify-center">
				<Image
												className="h-8 w-8 rounded-full"
												src={user ? user.photoURL : ""}
												alt="users profile image"
												width={100}
												height={100}
											/>
					<div className="flex">{user?.displayName}</div>
					<div className="flex">{user?.email}</div>
				</div>
			</main>
		</div>
	);
}
