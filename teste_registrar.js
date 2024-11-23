const axios = require('axios');
const jwt = require('jsonwebtoken');

// Geração do token para autenticação
const token = jwt.sign({ username: 'adminUser' }, 'mysecretkey', { expiresIn: '1h' }); // Substitua o payload e a chave conforme necessário

async function registerUser() {
  const userData = {
    username: "novoUsuario", // Substitua pelos valores desejados
    email: "novoUsuario@example.com", // Substitua pelos valores desejados
    password: "senhaSegura123" // Substitua pelos valores desejados
  };

  try {
    const response = await axios.post(
      'http://localhost:3000/api/register',
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}` // Token JWT no cabeçalho
        }
      }
    );
    console.log('Usuário registrado com sucesso:', response.data);
  } catch (error) {
    if (error.response) {
      // Erro vindo do servidor
      console.error('Erro no registro:', error.response.data);
    } else {
      // Outros erros (ex.: de rede)
      console.error('Erro ao conectar ao servidor:', error.message);
    }
  }
}

registerUser();
