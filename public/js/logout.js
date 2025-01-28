

function logoutUser(){

    const closeDogPerfilmodal = document.getElementById("close-btn-pets");
    closeDogPerfilmodal.addEventListener("click", () => {
        perfilDogmodal.style.display = "none"; // Fecha o modal
    });

        // Remove o token do localStorage
        localStorage.removeItem('token');
        console.log('Usuário deslogado.');
        window.location.href = 'index.html'; // Redireciona para a página de login

    };


// function logoutUser() {
//     // Remove o token do localStorage
//     localStorage.removeItem('token');
//     console.log('Usuário deslogado.');
    
//     // Chama a função para remover os dados do pet
//     removerDadosDoLocalStorage(); 
    
//     // Redireciona para a página de login
//     window.location.href = 'index.html'; // Redireciona para a página de login
// }

// // Função para remover os dados do pet do localStorage
// function removerDadosDoLocalStorage() {
//     // Remover dados do pet
//     localStorage.removeItem("nomePet");
//     localStorage.removeItem("raçaPet");
//     localStorage.removeItem("pesoPet");
//     localStorage.removeItem("idadePet");
//     localStorage.removeItem("cpfDono");
    
//     // Atualiza o modal para refletir que não há mais dados
//     preencherDadosDoModal();
// }

// // O código de logout permanece o mesmo
// document.getElementById('logout-btn').addEventListener('click', (event) => {
//     logoutUser(); // Chama a função de logout
//     alert('Logout feito com sucesso!');
// });
