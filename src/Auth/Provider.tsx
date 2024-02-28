import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Components/Firbase/Firebase.config";
import useAxiosPublic from "../Hook/useAxiosPublic";

import toast from "react-hot-toast";
export interface AuthContextProps {
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  user: User | null;
  loading: boolean;
  createUser: (
    email: string,
    password: string
  ) => Promise<UserCredential | null>;
  signInUser: (
    email: string,
    password: string | number
  ) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  SignInWithFacebook: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
const googleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const AxiosPublic = useAxiosPublic();

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const SignInWithFacebook = () => {
    setLoading(true);
    signInWithPopup(auth, FacebookProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name: string, photo: string) => {
   
    return updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      const userEmail = user?.email || user?.email;
      const loggedUser = { email: userEmail };
     
      const userInfo = {
        name: user?.displayName,
        role: "user",
        Email: user?.email,
        photo: user?.photoURL,
        createTime: user?.metadata?.creationTime,
        LastSignInTime: user?.metadata?.lastSignInTime,
      };
     

      if (userEmail || loggedUser.email) {
        AxiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
          
            toast.success("Login Successfully");
          }
        });
      }
      setLoading(false);
      if (user || userEmail) {
        AxiosPublic.post("/jwt", loggedUser).then(() => {
          
        });
      } else {
        AxiosPublic.post("/logout", loggedUser, {
          withCredentials: true,
        }).then(() => {
      
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [AxiosPublic]);

  const authInfo = {
    updateUserProfile,
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    SignInWithFacebook,
  } as AuthContextProps;
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
