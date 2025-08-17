import React from "react";

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
    },
    icon: {
        fontSize: "6rem",
        color: "#6366f1",
        marginBottom: "1rem",
        animation: "bounce 1.5s infinite",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: "0.5rem",
        textAlign: "center",
    },
    subtitle: {
        fontSize: "1.25rem",
        color: "#475569",
        marginBottom: "2rem",
        textAlign: "center",
    },
    info: {
        fontSize: "1rem",
        color: "#64748b",
        textAlign: "center",
    },
    "@keyframes bounce": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
    },
};

function EmConstrucao() {
    return (
        <div style={styles.container}>
            <span style={styles.icon} role="img" aria-label="Construção">
                🚧
            </span>
            <h1 style={styles.title}>Página em Construção</h1>
            <p style={styles.subtitle}>
                Estamos trabalhando para trazer novidades.<br />
                Por favor, volte em breve!
            </p>
            <p style={styles.info}>
                Se precisar de ajuda, entre em contato com o suporte.
            </p>
            <style>
                {`
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                `}
            </style>
        </div>
    );
}

export default EmConstrucao;