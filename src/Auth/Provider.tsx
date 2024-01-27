import { createContext, useEffect, useState } from "react";
import {
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

import Swal from "sweetalert2";
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
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
const googleProvider = new GoogleAuthProvider();

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

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name: string, photo: string) => {
    console.log(name, photo);
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
      console.log("Current user", userEmail, user);
      const userInfo = {
        name: user?.displayName,
        Email: user?.email,
        photo: user?.photoURL,
        createTime: user?.metadata?.creationTime,
        LastSignInTime: user?.metadata?.lastSignInTime,
      };
      if (userEmail || loggedUser) {
        AxiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("urser added to the database");

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
      setLoading(false);
      if (user || userEmail) {
        AxiosPublic.post("/jwt", loggedUser).then((res) => {
          console.log("token response", res.data);
        });
      } else {
        AxiosPublic.post("/logout", loggedUser, {
          withCredentials: true,
        }).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    updateUserProfile,
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  } as AuthContextProps;
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
