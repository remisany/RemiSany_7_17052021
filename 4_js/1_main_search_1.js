//INITIALIZATION
let searchMemory = [];
let mainMemory = [];
let secondaryMemory = [];
let searchArray = [];
let resultArray = [];
let temporaryArray = [];

//LISTENING TO KEYBOARD
const input = document.querySelector(".main-research__input");

input.addEventListener("keyup", function () {
    let inputSearch = document.querySelector(".main-research__input").value;

    //If secondary research exists
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