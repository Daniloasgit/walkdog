

/*Modal para os botões login e registrar*/
function ShowPopup()  {
    document.getElementById('show-login').style.display = 'block';
};


/*Modal para os botões login e registrar*/

function ClosePopup () { 
    document.getElementById('popup').style.display = 'none';
};


window.onclick = function(event) {
    const modal = document.getElementById('show-login');
    if (event.target === modal) {
        ClosePopup();
    }
};



// const modal = document.getElementById('area');

// const logar = document.getElementById('button');

// const cancelar = document.getElementsByClassName('botao-cancelar')[0];

// logar.onclick = function() {
//     modal.style.display = 'block'
// };

//     cancelar.onclick = function(){
//         modal.style.display = 'none'
//     };

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none'
//         };
//     };

// Slider de imagens

 
var count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();

}, 3000)

function nextImage(){
count++
if(count>4){
    count=1;
}

document.getElementById("radio"+count).checked = true;

}

$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });