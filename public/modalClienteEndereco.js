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