//Fonction de recherche
let searchListArray = [];
let searchListMemory = [];
let resultListArray = [];

function researchList(input) {
    const ingredients = document.querySelectorAll(".secondary-research__list a")
    console.log(ingredients);
    for (let i=0; i<searchListArray.length; i++) {
        let listIndex = searchListArray[i];
        for (let j=0; j<listIndex.length; j++) {
            if(listIndex[j].toLowerCase().startsWith(input)) {
                ingredients[i].classList.remove("invisible");
                resultListArray.push(searchListArray[i]);
                break;   
            }
        }
    }
}