import axios from 'axios';

const apiCliente = axios.create({
  baseURL: 'https://localhost:7059/',
  // outras configurações, como headers, etc.
});

export default apiCliente;
