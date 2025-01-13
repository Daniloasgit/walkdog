
    

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
  document.getElementById('dogwalker-button').addEventListener('click', redirecionar)
  document.getElementById('open-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('open');
    document.querySelector('.main-content').classList.add('shifted'); // Adiciona o deslocamento
});

document.getElementById('close-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('open');
    document.querySelector('.main-content').classList.remove('shifted'); // Remove o deslocamento
});

//FIM CAROUSEL 
