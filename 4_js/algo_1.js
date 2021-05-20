//création tableau de recherche "Nom"
let recipesName = [];

for (let i=0; i<recipes.length; i++) {
    recipesName.push({id: recipes[i].id, name: recipes[i].name.split(" ")});
}

//Fonction de recherche à partir du nom
let indexArray = [];
let indexMemory = [];
let searchArray = [];
let dataName = [];

function researchName(input) {
    clearDisplay();
    searchArray = [];

    for (let i=0; i<indexArray.length; i++) {   
        let dataName = indexArray[i].name;   
        for (let j=0; j<dataName.length; j++) {
            if(dataName[j].toLowerCase().startsWith(input)) {
                searchArray.push(indexArray[i]);
                break;   
            }
        }
    }
    
    for (let i=0; i<searchArray.length; i++) {
        displayName(searchArray[i]);
        hideError();
    }

    if(searchArray.length === 0) {
        displayError();
    }
}