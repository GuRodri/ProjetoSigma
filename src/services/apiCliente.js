import axios from 'axios';

const isProduction = window.location.protocol === 'https:';  // Verifica se o ambiente está usando HTTPS
const baseURL = isProduction ? 'https://localhost:5182/' : 'http://localhost:5182/';

const apiCliente = axios.create({
  baseURL: baseURL,
});

export default apiCliente;
