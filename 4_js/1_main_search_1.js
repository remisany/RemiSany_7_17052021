//Ecoute les touches de la recherche principale
const input = document.querySelector(".main-research__input")

let searchArray = [];
let searchMemory = [];

let mainMemory = [];
let secondaryMemory = [];

input.addEventListener("keyup", function () {

    inputSearch = document.querySelector(".main-research__input").value;

    if(secondaryMemory == "") {
        searchMemory = recipes;
    } else {
        searchMemory = secondaryMemory;
    }

    if (inputSearch.length != 0) {
        if (inputSearch.length > 2) {
            mainResearch();
        }
    } else {
        resetDisplay();
        hideError();
        if (secondaryMemory == "") {
            resetList();
        }
    }
});