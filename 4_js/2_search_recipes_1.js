//DICTIONARY CONSTRUCTION
let dictionary = [];
let exist;
let dictionaryName = recipes[0].name.toLowerCase().split(" ");
dictionary.push({text: dictionaryName[0], id: []});

for (let i=0; i<recipes.length; i++) {
    //Name
    dictionaryName = recipes[i].name.toLowerCase().split(" ");
    for (let j=0; j<dictionaryName.length; j++) {
        exist = 0;
        for (let k=0; k<dictionary.length; k++) {
            if (dictionary[k].text === dictionaryName[j].replace(/[^a-z0-9àéèêçûùëï]/g, "")) {
                dictionary[k].id.push(recipes[i].id);
                exist = 1;
                break;
            }
        }
        if (exist === 0) {
            dictionary.push({text: dictionaryName[j].replace(/[^a-z0-9àéèêçûùëï]/g, ""), id: [recipes[i].id]});
        }
    }

    //Description
    let dictionaryDescription = recipes[i].description.toLowerCase().split(" ");
    for (let j=0; j<dictionaryDescription.length; j++) {
        exist = 0;
        for (let k=0; k<dictionary.length; k++) {
            if (dictionary[k].text === dictionaryDescription[j].replace(/[^a-z0-9àéèêçûùëï]/g, "")) {
                dictionary[k].id.push(recipes[i].id);
                exist = 1;
                break;
            }
        }
        if (exist === 0) {
            dictionary.push({text: dictionaryDescription[j].replace(/[^a-z0-9àéèêçûùëï]/g, ""), id: [recipes[i].id]});
        }
    }

    //Ingredients
    let dictionaryIngredients = recipes[i].ingredients;
    for (let j=0; j<dictionaryIngredients.length; j++) {
        let dictionaryIngredient = dictionaryIngredients[j].ingredient.toLowerCase().split(" ");
        for (let k=0; k<dictionaryIngredient.length; k++) {  
            exist = 0;
            for (let l=0; l<dictionary.length; l++) {
                if (dictionary[l].text === dictionaryIngredient[k].replace(/[^a-z0-9àéèêçûùëï]/g, "")) {
                    dictionary[l].id.push(recipes[i].id);
                    exist = 1;
                    break;
                }
            }
            if (exist === 0) {
                dictionary.push({text: dictionaryIngredient[k].replace(/[^a-z0-9àéèêçûùëï]/g, ""), id: [recipes[i].id]});
            }
        }
    }
}

//Sort by alphabetical order name table
dictionary.sort(function (a, b) {
    return a.text.localeCompare(b.text);
});

//Deletion of duplicate id
for (let i=0; i<dictionary.length; i++) {
    dictionary[i].id = new Set(dictionary[i].id);
    dictionary[i].id = [...dictionary[i].id];
}

//SEARCH FUNCTION BY DICHOTOMY
function mainResearch() {
    let inputSearch = document.querySelector(".main-research__input").value;

    hideRecipes();
    searchArray = [];

    inputSearch = inputSearch.toLowerCase();
    inputSearch = inputSearch.split(" ");

    let dichotomyArray = JSON.parse(JSON.stringify(dictionary));

    resultArray = [];
    let temporaryArray = [];
    let flag = 0;

    for (let i=0; i<inputSearch.length; i++) {
        if (inputSearch[i] === "") {
            if (inputSearch.length === 2) {
                resultArray = temporaryArray;
                flag = 0;
            }
            break;
        }

        let result = 1;
        temporaryArray = [];

        while (result != 0) { 
            let start = 0;
            let end = dichotomyArray.length-1;

            while (start < end) {
                let middle = Math.floor((start + end) / 2);
                
                //Adding the id if dictionary word matches with the search
                if (dichotomyArray[middle].text.startsWith(inputSearch[i])) {
                    start = middle;
                    end = middle;
                    for (let j=0; j<dichotomyArray[middle].id.length; j++) {
                        temporaryArray.push(dichotomyArray[middle].id[j]);
                    }
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

            //Check at the ends of the dictionary
            if (dichotomyArray[start].text.startsWith(inputSearch[i])) {
                for (let j=0; j<dichotomyArray[start].id.length; j++) {
                    temporaryArray.push(dichotomyArray[start].id[j]);
                }
                dichotomyArray.splice(start, 1);
            }

            if (dichotomyArray[end].text.startsWith(inputSearch[i])) {
                for (let j=0; j<dichotomyArray[end].id.length; j++) {
                    temporaryArray.push(dichotomyArray[end].id[j]);
                }
                dichotomyArray.splice(end, 1);
            }
        }

        if (inputSearch.length > 1) {
            resultArray.push(temporaryArray);
            flag = 1;
        } else {
            resultArray = temporaryArray;
        }
    }

    //Formatting the result table
    if (flag === 1) {
        let storageArray = [];
        for (let i=0; i<resultArray.length; i++)  {
            resultArray[i] = new Set(resultArray[i]);
            resultArray[i] = [...resultArray[i]];
            for (let j=0; j<resultArray[i].length; j++) {
                storageArray.push(resultArray[i][j]);
            }
            
            if (i != 0) {
                storageArray = storageArray.filter((item, index) => storageArray.indexOf(item) !== index);
            }
        }

        resultArray = storageArray;
    } else {
        resultArray = new Set(resultArray);
        resultArray = [...resultArray];
    }

    //Recipe display
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

    //If the result is zero
    if(searchArray.length === 0) {
        displayError();
        mainMemory = [];
        hideList();
    } else {
        mainMemory = searchArray;
        //Update secondary search list
        checkMemory();
        updateList();
    }
}