//Define a URL base da API como 'http://localhost:3000/api'

const API_URL = 'http://localhost:3000/api';




// Função para login de dogwalker
export async function logDogwalker(email, senha) {
  try {
    const response = await fetch('/api/auth/loginWalker', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });
    
    const result = await response.json();
    if (result.token) {
      localStorage.setItem('token', result.token); // Armazenar o token no localStorage
      return result; // Retorna o token se sucesso
    } else {
      return { token: null }; // Retorna null se erro
    }
  } catch (error) {
    console.error('Erro ao fazer login, confira suas credenciais:', error);
    return { token: null }; // Retorna null em caso de erro
  }
};
export async function logCliente(email, senha) {
  try {
    const response = await fetch('/api/auth/loginCliente', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const result = await response.json();
    if (result.token) {
      localStorage.setItem('token', result.token); // Armazenar o token no localStorage
      return result; // Retorna o token se sucesso
    } else {
      return { token: null }; // Retorna null se erro
    }
  } catch (error) {
    console.error('Erro ao fazer login, confira suas credenciais:', error);
    return { token: null }; // Retorna null em caso de erro
  }
};


//Função para registrar um novo usuário (ID é o CPF)
export async function regisCliente(nome, cpf, email, senha) {
  try {
      console.log('Enviando dados para registro:', { nome, cpf, email, senha });

      const response = await fetch('/api/auth/registrarcliente', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome, cpf, email, senha })
      });

      // Verificar se a resposta é um erro
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Falha na requisição. Código de status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Resposta do servidor para registro:', result);
      return result;  // Retorna a resposta ao frontend
  } catch (error) {
      console.error('Erro ao registrar:', error.message);
      return { success: false, message: error.message };
  }
};


  export async function regisDogwalker(nome, email, senha, cpf) {
    try {
      console.log('Enviando dados para registro:', { nome, email, senha, cpf });

      const response = await fetch('/api/auth/registrarWalker', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome, email, senha, cpf })
      });

      // Verificar se a resposta é um erro
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Falha na requisição. Código de status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Resposta do servidor para registro:', result);
      return result;  // Retorna a resposta ao frontend
  } catch (error) {
      console.error('Erro ao registrar:', error.message);
      return { success: false, message: error.message };
  }
};


// Função para enviar os dados do pet para a API
export async function cadastrarPet(petData, token) {
  const response = await fetch('/api/pets/registrarPets', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Envia o token como um cabeçalho de autorização
      },
      body: JSON.stringify(petData)
  });
  
  const data = await response.json();
  return data;
}