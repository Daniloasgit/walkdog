const trackGaleria = document.querySelector('.carrossel-galeria-track');
const slidesGaleria = Array.from(trackGaleria.children);
const nextButtonGaleria = document.querySelector('.next');
const prevButtonGaleria = document.querySelector('.prev');
const slideWidthGaleria = 1500; // Define a largura fixa do slide

let currentGaleria = 0;

function moveToSlideGaleria(galeria) {
  trackGaleria.style.transform = `translateX(-${galeria * slideWidthGaleria}px)`;
  currentGaleria = galeria;
}

// Botão "Next"
nextButtonGaleria.addEventListener('click', () => {
  const nextGaleria = (currentGaleria + 1) % slidesGaleria.length;
  moveToSlideGaleria(nextGaleria); // Corrigido o nome da função
});

// Botão "Previous"
prevButtonGaleria.addEventListener('click', () => {
  const prevGaleria = (currentGaleria - 1 + slidesGaleria.length) % slidesGaleria.length; // Corrigido slidesGaleria.length
  moveToSlideGaleria(prevGaleria);
});

// Autoplay
setInterval(() => {
  const nextGaleria = (currentGaleria + 1) % slidesGaleria.length;
  moveToSlideGaleria(nextGaleria); // Corrigido o nome da função
}, 3000); // Troca de imagem a cada 5 segundos
