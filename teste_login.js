const axios = require('axios');

const login = async () => {
  const url = 'http://localhost:3000/api/login';
  const data = {
    username: "novoUsuario", // Substitua pelos valores desejados
    email: "novoUsuario@example.com", // Substitua pelos valores desejados
    password: "senhaSegura123" // Substitua pelos valores desejados
  };

  try {
    const response = await axios.post(url, data);
    console.log('Login bem-sucedido:', response.data); // Mostra o token JWT
  } catch (error) {
    console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
  }
};

login();
