import{ regisCliente, login, expiredToken } from '../integracao.js';

const btnLogin = document.querySelector('#ent-login-but');
const btnRegisClient = document.querySelector('#ent-but-res');
const btnRegisWalk = document.querySelector('#ent-but-wal');

const dropdown = document.querySelector(".dropdown");
const URL = 'http://localhost:3000/api'

document.querySelector('#form-regis').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('cpfC').value;
    const nome = document.getElementById('nomeC').value;
    const email = document.getElementById('emailC').value;
    const senha = document.getElementById('senC').value;

    if( !id || !nome|| !email || !senha ) {
        alert('Preencha todos os campos');
        return;
    }
    const result = await registrarCliente ( id,nome, email, senha);  // Alterado aqui
    if(result.success) {
        alert('Usuário registrado com sucesso');
        document.getElementsByClassName('form-regis').reset();
        window.location.href = 'index.html';
    } else {
        alert('Erro ao registrar usuário');
    }
});



document.querySelector('#form-login').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const result = await login(email, senha);

    if (result.token) {
        console.log('Token recebido do servidor', result.token);
        localStorage.setItem('token', result.token);
        // Busca usuário
        const userResult = await buscaruser(result.token);
        if (userResult.user) {
            const user = userResult.user;
            // Redireciona com base no user
            if (user === 'cliente') {
                window.location.href = 'cliente.html';
            } else if (user === 'dogwalker') {
                window.location.href = 'dogwalker.html';
        } else {
            alert(userResult.message || 'Erro ao obter user do usuário.');
        }
    } else {
        alert(result.message || 'Login falhou! Verifique suas credenciais.');
    }
}});
