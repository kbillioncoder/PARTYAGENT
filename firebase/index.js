// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSbdtcCwbhDQYH90KA2tD1oleWq7mfoA4",
  authDomain: "partyagent-f09d1.firebaseapp.com",
  projectId: "partyagent-f09d1",
  storageBucket: "partyagent-f09d1.appspot.com",
  messagingSenderId: "817923232974",
  appId: "1:817923232974:web:b31f05f794744158e1ec9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const authentication = getAuth(app);
//export const db=getFirestore(app);