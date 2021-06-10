//Construction dictionnaire
let dictionary = [];
for (let i=0; i<recipes.length; i++) {
    dictionaryName = recipes[i].name.toLocaleLowerCase().split(" ");
    for (let j=0; j<dictionaryName.length; j++) {
        dictionary.push({id: recipes[i].id, text: dictionaryName[j]});
    }
}

//Triage par ordre alphabetique tableau nom
dictionary.sort(function (a, b) {
    return a.text.localeCompare(b.text);
})

//Fonction de recherche par dichotomie
function mainResearch() {
    inputSearch = document.querySelector(".main-research__input").value;

    hideRecipes();
    searchArray = [];

    inputSearch = inputSearch.toLowerCase();
    inputSearch = inputSearch.split(" ");

    dichotomyArray = JSON.parse(JSON.stringify(dictionary));

    resultArray = [];

    for (let i=0; i<inputSearch.length; i++) {

        if (inputSearch[i] === "") {
            break;
        }
        
        let result = 1;
        temporaryArray = [];

        while (result != 0) {
            let start = 0;
            let end = dichotomyArray.length-1;
    
            while (start < end) {
                let middle = Math.ceil((start + end) / 2);
    
                if (dichotomyArray[middle].text.startsWith(inputSearch[i])) {
                    start = middle;
                    end = middle;
        
                    temporaryArray.push(dichotomyArray[middle].id);
                    dichotomyArray.splice(middle, 1);
                    result = 1;
                } else {
                    result = 0;
                    if (inputSearch[i] > dichotomyArray[middle].text) {      
                        start = middle + 1;
                    } else {
                        end = middle - 1;
                    }
                }
            }
        }
        if (inputSearch.length > 1) {
            resultArray.push(temporaryArray);
        } else {
            resultArray = temporaryArray;
        }
    }

    if (inputSearch.length > 1) {
        for (let j=1; j<inputSearch.length; j++) {
            if (inputSearch[j] != "") {
                resultArray = resultArray[j-1].filter(e => resultArray[j].includes(e));
            }
        }
    } else {
        //Suppression doublon
        resultArray = new Set(resultArray);
        resultArray = [...resultArray];
    }

    for (let i=0; i<searchMemory.length; i++) {
        hideError();
        for (let j=0; j<resultArray.length; j++) {
            if(resultArray[j] === searchMemory[i].id) {
                searchArray.push(searchMemory[i]);
                displayRecipes(searchMemory[i]);
                break;
            }
        }
    }

    if(searchArray.length === 0) {
        displayError();
        mainMemory = [];
        hideList();
    } else {
        mainMemory = searchArray;
        checkMemory();
        updateList();
    }
}

/*
let inputSearch = [];
//Fonction de recherche principale
function mainResearch() {
    inputSearch = document.querySelector(".main-research__input").value;
    let input = inputSearch.split(" ")

    for (let i=0; i<input.length; i++) {
        //Cacher recette
        hideRecipes();
        
        searchArray = [];
  
        for (let j=0; j<searchMemory.length; j++) {
            //Recherche par le nom
            searchMemoryName = searchMemory[j].name.split(" ");
            for (let k=0; k<searchMemoryName.length; k++) {
                if(searchMemoryName[k].toLowerCase().startsWith(input[i].toLowerCase())) {
                    searchArray.push(searchMemory[j]);
                    break;   
                }
            }
    
            //Recherche par la description
            searchMemoryDescription = searchMemory[j].description.split(" ");
            for (let k=0; k<searchMemoryDescription.length; k++) {
                if(searchMemoryDescription[k].toLowerCase().startsWith(input[i].toLowerCase())) {
                    searchArray.push(searchMemory[j]);
                    break;   
                }
            }
    
            //Recherche par les ingrédients
            searchMemoryIngredients = searchMemory[j].ingredients;
    
            loop : for (let k=0; k<searchMemoryIngredients.length; k++) {
                let searchMemoryIngredient = searchMemoryIngredients[k].ingredient.split(" ");
                for (let l=0; l<searchMemoryIngredient.length; l++) {
                    if(searchMemoryIngredient[l].toLowerCase().startsWith(input[i].toLowerCase())) {
                        searchArray.push(searchMemory[j]);
                        break loop;   
                    }
                }
            }
        }
    
        //Suppression doublon
        searchArray = new Set(searchArray);
        searchArray = [...searchArray];
    
        for (let i=0; i<searchArray.length; i++) {
            hideError();
            displayRecipes(searchArray[i]);
        }

        if (input.length > 1) {
            searchMemory = searchArray;
        }
    }

    if(searchArray.length === 0) {
        displayError();
        mainMemory = [];
        hideList();
    } else {
        mainMemory = searchArray;
        checkMemory();
        updateList();
    }
}*/