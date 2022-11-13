import { AuthContextProvider } from "../firebase/initAuth";
import { tailwindStyles } from "./tailwindStyles";

export default function SignIn() {
  const { signInWithGoogle } = AuthContextProvider();

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
