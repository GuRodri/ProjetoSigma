import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import apiCliente from '../services/apiCliente';

// Criando o contexto de autenticação
export const AuthContext = createContext();

// Hook personalizado para consumir o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provedor de contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setAuthPersistence = async () => {
      try {
        // Garantir persistência de autenticação
        await setPersistence(auth, browserLocalPersistence);
      } catch (err) {
        console.error('Erro ao configurar persistência de autenticação', err);
      }
    };

    setAuthPersistence(); // Chama antes de configurar o listener do auth

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        try {
          // Buscar dados do usuário do Firestore
          const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
          const userData = userDoc.data();

          let userRole = null;
          if (userData && userData.role !== undefined) {
            userRole = userData.role;
          }

          // Buscar idUsuario do banco de dados via API
          let idUsuario = null;
          try {
            const res = await apiCliente.get('/api/usuario');
            if (res.data && Array.isArray(res.data)) {
              const usuarioApi = res.data.find(u => u.email === user.email);
              if (usuarioApi) {
                idUsuario = usuarioApi.idUsuario;
              }
            }
          } catch (apiErr) {
            console.error('Erro ao buscar idUsuario na API:', apiErr);
          }

          setCurrentUser({ ...user, role: userRole, idUsuario });
        } catch (err) {
          console.error('Erro ao buscar dados do usuário:', err);
          setError('Erro ao buscar dados do usuário.');
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []); // Certifique-se de que a persistência seja configurada apenas uma vez

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      alert("Usuário deslogado com sucesso");
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
      setError('Erro ao fazer logout.');
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
