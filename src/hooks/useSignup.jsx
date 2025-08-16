import { useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
      console.log('Usuário criado:', user);

      // Adiciona o usuário ao Firestore com o campo role
      await setDoc(doc(db, "usuarios", user.uid), {
        email,
        nome,
        sobrenome,
        genero,
        dataNascimento,
        telefone,
        cpf,
        role,
        ativo: true,
        data: new Date().toISOString()
      });


      // Formata a data de nascimento para o formato aceito pela API (ISO 8601 ou yyyy-MM-dd)
      let formattedDate = dataNascimento;
      if (dataNascimento && dataNascimento.length <= 10) {
        // Se vier como yyyy-MM-dd, já está ok
        formattedDate = dataNascimento;
      } else if (dataNascimento) {
        // Tenta converter para ISO
        formattedDate = new Date(dataNascimento).toISOString().substring(0, 10);
      }
      const currentDate = new Date().toISOString();

      // Envia os dados do usuário para o backend
      try {
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
      } catch (apiErr) {
        console.error('Erro ao cadastrar usuário na API:', apiErr);
        setError(apiErr);
        setLoading(false);
        alert('Erro ao cadastrar usuário na API. Verifique os dados e tente novamente.');
        return;
      }

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
