import Link from "next/link";
import { AuthContextProvider } from "./googleAuth";

export default function Nav() {
  const { user, logOut } = AuthContextProvider();
  return (
    <nav className="p-10 mb-12 flex justify-between">
      <Link href="/">
        <h1 className="text-xl">SK Cleaning</h1>
      </Link>
      <ul className="flex items-center ">
        <Link href="/">
          <li className="pr-4">Home</li>
        </Link>
        <Link href="/admin">
          <li className="pr-4">{user ? "Add Customer" : ""}</li>
        </Link>
        <li className="pr-4">{user ? user.displayName : ""}</li>
        <li>
          <button onClick={logOut}>{user ? "Sign Out" : ""}</button>
        </li>
      </ul>
    </nav>
  );
}
