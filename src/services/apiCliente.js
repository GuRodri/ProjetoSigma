import axios from 'axios';

const apiCliente = axios.create({
  baseURL: 'https://localhost:7059/',
});

export default apiCliente;
