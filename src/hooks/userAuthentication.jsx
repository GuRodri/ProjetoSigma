import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const login = async (data) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Tentando fazer login...");
      // Configurando persistência de autenticação
      await setPersistence(auth, browserLocalPersistence);
      
      // Realiza o login
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login efetuado com sucesso");
      setLoading(false);
      navigate("/"); // Redireciona para a página principal
    } catch (error) {
      let systemErrorMessage;
      if (error.code === "auth/user-not-found") {
        systemErrorMessage = "Este usuário não está cadastrado.";
      } else if (error.code === "auth/wrong-password") {
        systemErrorMessage = "Credenciais incorretas.";
      } else {
        systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde.";
      }

      console.error("Falha no login:", systemErrorMessage);
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Usuário deslogado com sucesso.");
  };

  return {
    error,
    loading,
    logout,
    login
  };
};

export default useAuthentication;
