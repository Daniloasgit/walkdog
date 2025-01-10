
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


    //menu lateral
    document.getElementById('open-side-menu').addEventListener('click', function() {
        document.getElementById('side-menu').classList.add('open');
    });

    document.getElementById('close-side-menu').addEventListener('click', function() {
        document.getElementById('side-menu').classList.remove('open');
    });

    //FIM MENU LATERAL

    // Carousel
    const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  const slideWidth = 1500; // Define a largura fixa do slide

  let currentIndex = 0;

  function moveToSlide(index) {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
  }

  nextButton.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  });

  prevButton.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
  });

  // Autoplay
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  }, 10000); // Troca de imagem a cada 10 segundos

  function redirecionar() {
    window.location.href = "dogwalker.html";
  }

  document.getElementById('open-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('open');
    document.querySelector('.main-content').classList.add('shifted'); // Adiciona o deslocamento
});

document.getElementById('close-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('open');
    document.querySelector('.main-content').classList.remove('shifted'); // Remove o deslocamento
});

const API_URL = 'http://localhost:5500/public/index.html';

//FIM CAROUSEL


// Função assíncrona para fazer login do usuário.

// Recebe o 'email' e 'password' como parâmetros.
async function login(email, password) {
    try {
        // Exibe no console os dados de login que serão enviados ao servidor.
        console.log('Enviando dados para login:', { email, password });
        
        // Envia uma requisição POST à API na rota '/auth/login'.
        // A requisição inclui um cabeçalho para indicar que o conteúdo é JSON e envia o 'email' e 'password' no corpo da requisição.
        const response = await fetch(`${API_URL}/localhost:5500/login`, {
            method: 'POST', // Define o método HTTP como POST.
            headers: {
                'Content-Type': 'application/json' // Informa que o corpo da requisição está no formato JSON.
            },
            body: JSON.stringify({ email, password }) // Converte os dados de login para o formato JSON e envia no corpo da requisição.
        });

        // Aguarda e converte a resposta do servidor para JSON.
        const result = await response.json();
        
        // Exibe no console a resposta recebida do servidor.
        console.log('Resposta do servidor para login:', result);
        
        // Retorna o resultado da requisição.
        return result;
    } catch (error) {
        // Captura qualquer erro que ocorra durante a requisição e exibe no console.
        console.error('Erro ao fazer login:', error);
        
        // Retorna um objeto com 'success: false' indicando que o login falhou.
        return { success: false };
    }
  };

  