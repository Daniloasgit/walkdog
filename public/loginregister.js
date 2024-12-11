// começo das modais 

const loginButton = document.getElementById('login-button');
const registerClienteButton = document.getElementById('register-cliente');
const registerDogwalkerButton = document.getElementById('register-dogwalker');

const loginModal = document.getElementById('login-modal');
const registerClienteModal = document.getElementById('register-area-cliente');
const registerDogwalkerModal = document.getElementById('walker-modal');

const closeButtonLogin = document.getElementById('close-btn-login');
const closeButtonRegisterCliente = document.getElementById('close-btn-register');
const closeButtonRegisterDogwalker = document.getElementById('close-btn-walker');

// Função para fechar modais abertos
function fecharModaisAbertos() {
  loginModal.style.display = 'none';
  registerClienteModal.style.display = 'none';
  registerDogwalkerModal.style.display = 'none';
}

// Funções para abrir modais
function abrirModalLogin() {
  fecharModaisAbertos();
  loginModal.style.display = 'block';
}

function abrirModalRegistroCliente() {
  fecharModaisAbertos();
  registerClienteModal.style.display = 'block';
}

function abrirModalRegistroDogwalker() {
  fecharModaisAbertos();
  registerDogwalkerModal.style.display = 'block';
}

// Funções para fechar modais
function fecharModalLogin() {
  loginModal.style.display = 'none';
}

function fecharModalRegistroCliente() {
  registerClienteModal.style.display = 'none';
}

function fecharModalRegistroDogwalker() {
  registerDogwalkerModal.style.display = 'none';
}

// Adicionar eventos
loginButton.addEventListener('click', abrirModalLogin);
registerClienteButton.addEventListener('click', abrirModalRegistroCliente);
registerDogwalkerButton.addEventListener('click', abrirModalRegistroDogwalker);

closeButtonLogin.addEventListener('click', fecharModalLogin);
closeButtonRegisterCliente.addEventListener('click', fecharModalRegistroCliente);
closeButtonRegisterDogwalker.addEventListener('click', fecharModalRegistroDogwalker);

// Fechar modais ao clicar fora
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    fecharModalLogin();
  }
  if (event.target === registerClienteModal) {
    fecharModalRegistroCliente();
  }
  if (event.target === registerDogwalkerModal) {
    fecharModalRegistroDogwalker();
  }
});

// fim da função dos modais

//funções de enviar input para o banco de dados

// document.querySelector ('#form-login').addEventListener('submit', async (Event) =>{
//   Event.preventDefault();  // Impede o comportamento padrão de envio do formulário para o servidor.

//   const name = document.getElementById('nome').value;
//   const user = document.getElementById('usuario').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('senha').value;
//   const cpf = document.getElementById('cpf').value;
//   const phone = document.getElementById('telefone').value;
  
//   const resultClient = await register(name,user,email,password,cpf,phone);
//   if(resultClient.success) {
//     alert('Registrado com sucesso,faça login para continuar!')

//     document.getElementById('form-login').reset();
//     window.location.href = './public/registerdogwalker.html'
//   }

// });

// Animação do menu lateral
 var menuItem = document.querySelectorAll(".item-menu")

 function selectLink() {
  menuItem.forEach((item)=>
    item.classList.remove('ativo')
)
  this.classList.add('ativo')
 }

 menuItem.forEach((item)=>
  item.addEventListener('click', selectLink)
)
