import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const navigate = useNavigate();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            console.log("Attempting login...");
            await signInWithEmailAndPassword(auth, data.email, data.password);
            alert("Login efetuado com sucesso");
            setLoading(false);
            navigate("/");
        } catch (error) {
            alert("Falha no Login, verifique suas credenciais e tente novamente.")

            let systemErrorMessage;
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Este usuário não está cadastrado";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Há erro com suas credenciais.";
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde";
            }

            console.error("Login failed:", systemErrorMessage);
            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        error,
        loading,
        logout,
        login
    };
};

export default useAuthentication;
