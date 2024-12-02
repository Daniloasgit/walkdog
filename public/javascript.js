
// Slider de imagens

 
var count = 1;

// Previamente seleciona o primeiro radio button
document.getElementById("radio1").checked = true;
var radios = document.getElementsByName("radio-btn");

setInterval(function() {
    nextImage();
}, 3000);

function nextImage() {
    count++;
    if (count > 5) {
        count = 1; // Reinicia para a primeira imagem
    }
     // Verifica se o botão já está marcado antes de atualizar o estado
     if (!document.getElementById("radio" + count).checked) {
        document.getElementById("radio" + count).checked = true; // Atualiza o estado do radio button
    }
}

// Código adicional (como para o modal) permanece o mesmo
$(document).ready(function() {
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
});

