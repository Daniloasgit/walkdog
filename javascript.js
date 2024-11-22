function createPopup(id) {
    const popupNode = document.querySelector(id);
    const overlay = document.querySelector(".overlay");
    const closeBtn = popupNode.querySelector(".close-btn")

    function openPopup() {
    popupNode.classList.add("active");
}

    function closePopup() {
        popupNode.classList.remove("active");
    }

    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

/*Modal para os botões login e registrar*/

const popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);

function createPopup(id) {
    const popupNode = document.querySelector(id);
    const overlay = document.querySelector(".overlay");
    const closeBtn = popupNode.querySelector(".close-btn")

    function openPopup() {
    popupNode.classList.add("active");
}

    function closePopup() {
        popupNode.classList.remove("active");
    }

    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

const popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);