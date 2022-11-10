import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/init";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  getAuth,
} from "firebase/auth";

export const AuthContextProvider = () => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  return { user, signInWithGoogle, logOut };
};
