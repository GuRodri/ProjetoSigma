// Importe as funções necessárias dos SDKs do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth"; // Importe o provedor do Google e a função getAuth

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB12legd6-aXS2xFtHHqRAY3aqdoFOy2IQ",
  authDomain: "projeto-frontsigma.firebaseapp.com",
  projectId: "projeto-frontsigma",
  storageBucket: "projeto-frontsigma.appspot.com",
  messagingSenderId: "870701498948",
  appId: "1:870701498948:web:545ebcaa9ce6e75a997211",
  measurementId: "G-JJWHJZ87NC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, analytics };

