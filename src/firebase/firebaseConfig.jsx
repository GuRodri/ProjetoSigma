import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Usando as variáveis de ambiente do Vite
/*const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};*/

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
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, analytics, storage };
