
interface FirebaseProps {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig: FirebaseProps = {
  apiKey: import.meta.env.Vite_APIKEY,
  authDomain: import.meta.env.Vite_AUTHDOMAIN,
  projectId: import.meta.env.Vite_PROJECTID,
  storageBucket: import.meta.env.Vite_STORAGEBUCKET,
  messagingSenderId: import.meta.env.Vite_MESSAGINGSENDERID,
  appId: import.meta.env.Vite_APPID,

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }
export const messaging = getMessaging(app);