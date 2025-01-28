const enderecoArea = document.getElementById('endereco-area');
const closeBtnEndereco = document.getElementById('close-btn-endereco');
const searchButton = document.getElementById('search-button');

// Obtendo os botões e modais
const clienteButton = document.getElementById("cliente-button");
const clientemodal = document.getElementById("cliente-area");
const closeClientehmtlmodal = document.getElementById("close-btn-cliente");

const registerDogButton = document.getElementById("pet-button");
const modalDog  = document.getElementById("pet-area");
const closeDogmodal = document.getElementById("close-btn-pet");

const perfilDogButton = document.getElementById("pet-button-data");
const perfilDogmodal = document.getElementById("modalpets");
const closeDogPerfilmodal = document.getElementById("close-btn-pets");

/*MODAL DOS PERFIL DO PET */

perfilDogButton.addEventListener("click", () => {
    closeAllModals(); // Fecha os outros modais
    perfilDogmodal.style.display = "block"; // Abre o modal de perfil do cachorro
});

closeDogPerfilmodal.addEventListener("click", () => {
    perfilDogmodal.style.display = "none"; // Fecha o modal de perfil do cachorro
});


// Função para fechar o modal
closeDogPerfilmodal.addEventListener("click", () => {
    perfilDogmodal.style.display = "none";
});

// Função para fechar qualquer modal aberto
function closeAllModals() {
    clientemodal.style.display = "none";
    modalDog.style.display = "none";
     perfilDogmodal.style.display = "none";
}

// Modal para registro de cliente
clienteButton.addEventListener("click", () => {
    closeAllModals(); // Fecha os outros modais
    clientemodal.style.display = "block"; // Abre o modal de cliente
});

closeClientehmtlmodal.addEventListener("click", () => {
    clientemodal.style.display = "none"; // Fecha o modal de cliente
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


