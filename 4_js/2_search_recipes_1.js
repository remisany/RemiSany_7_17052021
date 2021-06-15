//Construction dictionnaire
let dictionary = [];
for (let i=0; i<recipes.length; i++) {
    let dictionaryName = recipes[i].name.toLowerCase().split(" ");
    for (let j=0; j<dictionaryName.length; j++) {
        dictionary.push({id: recipes[i].id, text: dictionaryName[j]});
    }

    let dictionaryDescription = recipes[i].description.toLowerCase().split(" ");
    for (let j=0; j<dictionaryDescription.length; j++) {
        dictionary.push({id: recipes[i].id, text: dictionaryDescription[j]});
    }

    let dictionaryIngredients = recipes[i].ingredients;
    for (let j=0; j<dictionaryIngredients.length; j++) {
        let dictionaryIngredient = dictionaryIngredients[j].ingredient.toLowerCase().split(" ");
        for (let k=0; k<dictionaryIngredient.length; k++) {
            dictionary.push({id: recipes[i].id, text: dictionaryIngredient[k]});
        }
    }
}

//Triage par ordre alphabetique tableau nom
dictionary.sort(function (a, b) {
    return a.text.localeCompare(b.text);
});

//Fonction de recherche par dichotomie
function mainResearch() {
    let inputSearch = document.querySelector(".main-research__input").value;

    hideRecipes();
    searchArray = [];

    inputSearch = inputSearch.toLowerCase();
    inputSearch = inputSearch.split(" ");

    let dichotomyArray = JSON.parse(JSON.stringify(dictionary));

    resultArray = [];
    let temporaryArray = [];

    for (let i=0; i<inputSearch.length; i++) {
        if (inputSearch[i] === "") {
            resultArray = [];
            resultArray = temporaryArray;
            break;
        }

        let result = 1;
        temporaryArray = [];

        while (result != 0) {
            let start = 0;
            let end = dichotomyArray.length-1;

            while (start < end) {
                let middle = Math.floor((start + end) / 2);
                    
                if (dichotomyArray[middle].text.startsWith(inputSearch[i])) {
                    start = middle;
                    end = middle;
                    temporaryArray.push(dichotomyArray[middle].id);
                    dichotomyArray.splice(middle, 1);
                    result = 1;
                } else {
                    result = 0;
                    if ((dichotomyArray[middle].text.localeCompare(inputSearch[i]) < 0)) {   
                        start = middle + 1;
                    } else {
                        end = middle - 1;
                    }
                }
            }

            if (dichotomyArray[start].text.startsWith(inputSearch[i])) {
                temporaryArray.push(dichotomyArray[start].id);
                dichotomyArray.splice(start, 1);
            }

            if (dichotomyArray[end].text.startsWith(inputSearch[i])) {
                temporaryArray.push(dichotomyArray[end].id);
                dichotomyArray.splice(end, 1);
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