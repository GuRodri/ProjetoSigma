/*import axios from 'axios';

const isProduction = window.location.protocol === 'https:';  // Verifica se o ambiente está usando HTTPS
const baseURL = isProduction ? 'https://sigma.portalmantec.com.br/' :  'http://www.portalmantec.com.br/sigma/';

const apiCliente = axios.create({
  baseURL: baseURL,
});

export default apiCliente;*/
import axios from 'axios';

// Base URL da API do backend
const apiCliente = axios.create({
  baseURL: 'https://sigma.portalmantec.com.br/',
  timeout: 30000
});

export default apiCliente;


