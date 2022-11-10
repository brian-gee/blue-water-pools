import Link from "next/link";

export default function Nav() {
  return (
    <nav className="p-10 mb-12 flex justify-between">
      <h1 className="text-xl">SK Cleaning</h1>
      <ul className="flex items-center ">
        <Link href="/admin">
          {/* <li className="pr-4">{user ? "Add Customer" : ""}</li> */}
        </Link>
        {/* <li className="pr-4">{user ? user.displayName : ""}</li> */}
        <li>{/* <SignOut /> */}</li>
      </ul>
    </nav>
  );
}
