// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from "../firebase/firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB12legd6-aXS2xFtHHqRAY3aqdoFOy2IQ",
  authDomain: "projeto-frontsigma.firebaseapp.com",
  projectId: "projeto-frontsigma",
  storageBucket: "projeto-frontsigma.appspot.com",
  messagingSenderId: "870701498948",
  appId: "1:870701498948:web:545ebcaa9ce6e75a997211",
  measurementId: "G-JJWHJZ87NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
