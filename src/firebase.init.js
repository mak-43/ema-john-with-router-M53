// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKxSYL2Qp4VYapUmxCr4LWCY9BhjwOdo",
  authDomain: "ema-john-simple-59-1.firebaseapp.com",
  projectId: "ema-john-simple-59-1",
  storageBucket: "ema-john-simple-59-1.appspot.com",
  messagingSenderId: "374873340574",
  appId: "1:374873340574:web:d6fc42de91500c30d9998f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth