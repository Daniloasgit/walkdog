
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


