/*import { GoogleAuthProvider } from 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Usuário autenticado com o Google:', result.user);
    return result.user;
  } catch (error) {
    console.error('Erro ao autenticar com o Google:', error.message);
    throw error;
  }
};

export const userAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  async function createUser(data) {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.error(error.message);

      let systemErrorMessage;

      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres';
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'E-mail já cadastrado';
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente mais tarde';
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  }

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      console.error(error.message);

      let systemErrorMessage;

      if (error.code === 'auth/invalid-login-credentials') {
        systemErrorMessage = 'Este usuário não está cadastrado';
      } else if (error.code === 'auth/wrong-password') {
        systemErrorMessage = 'Há erro com suas credenciais.';
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente mais tarde';
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
*/
import { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig.jsx';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async ({ email, password, nome, sobrenome, genero, dataNascimento, telefone, cpf }) => {
    setLoading(true);
    setError(null);
    try {
      // Registra o usuário no Firebase
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Envia os dados do usuário para o backend
      const response = await axios.post('http://https://localhost:7059//api/usuarios', {
        email,
        nome,
        sobrenome,
        senha: password,
        genero,
        dataNascimento,
        telefone,
        cpf
      });

      setLoading(false);
      return user; // Retorna o usuário registrado (opcional)
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
