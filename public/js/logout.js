

function logoutUser() {

        // Remove o token do localStorage
        localStorage.removeItem('token');
        console.log('Usuário deslogado.');
        window.location.href = 'index.html'; // Redireciona para a página de login
  
};
