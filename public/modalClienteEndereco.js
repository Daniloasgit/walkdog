const enderecoArea = document.getElementById('endereco-area');
const closeBtnEndereco = document.getElementById('close-btn-endereco');
const searchButton = document.getElementById('search-button');


function closeOnOpen(){
    enderecoArea.style.display = "none";
}

searchButton.addEventListener("click", () => {
    closeOnOpen();
    enderecoArea.style.display = "block";
  });

  closeBtnEndereco.addEventListener("click", () => {
    enderecoArea.style.display = "none";
  });




  const track = document.querySelector('.carousel-track-C');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  const slideWidth = 542; // Define a largura fixa do slide

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

