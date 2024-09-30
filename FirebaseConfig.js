// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbWmDmny1AOT6_hvpQFHnxsG5cU5p-qMo",
  authDomain: "uptodo-2cabb.firebaseapp.com",
  projectId: "uptodo-2cabb",
  storageBucket: "uptodo-2cabb.appspot.com",
  messagingSenderId: "399376410648",
  appId: "1:399376410648:web:d713a206c5b875fa45fb6d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirestoreDB = getFirestore(FirebaseApp);
