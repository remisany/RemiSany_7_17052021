let inputTag = [];

function secondaryResearch() {
    inputTag = document.querySelectorAll(".tag");

    for (let i=0; i<inputTag.length; i++) {
        hideRecipes();
        searchArray = [];

        for (let j=0; j<searchMemory.length; j++) {

            searchMemoryIngredients = searchMemory[j].ingredients;
            for (let k=0; k<searchMemoryIngredients.length; k++) {
                if (searchMemoryIngredients[k].ingredient === inputTag[i].textContent) {
                    searchArray.push(searchMemory[j]);
                    break;
                }
            }

           if (searchMemory[j].appliance === inputTag[i].textContent) {
                searchArray.push(searchMemory[j]);
           }

           searchMemoryUstensils = searchMemory[j].ustensils;
           for (let k=0; k<searchMemoryUstensils.length; k++) {
               if (searchMemoryUstensils[k] === inputTag[i].textContent) {
                   searchArray.push(searchMemory[j]);
               }
           }

        }

        for (let i=0; i<searchArray.length; i++) {
            displayRecipes(searchArray[i]);
        }
    
        searchMemory = searchArray;
    }

    secondaryMemory = searchArray;

    if (inputTag.length === 0) {
        searchArray = [];
        secondaryMemory = [];
        resetDisplay();
        if (mainMemory == "") {
            resetList();
        }
    } else {
        updateList();
    }
}