const enderecoArea = document.getElementById('endereco-area');
const closeBtnEndereco = document.getElementById('close-btn-endereco');
const searchButton = document.getElementById('search-button');

// Obtendo os botões e modais
const clienteButton = document.getElementById("cliente-button");
const clientehtmlmodal = document.getElementById("modal-cliente");
const closeClientehmtlmodal = document.getElementById("close-cliente-button");

const registerDogButton = document.getElementById("pet-button");
const modalDog  = document.getElementById("modal-pet");
const closeDogmodal = document.getElementById("close-btn-pet");

const perfilDogButton = document.getElementById("DogPerfil");
const perfilDogmodal = document.getElementById("perfilCachorro");
const closeDogPerfilmodal = document.getElementById("closePerfilCachorro");

// Função para fechar qualquer modal aberto
function closeAllModals() {
    clientehtmlmodal.style.display = "none";
     modalDog.style.display = "none";
     //perfilDogmodal.style.display = "none";
}

// Modal para registro de cliente
clienteButton.addEventListener("click", () => {
    closeAllModals(); // Fecha os outros modais
    clientehtmlmodal.style.display = "block"; // Abre o modal de cliente
});

closeClientehmtlmodal.addEventListener("click", () => {
    clientehtmlmodal.style.display = "none"; // Fecha o modal de cliente
});

// Modal para registro de cachorro
registerDogButton.addEventListener("click", () => {
    closeAllModals(); // Fecha os outros modais
    modalDog.style.display = "block"; // Abre o modal de cachorro
});

closeDogmodal.addEventListener("click", () => {
    modalDog.style.display = "none"; // Fecha o modal de cachorro
});

// Modal para o perfil do cachorro
// perfilDogButton.addEventListener("click", () => {
//     closeAllModals(); // Fecha os outros modais
//     perfilDogmodal.style.display = "block"; // Abre o modal de perfil do cachorro
// });

// closeDogPerfilmodal.addEventListener("click", () => {
//     perfilDogmodal.style.display = "none"; // Fecha o modal de perfil do cachorro
// });

