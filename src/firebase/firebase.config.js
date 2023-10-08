// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTnfNsrYYz8LCCxKYhzGc2OJP1zGuAuV8",
  authDomain: "medi-center-79624.firebaseapp.com",
  projectId: "medi-center-79624",
  storageBucket: "medi-center-79624.appspot.com",
  messagingSenderId: "103036656453",
  appId: "1:103036656453:web:feff8b5ea44a2a383bbc2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;