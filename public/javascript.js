
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
    document.getElementById('open-side-menu').addEventListener('click', function() {
        document.getElementById('side-menu').classList.add('open');
    });

    document.getElementById('close-side-menu').addEventListener('click', function() {
        document.getElementById('side-menu').classList.remove('open');
    });

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
    window.location.href = "dogwalkers.html";
  }

  document.getElementById('open-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('open');
    document.querySelector('.main-content').classList.add('shifted'); // Adiciona o deslocamento
});

document.getElementById('close-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('open');
    document.querySelector('.main-content').classList.remove('shifted'); // Remove o deslocamento
});