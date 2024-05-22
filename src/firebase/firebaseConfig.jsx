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

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtenha uma instância do Firestore
const db = getFirestore(app);

// Obtenha uma instância do Auth
const auth = getAuth(app);

// Defina o provedor do Google
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };

