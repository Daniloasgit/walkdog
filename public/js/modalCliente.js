const enderecoArea = document.getElementById('endereco-area');
const closeBtnEndereco = document.getElementById('close-btn-endereco');
const searchButton = document.getElementById('search-button');

// Obtendo os botões e modais
const clienteButton = document.getElementById("clienteButton");
const clientehtmlmodal = document.getElementById("ModalCliente");
const closeClientehmtlmodal = document.getElementById("closeClienteModal");

const registerDogButton = document.getElementById("DogButton");
const Dogmodal = document.getElementById("closeCachorromodal");
const closeDogmodal = document.getElementById("closeCachorroModal");

const perfilDogButton = document.getElementById("DogPerfil");
const perfilDogmodal = document.getElementById("perfilCachorro");
const closeDogPerfilmodal = document.getElementById("closePerfilCachorro");

// Função para fechar qualquer modal aberto
function closeAllModals() {
    clientehtmlmodal.style.display = "none";
    Dogmodal.style.display = "none";
    perfilDogmodal.style.display = "none";
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
    Dogmodal.style.display = "block"; // Abre o modal de cachorro
});

closeDogmodal.addEventListener("click", () => {
    Dogmodal.style.display = "none"; // Fecha o modal de cachorro
});

// Modal para o perfil do cachorro
perfilDogButton.addEventListener("click", () => {
    closeAllModals(); // Fecha os outros modais
    perfilDogmodal.style.display = "block"; // Abre o modal de perfil do cachorro
});

closeDogPerfilmodal.addEventListener("click", () => {
    perfilDogmodal.style.display = "none"; // Fecha o modal de perfil do cachorro
});





  const track = document.querySelector('.carousel-track-C');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  const slideWidth = 800; // Define a largura fixa do slide

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

