
// Slider de imagens

 
var count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();

}, 3000)

function nextImage(){
count++
if(count>5){
    count=1;
}


// Slider de imagens boas vindas

 
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
document.getElementById("radio1"+count).checked = true;
}

// Código adicional (como para o modal) permanece o mesmo
$(document).ready(function() {
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
});
