//Define a URL base da API como 'http://localhost:3000/api'
const API_URL = 'http://localhost:3000/api';

//Função para registrar um novo usuário (ID é o CPF)
export async function regisCliente(id, nome, email, senha) {
    try {
        // Exibe no console os dados que estão sendo enviados ao servidor para registro.
        console.log('Enviando dados para registro:', { id, nome, email, senha });
        // Envia uma requisição POST para a API no endpoint '/auth/clientes' com os dados do novo usuário.
        const response = await fetch(`${API_URL}/auth/registrarCliente`, {
            method: 'POST', // Define o método HTTP como POST para enviar dados.
            headers: {
                'Content-Type': 'application/json' // Define o cabeçalho, informando que o corpo da requisição será em formato JSON.
            },
            body: JSON.stringify({ id, nome, email, senha }) // Converte os dados do registro em uma string JSON e os envia no corpo da requisição.
        });
        // Verifica se o código de resposta HTTP está fora da faixa de 200-299 (indicando uma falha na requisição).
        if (!response.ok) {
            throw new Error('Falha na requisição. Código de status: ' + response.status); // Lança um erro com o código de status da resposta.
        }
        // Recebe a resposta do servidor como JSON.
        const result = await response.json();
        console.log('Resposta do servidor para registro:', result); // Exibe a resposta do servidor no console.
        // Retorna um objeto indicando que o registro foi bem-sucedido, juntamente com a resposta do servidor.
        return { success: true, message: result };
    } catch (error) {
        // Captura qualquer erro ocorrido durante o processo de requisição e exibe no console.
        console.error('Erro ao registrar:', error.message);
        // Retorna um objeto indicando que o registro falhou, incluindo a mensagem de erro.
        return { success: false, message: error.message };
    }
}

export async function registerdogwalker(id, nome, email, senha) {
    try {
        // Exibe no console os dados que estão sendo enviados ao servidor para registro.
        console.log('Enviando dados para registro:', { id, nome, email, senha });
        // Envia uma requisição POST para a API no endpoint '/auth/dogwalker' com os dados do novo dog walker.
        const response = await fetch(`${API_URL}/auth/dogwalker`, {
            method: 'POST', // Define o método HTTP como POST para enviar dados.
            headers: {
                'Content-Type': 'application/json' // Define o cabeçalho, informando que o corpo da requisição será em formato JSON.
            },
            body: JSON.stringify({ id, nome, email, senha }) // Converte os dados do registro em uma string JSON e os envia no corpo da requisição.
        });
        // Verifica se o código de resposta HTTP está fora da faixa de 200-299 (indicando uma falha na requisição).
        if (!response.ok) {
            throw new Error('Falha na requisição. Código de status: ' + response.status); // Lança um erro com o código de status da resposta.
        }
        // Recebe a resposta do servidor como JSON.
        const result = await response.json();
        console.log('Resposta do servidor para registro:', result); // Exibe a resposta do servidor no console.
        // Retorna um objeto indicando que o registro foi bem-sucedido, juntamente com a resposta do servidor.
        return { success: true, message: result };
    } catch (error) {
        // Captura qualquer erro ocorrido durante o processo de requisição e exibe no console.
        console.error('Erro ao registrar:', error.message);
        // Retorna um objeto indicando que o registro falhou, incluindo a mensagem de erro.
        return { success: false, message: error.message };
    }
}

// Função para fazer o login
export async function loginCliente(email, senha) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
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