import axios from 'axios';

const apiCliente = axios.create({
  baseURL: 'https://localhost:7059/api/usuario',
  // outras configurações, como headers, etc.
});

export default apiCliente;
