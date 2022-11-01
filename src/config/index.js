// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1mDPZbbukQJx89QX_2_KAXPCT8U3xk40",
  authDomain: "insta-search-752bb.firebaseapp.com",
  projectId: "insta-search-752bb",
  storageBucket: "insta-search-752bb.appspot.com",
  messagingSenderId: "254800090678",
  appId: "1:254800090678:web:84c2b4713382c5580b2a97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = GoogleAuthProvider()
export {auth, provider, signInWithRedirect};
export default app;