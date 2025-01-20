//Define a URL base da API como 'http://localhost:3000/api'

const API_URL = 'http://localhost:3000/api';

export async function logCliente(email, senha) {
    try {
        console.log({ email, senha });
        const response = await fetch('http://localhost:3000/api/auth/loginCliente', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const result = await response.json();
        console.log('Resposta do servidor:',result)
        if (result.token) {
            return result;
        } else {
            alert(result.message || 'Erro ao fazer login.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { success: false, message: 'Erro ao conectar ao servidor.' };
    }
};

//Função para registrar um novo usuário (ID é o CPF)
export async function regisCliente(nome, cpf, email, senha) {
    try {
      console.log('Enviando dados para registro:', { nome, cpf, email, senha });
      const response = await fetch(`${API_URL}/apiauth/registrarCliente`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, email, senha }),
      });
  
      if (!response.ok) {
        throw new Error('Falha na requisição. Código de status: ' + response.status);
      }
  
      const result = await response.json();
      console.log('Resposta do servidor para registro:', result);
      return result;
    } catch (error) {
      console.error('Erro ao registrar:', error.message);
      return { success: false, message: error.message };
    }
  }

// Função para fazer o login
// Função assíncrona para fazer o login
// apicontroller.js

// export async function logCliente(email, senha) {
//     try {
//         console.log({ email, senha });
//         const response = await fetch(`${API_URL}/api/auth/loginCliente`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, senha })
//         });

//         const result = await response.json();
//         console.error('Erro ao fazer login:', error);
//         if (response.ok && result.token) {
//             return result;
//         } else {
//             alert(result.message || 'Erro ao fazer login.');
//             return { success: false };
//         }
//     } catch (error) {
        
//         return { success: false, message: 'Erro ao conectar ao servidor.' };
//     }
// }





export async function regisDogwalker(nome, usuario, email, senha, cpf, telefone) {
    try {
        console.log('Enviando dados para registro:', { nome, usuario, email, senha, cpf, telefone });

        // Envio da requisição para o backend
        const response = await fetch(`${API_URL}/auth/registrarWalker`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, usuario, email, senha, cpf, telefone })
        });

        if (!response.ok) {
            throw new Error('Falha na requisição. Código de status: ' + response.status);
        }

        const result = await response.json();
        console.log('Resposta do servidor para registro:', result);
        return result;  // Retorna a resposta ao frontend
    } catch (error) {
        console.error('Erro ao registrar:', error.message);
        return { success: false, message: error.message };
    }
};


// Função para fazer o login
export async function logDogwalker(email, senha) {
    try {
        const response = await fetch(`${API_URL}/auth/loginWalker`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });
        const result = await response.json();
        console.log('Resposta do servidor:', result);  // Verifique o conteúdo da resposta
        if (result.token) {
            return result;
        } else {
            alert(result.message || 'Erro ao fazer login.');
        }
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { success: false, message: 'Erro ao conectar ao servidor.' };
    }
};

export async function logout() {
    try {
        // Obtém o token de autenticação do localStorage
        const token = localStorage.getItem('token');
        // Se o token existir, envie a requisição de logout
        if (token) {
            const response = await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Envia o token para o servidor
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin', // Mantém a sessão entre o frontend e o backend
            });
            // Verifica se a resposta é válida
            if (!response.ok) {
                throw new Error(`Falha no logout: ${response.statusText}`);
            }
            const data = await response.json();
            // Verifica se o logout foi bem-sucedido
            if (data.message === 'Logout bem-sucedido') {
                // Remove o token do localStorage
                localStorage.removeItem('token');
                console.log('Usuário deslogado.');
                window.location.href = 'login.html'; // Redireciona para a página de login após logout
            } else {
                throw new Error('Falha no logout');
            }
        } else {
            console.error('Token não encontrado');
            alert('Token não encontrado. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao deslogar:', error);
        alert('Houve um erro ao tentar deslogar. Tente novamente.');
    }
};