

function logoutUser() {
    try {
        // Remove o token do localStorage
        localStorage.removeItem('token');
        console.log('Usuário deslogado.');
        window.location.href = 'index.html'; // Redireciona para a página de login
    } catch (error) {
        console.error('Erro ao deslogar:', error);
        alert('Houve um erro ao tentar deslogar. Tente novamente.');
    }
};
