const popup = document.getElementById('area');

const showpopup = document.getElementById('button');

const closepopup = document.getElementsByClassName('close-btn-regis')[0];

showpopup.onclick = function() {
    popup.style.display = 'block'
};

closepopup.onclick = function(){
    popup.style.display = 'none'
};

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none'
    };
};


const login = document.getElementById('login-area');

const showlogin = document.getElementById('login-button');

const closelogin = document.getElementsByClassName('close-btn-log')[0];

showlogin.onclick = function() {
    login.style.display = 'block'
};

closelogin.onclick = function(){
    login.style.display = 'none'
};

window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = 'none'
    };
};
