import axios from 'axios';

const isProduction = window.location.protocol === 'https:';  // Verifica se o ambiente está usando HTTPS
const baseURL = isProduction ? 'https://www.portalmantec.com.br:5002' :  'http://www.portalmantec.com.br:5001';

const apiCliente = axios.create({
  baseURL: baseURL,
});

export default apiCliente;
