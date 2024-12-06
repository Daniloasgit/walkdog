// Selecionar os elementos
const menuButton = document.getElementById("menu-button");
const dropdown = document.getElementById("dropdown");
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const loginArea = document.getElementById("login-area");
const registerArea = document.getElementById("register-area");
const closeBtnLogin = document.getElementById("close-btn-login");
const closeBtnRegister = document.getElementById("close-btn-register");

// Abrir modal de Login
loginButton.addEventListener("click", () => {
    loginArea.style.display = "block";
});

// Abrir modal de Registro
registerButton.addEventListener("click", () => {
    registerArea.style.display = "block";
});

// Fechar a modal de Login
closeBtnLogin.addEventListener("click", () => {
    loginArea.style.display = "none";
});

// Fechar a modal de Registro
closeBtnRegister.addEventListener("click", () => {
    registerArea.style.display = "none";
});

// Fechar as modais ao clicar fora delas
window.addEventListener("click", (event) => {
    if (event.target === loginArea) {
        loginArea.style.display = "none";
    }
    if (event.target === registerArea) {
        registerArea.style.display = "none";
    }
});
