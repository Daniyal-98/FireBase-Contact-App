// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKy33JoVx5_44bbmeAG_2Rvf_xPC9NoWU",
  authDomain: "vite-contact-e00ae.firebaseapp.com",
  projectId: "vite-contact-e00ae",
  storageBucket: "vite-contact-e00ae.appspot.com",
  messagingSenderId: "453919204120",
  appId: "1:453919204120:web:7aa5a96c19acf6d71d746d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);