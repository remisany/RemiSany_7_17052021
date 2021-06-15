/* exported searchMemory */

//Ecoute les touches de la recherche principale
const input = document.querySelector(".main-research__input");

let searchMemory = [];
let mainMemory = [];
let secondaryMemory = [];

//ECOUTE CLAVIER
let searchArray = [];
let resultArray = [];
let temporaryArray = [];

input.addEventListener("keyup", function () {
    let inputSearch = document.querySelector(".main-research__input").value;

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
        mainMemory = [];
        resetDisplay();
        hideError();
        if (secondaryMemory == "") {
            resetList();
        }
    }
});