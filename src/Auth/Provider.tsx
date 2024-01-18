
import { createContext, useEffect, useState } from "react";

import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import { auth } from '../Components/Firbase/Firebase.config.js';  

interface AuthInfo {
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  user: Auth['currentUser'];
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
}
export const AuthContext = createContext<AuthInfo | null>(null);

const googleProvider = new GoogleAuthProvider();

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const AxiosPublic = useAxiosPublic();
  const [user, setUser] = useState<Auth['currentUser'] | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (): Promise<UserCredential> => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = (): Promise<void> => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name: string, photo: string): Promise<void> => {
    console.log(name, photo);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (User) => {
      setUser(User);
      console.log('Current user', User);
      setLoading(false);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo: AuthInfo = {
    updateUserProfile,
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;