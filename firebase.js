// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKRnxybMJLvQu-HJaWaO4gKnZUuuitPI",
  authDomain: "stab-dd679.firebaseapp.com",
  projectId: "stab-dd679",
  storageBucket: "stab-dd679.appspot.com",
  messagingSenderId: "707007083591",
  appId: "1:707007083591:web:6512403ca7cf8c03786d62",
  measurementId: "G-WD7T69MFL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
