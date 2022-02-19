// Variables
const arrowCont = document.querySelector("#open-arrow");
let verticalNav = document.querySelectorAll(".closed");
let verticalNavStatus = true;
const openedContainer = document.querySelector("#opened-container");
const parentTags = document.querySelectorAll(".parent-tag");
const parentTagsTxt = document.querySelectorAll(".parent-tag-txt");
let childOpen = true;
let childOpen2 = true;
const dropDown1 = document.querySelector("#dropdown1");
const dropDown2 = document.querySelector("#dropdown2");
const arrow = document.querySelector("#parent-arrow");
const arrow2 = document.querySelector("#parent-arrow2");
const macroTag = document.querySelector("#macro-tag");
const microTag = document.querySelector("#micro-tag");
let subitens = document.querySelectorAll(".mini-tag p");
let subitensTag =  document.querySelectorAll(".mini-tag");
const rigNavDiv = document.querySelector("#right-nav-div");
const popContainer = document.querySelector("#user-popup-container");


// Functions
// Open Lateral Menu
arrowCont.addEventListener("click", () => {
    if (verticalNavStatus == true) {
        verticalNav[0].className = "open";
        arrowCont.src = "./assets/left-arrow.png"
        openedContainer.style.opacity = "1";
        verticalNavStatus = false;
    }
    // Close Lateral Menu
    else {
        verticalNav[0].className = "closed";
        openedContainer.style.opacity = "0";
        arrowCont.src = "./assets/keyboard_double_arrow_right_black_24dp.svg    "
        verticalNavStatus = true;
    }
})

// Open Parent tag subitems (INDEX 0)
parentTags[0].addEventListener("click", () => {
    if (childOpen == true) {
        dropDown1.className = "child-open";
        arrow.src = "./assets/round_keyboard_arrow_up_black_24dp.png"
        childOpen = false;
    }
    else {
        dropDown1.className = "child-closed";
        arrow.src = "./assets/round_keyboard_arrow_down_black_24dp.png"
        childOpen = true;
    }
})

// Open Parent tag subitems (INDEX 1)
parentTags[1].addEventListener("click", () => {
    if (childOpen2 == true) {
        dropDown2.className = "child-open";
        arrow2.src = "./assets/round_keyboard_arrow_up_black_24dp.png"
        childOpen2 = false;
    }
    else {
        dropDown2.className = "child-closed";
        arrow2.src = "./assets/round_keyboard_arrow_down_black_24dp.png"
        childOpen2 = true;
    }
})

// Função que muda o nome conforme os botões
function mudarNome1() {
    macroTag.innerHTML = parentTagsTxt[0].innerHTML;
}
function mudarNome2() {
    macroTag.innerHTML = parentTagsTxt[1].innerHTML;
}

parentTags[0].onclick = mudarNome1;
parentTags[1].onclick = mudarNome2;


// Função para mudar os subitens e ativar os mesmos
function mudarSubitem0() {
    microTag.innerHTML = "/ " + subitens[0].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[0].innerHTML;

    this.className = "mini-tag active-tag";
}
function mudarSubitem1() {
    microTag.innerHTML = "/ " + subitens[1].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[0].innerHTML;

    this.className = "mini-tag active-tag";
}
function mudarSubitem2() {
    microTag.innerHTML = "/ " + subitens[2].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[0].innerHTML;

    this.className = "mini-tag active-tag";
}
function mudarSubitem3() {
    microTag.innerHTML = "/ " + subitens[3].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[0].innerHTML;

    this.className = "mini-tag active-tag";
}
function mudarSubitem4() {
    microTag.innerHTML = "/ " + subitens[4].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[1].innerHTML;

    this.className = "mini-tag active-tag";
}
function mudarSubitem5() {
    microTag.innerHTML = "/ " + subitens[5].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[1].innerHTML;

    this.className = "mini-tag active-tag";
}
function mudarSubitem6() {
    microTag.innerHTML = "/ " + subitens[6].innerHTML;
    subitensTag[0].className = "mini-tag inactive-tag";
    subitensTag[1].className = "mini-tag inactive-tag";
    subitensTag[2].className = "mini-tag inactive-tag";
    subitensTag[3].className = "mini-tag inactive-tag";
    subitensTag[4].className = "mini-tag inactive-tag";
    subitensTag[5].className = "mini-tag inactive-tag";
    subitensTag[6].className = "mini-tag inactive-tag";
    macroTag.innerHTML = parentTagsTxt[1].innerHTML;

    this.className = "mini-tag active-tag";
}


subitensTag[0].onclick = mudarSubitem0;
subitensTag[1].onclick = mudarSubitem1;
subitensTag[2].onclick = mudarSubitem2;
subitensTag[3].onclick = mudarSubitem3;
subitensTag[4].onclick = mudarSubitem4;
subitensTag[5].onclick = mudarSubitem5;
subitensTag[6].onclick = mudarSubitem6;


// função para mostrar popup
function mostrarPopup() {
    popContainer.className = "popup-on";
    setTimeout(popupDisplay, 1000);
}

// função para esconder popup
function esconderPopup() {
    popContainer.className = "popup-off";
    setTimeout(popupHide, 1000);
}

// função show popupdisplay
function popupDisplay() {
    if (popContainer.style.display = "none" || "") {
        popContainer.style.display = "block";
    }
    else {

    }
}

function popupHide() {
    if (popContainer.style.display = "block") {
        popContainer.style.display = "none";
    }
    else {

    }
}


rigNavDiv.onmouseenter = mostrarPopup;
rigNavDiv.onmouseleave = esconderPopup;
popContainer.onmouseenter = mostrarPopup;
popContainer.onmouseleave = esconderPopup;