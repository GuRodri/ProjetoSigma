import { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import apiCliente from '../services/apiCliente';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async ({ email, password, nome, sobrenome, genero, dataNascimento, telefone, cpf, role }) => {
    setLoading(true);
    setError(null);
    try {
      // Registra o usuário no Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      const user = userCredential.user;

      // Formata a data para ISO 8601
      const formattedDate = new Date(dataNascimento).toISOString();
      const currentDate = new Date().toISOString();

      // Envia os dados do usuário para o backend
      await apiCliente.post('/api/usuario', { 
        email,
        nome,
        sobrenome,
        cpf,
        senha: password,
        genero,
        dataNascimento: formattedDate,
        telefone,
        role,
        ativo: true,
        data: currentDate
      });

      setLoading(false);
      alert('Usuário cadastrado com sucesso!');
      return user; // Retorna o usuário registrado (opcional)
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error);
      setError(error);
      setLoading(false);
      alert(error.message);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
