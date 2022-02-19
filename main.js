// Variables
const arrowCont = document.querySelector("#open-arrow");
let verticalNav = document.querySelectorAll(".closed");
let verticalNavStatus = true;
const openedContainer = document.querySelector("#opened-container");
const parentTags = document.querySelectorAll(".parent-tag");
const parentTagsTxt = document.querySelectorAll(".parent-tag-txt");
let childOpen = true;
let childOpen2 = true;
const dropDown = document.querySelectorAll(".dropdown");
const dropDown2 = document.querySelector("#dropdown2");
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


// Open Parent tag subitems (INDEX 1)
let dropDownOpened = {
    gestaovendas: false,
    parametrizacao: false
};

function openAndCloseDropDownMenu(dropDownName) {
    let index = Object.keys(dropDownOpened).indexOf(dropDownName);
    let arrowIndex = index;
    arrowIndex+=1;

    let arrow = document.querySelector("#parent-arrow" + (arrowIndex));
    if (dropDownOpened[dropDownName] == false) {
        dropDown[index].classList.remove("child-closed");
        dropDown[index].classList.add("child-open")
        arrow.src = "./assets/round_keyboard_arrow_up_black_24dp.png"
        dropDownOpened[dropDownName] = true;
    }
    else {
        dropDown[index].classList.remove("child-open")
        dropDown[index].classList.add("child-closed");
        arrow.src = "./assets/round_keyboard_arrow_down_black_24dp.png"
        dropDownOpened[dropDownName] = false;
    }
}

// Função que muda o nome conforme os botões
function changeMacroTag(index, subItemText) {
    macroTag.innerHTML = parentTagsTxt[index].innerHTML;
    microTag.innerHTML = `/ ${subItemText}`;
}


function disableMenuClass(){
    active  = document.getElementsByClassName('active-tag');
    for (element of active){
        element.classList.remove('active-tag')
        
    }
}

function activeMenuClass(id, indexChangeMacroTag){
    disableMenuClass();
    element  = document.getElementById(id);
    element.className = element.className + " active-tag ";
    changeMacroTag(indexChangeMacroTag, element.innerText);
}


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


rigNavDiv.onmouseover = mostrarPopup;
rigNavDiv.onmouseleave = esconderPopup;
popContainer.onmouseover = mostrarPopup;
popContainer.onmouseleave = esconderPopup;