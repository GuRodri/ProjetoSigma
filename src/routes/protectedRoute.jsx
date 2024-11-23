import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/autContexto1';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { currentUser, loading } = useAuth();

  // Se ainda está carregando, não renderize nada para evitar redirecionamentos errados
  if (loading) {
    return null;  // Ou um carregando spinner, se preferir
  }

  if (!currentUser) {
    console.log('User not logged in, redirecting to login');
    return <Navigate to="/login" />;
  }

  console.log('User logged in:', currentUser.email, 'Role:', currentUser.role);

  if (requiredRole !== undefined && currentUser.role !== requiredRole) {
    console.log('User does not have required role, redirecting to unauthorized');
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;
