// constantes para modais
const menuButton = document.getElementById("menu-button");
const dropdown = document.getElementById("dropdown");

const walkerButton = document.getElementById("walker-button");
const registerwalker = document.getElementById("walker-area");
const closeBtnWalker = document.getElementById("close-btn-walker");

const registerButton = document.getElementById("cliente-button");
const registercliente = document.getElementById("cliente-area");
const closeBtnRegister = document.getElementById("close-btn-register");

const loginButton = document.getElementById("login-button");
const loginArea = document.getElementById("login-area");
const closeBtnLogin = document.getElementById("close-btn-login");
function closeOnOpen(){
loginArea.style.display = "none";
registercliente.style.display = "none";
registerwalker.style.display = "none";
}

// Abrir modal de Login
loginButton.addEventListener("click", () => {
closeOnOpen();
    loginArea.style.display = "block";
});

// Registro Clientes
registerButton.addEventListener("click", () => {
closeOnOpen();
    registercliente.style.display = "block";
});
// Registro DogWalker
walkerButton.addEventListener('click', () => {
closeOnOpen();
registerwalker.style.display = "block";
});

// Fechar modal de Login
closeBtnLogin.addEventListener("click", () => {
    loginArea.style.display = "none";
});

// // Fechar modal de Registro
closeBtnRegister.addEventListener("click", () => {
    registercliente.style.display = "none";
});

// Fechar modal de DogWalker
closeBtnWalker .addEventListener ('click', () => {
    registerwalker.style.display = "none";
});

// Fechar as modais ao clicar fora delas
window.addEventListener("click", (event) => {
    if (event.target === loginArea) {
        loginArea.style.display = "none";
    }
    if (event.target === registercliente) {
        registercliente.style.display = "none";
    }
    if (event.target === registerwalker) {
        registerwalker.style.display = "none";
    }
});

//fim dos modais