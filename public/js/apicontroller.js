//Define a URL base da API como 'http://localhost:3000/api'

const API_URL = 'http://localhost:3000/api';

// export async function logCliente(email, senha) {
//     try {
//         console.log({ email, senha });
//         const response = await fetch('/api/auth/loginCliente', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, senha })
//         });

//         const result = await response.json();
//         console.log('Resposta do servidor:',result)
//         if (result.token) {
//             return result;
//         } else {
//             alert(result.message || 'Erro ao fazer login.');
//         }
//     } catch (error) {
//         console.error('Erro ao fazer login:', error);
//         return { success: false, message: 'Erro ao conectar ao servidor.' };
//     }
// };

// // Função para fazer o login
// export async function logDogwalker(email, senha) {
//     try {
//         console.log({ email, senha });
//         const response = await fetch('/api/auth/loginWalker', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, senha })
//         });

//         const result = await response.json();
//         console.log('Resposta do servidor:',result)
//         if (result.token) {
//             return result;
//         } else {
//             alert(result.message || 'Erro ao fazer login.');
//         }
//     } catch (error) {
//         console.error('Erro ao fazer login:', error);
//         return { success: false, message: 'Erro ao conectar ao servidor.' };
//     }
// };


  export async function logCliente(email, senha) {
    try {
      const response = await fetch('/api/auth/loginCliente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });
  
      const result = await response.json();
      if (result.token) {
        return result; // Retorna o token se sucesso
      } else {
        return { token: null }; // Retorna null se erro
      }
    } catch (error) {
      console.error('Erro ao fazer login do cliente:', error);
      return { token: null }; // Retorna null em caso de erro
    }
  }
  
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
        return result; // Retorna o token se sucesso
      } else {
        return { token: null }; // Retorna null se erro
      }
    } catch (error) {
      console.error('Erro ao fazer login do dogwalker:', error);
      return { token: null }; // Retorna null em caso de erro
    }
  }

//Função para registrar um novo usuário (ID é o CPF)
export async function regisCliente(nome, cpf, email, senha) {
    try {
      console.log('Enviando dados para registro:', { nome, cpf, email, senha });
      const response = await fetch('/api/auth/registrarcliente', {
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

  export async function regisDogwalker(nome, email, senha, cpf) {
    try {
        console.log('Enviando dados para registro:', { nome, email, senha, cpf });

        const response = await fetch('/api/auth/registrarWalker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha, cpf })
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

// export async function logout() {
//     try {
//         // Obtém o token de autenticação do localStorage
//         const token = localStorage.getItem('token');
//         // Se o token existir, envie a requisição de logout
//         if (token) {
//             const response = await fetch(`${API_URL}/auth/logout`, {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': `Bearer ${token}`, // Envia o token para o servidor
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'same-origin', // Mantém a sessão entre o frontend e o backend
//             });
//             // Verifica se a resposta é válida
//             if (!response.ok) {
//                 throw new Error(`Falha no logout: ${response.statusText}`);
//             }
//             const data = await response.json();
//             // Verifica se o logout foi bem-sucedido
//             if (data.message === 'Logout bem-sucedido') {
//                 // Remove o token do localStorage
//                 localStorage.removeItem('token');
//                 console.log('Usuário deslogado.');
//                 window.location.href = 'index.html'; // Redireciona para a página de login após logout
//             } else {
//                 throw new Error('Falha no logout');
//             }
//         } else {
//             console.error('Token não encontrado');
//             alert('Token não encontrado. Tente novamente.');
//         }
//     } catch (error) {
//         console.error('Erro ao deslogar:', error);
//         alert('Houve um erro ao tentar deslogar. Tente novamente.');
//     }
// };
export function monitorarTokenExpiracao() {
    const token = localStorage.getItem('token');
    try {
        // Decodifica o token JWT sem verificá-lo (somente client-side decoding)
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const payload = JSON.parse(atob(base64));
        // Verifica se o token possui uma propriedade de expiração
        if (!payload.exp) {
            console.error('Token inválido: não contém a data de expiração.');
            alert('Sua sessão expirou. Por favor, faça login novamente.');
            logoutUser();
            return;
        }
        // Verifica a expiração do token
        const expirationTime = payload.exp * 1000; // Converter para milissegundos
        const currentTime = Date.now();
        const timeUntilExpiration = expirationTime - currentTime;
        const timeBeforeExpiration = timeUntilExpiration - 60000; // 1 minuto antes da expiração
        if (timeUntilExpiration > 0) {
            console.log('Token válido. Tempo restante:', timeUntilExpiration / 1000, 'segundos');
            if (timeBeforeExpiration > 0) {
                // Chama a função 1 minuto antes da expiração
                setTimeout(() => {
                    console.log('Token expirando em breve. Por favor, faça login novamente.');
                    alert('Sua sessão está prestes a expirar. Por favor, faça login novamente.');
                    logoutUser();
                }, timeBeforeExpiration);
            }
        } else {
            console.error('Token expirado.');
            alert('Sua sessão expirou. Por favor, faça login novamente.');
            logoutUser();
            return;
        }
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        alert('Erro ao verificar a sessão. Faça login novamente.');
        logoutUser();
        return;
    } finally {
        // Agendar a próxima verificação após 1 minuto
        setTimeout(monitorarTokenExpiracao, 2 * 60 * 1000);
    }
}
// Função para fazer o login
export async function login(email, senha) {
    try {
        const response = await fetch(`${API_URL}/authen/login`, {
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
}
// Função para deslogar o usuário
export async function logoutUser() {
    try {
        // Obtém o token de autenticação do localStorage
        const token = localStorage.getItem('token');
        // Se o token existir, envie a requisição de logout
        if (token) {
            const response = await fetch(`/api/auth/logout`, {
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
                window.location.href = 'index.html'; // Redireciona para a página de login após logout
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
}