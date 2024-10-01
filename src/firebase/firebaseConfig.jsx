// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Importe a função getStorage

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCCcNPDe7ooa0V_6KbYS1qIXnDtSH8LHDU",
  authDomain: "projeto-frontsigma2024.firebaseapp.com",
  projectId: "projeto-frontsigma2024",
  storageBucket: "projeto-frontsigma2024.appspot.com",
  messagingSenderId: "478126317979",
  appId: "1:478126317979:web:a1658f50cb78b61418813e",
  measurementId: "G-R6LL9WBGMR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Inicialize o storage

const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, analytics, storage }; // Exporte o storage
