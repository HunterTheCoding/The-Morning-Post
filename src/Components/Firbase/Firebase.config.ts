
interface FirebaseProps {
  apiKey: string;
authDomain : string;
projectId : string;
storageBucket: string;
messagingSenderId: string;
appId : string;
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig : FirebaseProps= {
  apiKey: "AIzaSyBxtWXY_xT1g7877KsTRePWXM5tMJ20Xi4",
  authDomain: "the-morning-post.firebaseapp.com",
  projectId: "the-morning-post",
  storageBucket: "the-morning-post.appspot.com",
  messagingSenderId: "1066398034849",
  appId: "1:1066398034849:web:ecd3de8d582feeb0e979e0"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  {auth}
export const messaging = getMessaging(app);