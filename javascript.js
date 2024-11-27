

/*Modal para os botões login e registrar*/
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});


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