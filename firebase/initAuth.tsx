import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATA_BASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

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
