// import{ registrarCliente} from '../apicontroller.js';
import {regisCliente,regisDogwalker, logCliente, logDogwalker, logoutUser} from './apicontroller.js';

const btnLogin = document.querySelector('#ent-login-but');
const btnRegisClient = document.querySelector('#ent-but-res');
const btnRegisWalk = document.querySelector('#ent-but-wal');
const dropdown = document.querySelector("dropdown");

  document.getElementById('form-login').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senLogin').value;
    if (!email || !senha) {
        alert('Preencha todos os campos');
        return;
    }
  
    // Chama a função logCliente para fazer o login do cliente
    const clienteResult = await logCliente(email, senha);
    if (clienteResult.token) {
      console.log('Token de cliente recebido do servidor', clienteResult.token);
      localStorage.setItem('token', clienteResult.token);
      window.location.href = 'cliente.html'; // Exemplo de redirecionamento
      return;
    }
  
    // Caso o login do cliente falhe, tenta o login do dogwalker
    const dogwalkerResult = await logDogwalker(email, senha);
    if (dogwalkerResult.token) {
      console.log('Token de dogwalker recebido do servidor', dogwalkerResult.token);
      localStorage.setItem('token', dogwalkerResult.token);
      window.location.href = 'dogwalker.html'; // Exemplo de redirecionamento
    } else {
      alert('Credenciais inválidas para cliente ou dogwalker.');
    }
  });
  
  // // Função para login de cliente
  // async function logCliente(email, senha) {
  //   try {
  //     const response = await fetch('/api/auth/loginCliente', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, senha })
  //     });
  
  //     const result = await response.json();
  //     if (result.token) {
  //       return result; // Retorna o token se sucesso
  //     } else {
  //       return { token: null }; // Retorna null se erro
  //     }
  //   } catch (error) {
  //     console.error('Erro ao fazer login do cliente:', error);
  //     return { token: null }; // Retorna null em caso de erro
  //   }
  // };
  
// NOSSO CODIGO WILL GAY
document.getElementById('form-login').addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senLogin').value;
  if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
  }

  // Chama a função logCliente para fazer o login
  const result = await logCliente(email, senha);
  if (result.token) {
    console.log('Token recebido do servidor', result.token);
    localStorage.setItem('token', result.token);
  }
});




document.getElementById('form-regis').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nomeClient = document.getElementById('nomeC').value;
    const emailClient = document.getElementById('emailC').value;
    const cpfClient = document.getElementById('cpfC').value;
    const senhaClient = document.getElementById('senClient').value;
  
    if (!nomeClient || !cpfClient || !emailClient || !senhaClient) {
      alert('Preencha todos os campos');
      return;
    }

    const result = await regisCliente(nomeClient, cpfClient, emailClient, senhaClient);
    if (result.success) {
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
    const email = document.getElementById('emailDGWK').value;
    const senha = document.getElementById('senDGWK').value;
    const cpf = document.getElementById('cpfDGWK').value;

    if (!nome || !email || !senha || !cpf) {
        alert('Preencha todos os campos');
        return;
    }

    const result = await regisDogwalker(nome, email, senha, cpf);
    if (result.success) {
        alert('Usuário registrado com sucesso');
        document.getElementById('form-walk').reset();
        window.location.href = 'index.html';  // Redireciona após o registro
    } else {
        alert('Erro ao registrar usuário: ' + result.message);
    }
});


