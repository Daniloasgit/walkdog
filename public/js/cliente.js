import {logoutUser} from './apicontroller.js';

//LOGOUT

// window.onload = () => {
//     validarToken();
//  };
 
//  function validarToken() {
//      const token = localStorage.getItem('token');
//      if (!token) {
//          alert('Sessão expirada ou não autenticada. Redirecionando para login.');
//          window.location.href = '/loginCliente'; // Redireciona para o login
//      } else {
//          // Aqui você pode adicionar a lógica para verificar se o token está expirado
//          console.log('Token válido!');
//      }
//  }
 

 document.getElementById('btnLogout').addEventListener('click', async (event) => {
    try {
        await logoutUser(); // Chama a função de logout
        alert('Logout feito com sucesso!');
    } catch (error) {
        console.error('Erro no logout:', error);
        alert('Houve um erro ao tentar deslogar. Tente novamente.');
    }
  });