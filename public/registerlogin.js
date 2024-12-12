// Define a URL base da API como 'http://localhost:3000/api'.
const API_URL = 'http://localhost:3000/api';

// Função assíncrona para fazer login do usuário.

// Recebe o 'email' e 'password' como parâmetros.
async function login(usuario,email, password) {
    try {
        // Exibe no console os dados de login que serão enviados ao servidor.
        console.log('Enviando dados para login:', {usuario, email, password });
        
        // Envia uma requisição POST à API na rota '/auth/login'.
        // A requisição inclui um cabeçalho para indicar que o conteúdo é JSON e envia o 'email' e 'password' no corpo da requisição.
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST', // Define o método HTTP como POST.
            headers: {
                'Content-Type': 'application/json' // Informa que o corpo da requisição está no formato JSON.
            },
            body: JSON.stringify({ usuario,email, password }) // Converte os dados de login para o formato JSON e envia no corpo da requisição.
        });

        // Aguarda e converte a resposta do servidor para JSON.
        const result = await response.json();
        
        // Exibe no console a resposta recebida do servidor.
        console.log('Resposta do servidor para login:', result);
        
        // Retorna o resultado da requisição.
        return result;
    } catch (error) {
        // Captura qualquer erro que ocorra durante a requisição e exibe no console.
        console.error('Erro ao fazer login:', error);
        
        // Retorna um objeto com 'success: false' indicando que o login falhou.
        return { success: false };
    }
}


// Função para registrar um novo usuário
async function register(name,usuario, email, password) {
    try {
        // Exibe no console os dados que estão sendo enviados ao servidor para registro.
        console.log('Enviando dados para registro:', { name,usuario, email, password});

        // Envia uma requisição POST para a API no endpoint '/auth/register' com os dados do novo usuário.
        const response = await fetch(`${API_URL}/rotas/clientes`, {
            method: 'POST', // Define o método HTTP como POST para enviar dados.
            headers: {
                'Content-Type': 'application/json' // Define o cabeçalho, informando que o corpo da requisição será em formato JSON.
            },
            body: JSON.stringify({ name, usuario, email, password}) // Converte os dados do registro em uma string JSON e os envia no corpo da requisição.
        });

        // Verifica se o código de resposta HTTP está fora da faixa de 200-299 (indicando uma falha na requisição).
        if (!response.ok) {
            throw new Error('Falha na requisição. Código de status: ' + response.status); // Lança um erro com o código de status da resposta.
        }

        // Recebe a resposta do servidor como texto, uma vez que a resposta pode não estar em formato JSON.
        const result = await response.text();
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


//------------------------------------ Operações CRUD ---------------------------------------


// Função para obter (Read - Ler) todas as transações


async function getTransactions() {

    //Enviar uma requisição GET para a rota 'transactions' da API para obter todas as transações

    const response = await fetch(`${API_URL}/transactions`,{

        method: 'GET', // Define o método HTTP como GET, que solicita dados do servidor sem enviar informações no corpo.

        headers:{
            //Inclui o tokem JWT no cabeçãlho Authorization para autenticar a requisição, necessário para acessar rotas protegidas
            
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Obtém o tokem do localStorage e envia em formato Bearer Token.
        }
    });

    //Converte a resposta do servidor para JSON e retorna para ser usada na aplicação.

    return response.json(); //Retorna o objeto JSON da resposta

}


//Função para Adicionar (CREATE - CRIAR) uma nova transação

async function addTransaction(transaction) {
    try {
        //Envia uma requisição POST para a rota '/transactions' da API, com o objetivo de criar uma nova transação.
        const response =await fetch(`${API_URL}/transactions`, {
            method: 'POST', // Define o método HTTP como POST, usado para enviar dados ao servidor.
            headers:{
                // Define o tipo de conteúdo da requisição como JSON.
                'Content-Type': 'application/json', 
                // Inclui o token JWT no cabeçalho Authorization para autenticar a requisição.                
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            //Transforma o objeto transction em uma strig JSON e envia no corpo da requisição.
            body: JSON.stringify(transaction) 
        });

        // Retornar um objeto indicando sucesso se a resposta for ok ( status 200-299), ou falha se nao for ok.
        return response.ok ? {success: true} : {success: false};
    } catch (error) {
        //Captura e exibe um erro caso ocorra uma falha durante a requisição.
        console.error('Erro ao adicionar transação:', error);
        //Retornar um objeto indicando falha no caso de erro.
        return{success: false};
    }
}