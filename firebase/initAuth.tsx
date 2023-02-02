import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA68sgrZe1-sZqq_RIowVtQp2LWa-W3AJQ',
  authDomain: 'skclean-b04f2.firebaseapp.com',
  databaseURL: 'https://skclean-b04f2-default-rtdb.firebaseio.com',
  projectId: 'skclean-b04f2',
  storageBucket: 'skclean-b04f2.appspot.com',
  messagingSenderId: '887863824911',
  appId: '1:887863824911:web:7370c8f69cc26ecb5f497a',
  measurementId: 'G-X6NKTHZCBS',
};

export const app = initializeApp(firebaseConfig);

export const AuthContextProvider = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const handleSignIn = () => {
    user ? logOut : logOut;
  };

  return { user, signInWithGoogle, logOut, handleSignIn };
};
