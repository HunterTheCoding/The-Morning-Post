// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtBJyyKE3Jq6DJGMLnSxvNRNRVBpWIBjE",
  authDomain: "blood-donation-1a2c5.firebaseapp.com",
  projectId: "blood-donation-1a2c5",
  storageBucket: "blood-donation-1a2c5.appspot.com",
  messagingSenderId: "121199033066",
  appId: "1:121199033066:web:ef7fa7d79b6a441198f593"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  {auth}