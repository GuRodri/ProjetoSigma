/*import { useState } from 'react';
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

export default useSignup;*/
import { useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig'; // Assumindo que você já exportou `db` do seu firebaseConfig
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Importações do Firestore
import apiCliente from '../services/apiCliente';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async ({ email, password, nome, sobrenome, genero, dataNascimento, telefone, cpf, role }) => {
    setLoading(true);
    setError(null);
    try {
      // Registra o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user);

      // Adiciona o usuário ao Firestore com o campo role
      await setDoc(doc(db, "usuarios", user.uid), {
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        genero: genero,
        dataNascimento: dataNascimento,
        telefone: telefone,
        cpf: cpf,
        role: role,
        ativo: true,
        data: new Date().toISOString()
      });

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

