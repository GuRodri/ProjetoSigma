import { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async ({ email, password, nome, sobrenome, genero, dataNascimento, telefone, cpf, role }) => {
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
        cpf,
        role
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
