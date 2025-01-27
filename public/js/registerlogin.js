// import{ registrarCliente} from '../apicontroller.js';
import {regisCliente,regisDogwalker, logCliente, logDogwalker } from './apicontroller.js';

document.getElementById('form-login').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senLogin').value;
  if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
  }

  // Tenta o login do cliente
  let clienteResult = await logCliente(email, senha);
  if (clienteResult.token) {
      console.log('Token de cliente recebido do servidor', clienteResult.token);
      localStorage.setItem('token', clienteResult.token);
      window.location.href = 'cliente.html'; // Redireciona para a página do cliente
      return;
  } else if (clienteResult.error) {
      console.error('Erro no login do cliente:', clienteResult.error);
      alert(`Erro ao tentar login como cliente: ${clienteResult.error}`);
  }

  // Caso o login do cliente falhe, tenta o login do dogwalker
  let dogwalkerResult = await logDogwalker(email, senha);
  if (dogwalkerResult.token) {
      console.log('Token de dogwalker recebido do servidor', dogwalkerResult.token);
      localStorage.setItem('token', dogwalkerResult.token);
      window.location.href = 'dogwalker.html'; // Redireciona para a página do dogwalker
  } else if (dogwalkerResult.error) {
      console.error('Erro no login do dogwalker:', dogwalkerResult.error);
      alert(`Erro ao tentar login como dogwalker: ${dogwalkerResult.error}`);
  } else {
      alert('Credenciais inválidas para dogwalker.');
  }
});

// Evento de submissão do formulário de registro de cliente
document.getElementById('form-regis').addEventListener('submit', async (event) => {
  event.preventDefault();
  const nomeClient = document.getElementById('nomeC').value;
  const cpfClient = document.getElementById('cpfC').value;
  const emailClient = document.getElementById('emailC').value;
  const senhaClient = document.getElementById('senClient').value;

  // Verificação se todos os campos foram preenchidos
  if (!nomeClient || !cpfClient || !emailClient || !senhaClient) {
      alert('Preencha todos os campos');
      return;
  }

  const result = await regisCliente(nomeClient, cpfClient, emailClient, senhaClient);
  // Verificando sucesso ou falha
  if (result.success) {
      alert('Usuário registrado com sucesso');
      document.getElementById('form-regis').reset();
      window.location.href = 'index.html'; // Redirecionamento após sucesso
  } else {
      console.error('Erro ao registrar:', result.message); // Exibe o erro no console
      alert(result.message || 'Erro ao registrar usuário');  // Exibe mensagem do erro
  }
});

// Evento de submissão do formulário de registro de dog walker
document.getElementById('form-walk').addEventListener('submit', async (event) => {
  event.preventDefault();  // Impede o envio padrão do formulário

  const nomeWalker = document.getElementById('nomeDGWK').value;
  const emailWalker = document.getElementById('emailDGWK').value;
  const senhaWalker = document.getElementById('senDGWK').value;
  const cpfWalker = document.getElementById('cpfDGWK').value;

  // Verifica se todos os campos foram preenchidos
  if (!nomeWalker || !emailWalker || !senhaWalker || !cpfWalker) {
      alert('Preencha todos os campos');
      return;
  }

  // Chama a função para registrar o dog walker
  const result = await regisDogwalker(nomeWalker, emailWalker, senhaWalker, cpfWalker);
  
  // Verificando sucesso ou falha no registro
  if (result.success) {
    alert('Usuário registrado com sucesso');
    document.getElementById('form-walk').reset();
    window.location.href = 'index.html'; // Redirecionamento após sucesso
} else {
    console.error('Erro ao registrar:', result.message); // Exibe o erro no console
    alert(result.message || 'Erro ao registrar usuário');  // Exibe mensagem do erro
}
});