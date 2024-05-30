import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

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
            console.log("Login successful");
            setLoading(false);
        } catch (error) {
            console.error(error.message);

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
