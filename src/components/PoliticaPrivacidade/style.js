import styled from "styled-components";

export const ContainerPoliticaPrivacidade = styled.div `
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h2 {
  color: #007bff;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

h3 {
  color: #007bff;
  font-size: 24px;
  margin-top: 20px;
}

p, ul {
  color: #667;
  font-size: 16px;
  margin-bottom: 15px;
}

ul {
  margin-left: 20px;
}

strong {
  font-weight: bold;
}

/* Estilos para links */
a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Estilos para botões ou elementos interativos */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

/* Estilos para cabeçalho de seções */
.section-header {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px 4px 0 0;
}

/* Estilos para rodapé */
.footer {
  background-color: #f0f0f0;
  color: #666;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  border-radius: 0 0 8px 8px;
}

/* Estilos para citações ou destaques */
blockquote {
  background-color: #f7f7f7;
  border-left: 5px solid #007bff;
  padding: 10px;
  margin: 10px 0;
}

/* Estilos específicos para lista de itens */
ul {
  list-style: disc;
}

/* Estilos para imagens */
img {
  max-width: 100%;
  height: auto;
}

/* Responsividade */
@media (max-width: 768px) {
  .privacy-policy {
    padding: 15px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 20px;
  }
}
`;

