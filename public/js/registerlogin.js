// import{ registrarCliente} from '../apicontroller.js';
import {regisCliente,regisDogwalker, logCliente} from './apicontroller.js';

const btnLogin = document.querySelector('#ent-login-but');
const btnRegisClient = document.querySelector('#ent-but-res');
const btnRegisWalk = document.querySelector('#ent-but-wal');

const dropdown = document.querySelector("dropdown");


document.getElementById('form-regis').addEventListener('submit', async (event) => {

    const nomeClient = document.getElementById('nomeC').value;
    const emailClient = document.getElementById('emailC').value;
    const cpfClient = document.getElementById('cpfC').value;
    const senhaClient = document.getElementById('senClient').value;

    if( !nomeClient ||!cpfClient ||!emailClient || !senhaClient ) {
        alert('Preencha todos os campos');
        return;
    }
    const result = await regisCliente (nomeClient, cpf, emailClient, senhaClient);  
    if(result.success) {
        alert('Usuário registrado com sucesso');
        document.getElementById('form-regis').reset();
        window.location.href = 'index.html';
    } else {
        alert('Erro ao registrar usuário');
    }
});

document.getElementById('form-walk').addEventListener('submit', async (event) => {
    event.preventDefault();  // Impede o envio padrão do formulário

    const nome = document.getElementById('nomeDGWK').value;
    const usuario = document.getElementById('usuarioDGWK').value; 
    const email = document.getElementById('emailDGWK').value;
    const senha = document.getElementById('senDGWK').value;
    const cpf = document.getElementById('cpfDGWK').value;
    const telefone = document.getElementById('tellDGWK').value;

    if (!nome || !usuario || !email || !senha || !cpf || !telefone) {
        alert('Preencha todos os campos');
        return;
    }

    const result = await regisDogwalker(nome, usuario, email, senha, cpf, telefone); 
    if (result.success) {
        alert('Usuário registrado com sucesso');
        document.getElementById('form-walk').reset();
        window.location.href = 'dogwalker.html';  // Redireciona após o registro
    } else {
        alert('Erro ao registrar usuário: ' + result.message);
    }
});



document.getElementById('form-login').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senLogin').value;

    if (!email || !senha) {
        alert('Preencha todos os campos');
        return;
    }

    const result = await logCliente(email, senha); // Chama a função logCliente

    // Verifica se o login foi bem-sucedido
    if (result.success) {
        alert('Login realizado com sucesso');
        localStorage.setItem('token', result.token);  // Armazena o token no localStorage
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        alert('Erro ao fazer login: ' + (result.message || 'Verifique suas credenciais.'));
    }
});
