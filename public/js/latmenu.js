
  document.getElementById('open-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('open');
    document.querySelector('.main-content').classList.add('shifted'); // Adiciona o deslocamento
});

document.getElementById('close-side-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('open');
    document.querySelector('.main-content').classList.remove('shifted'); // Remove o deslocamento
});