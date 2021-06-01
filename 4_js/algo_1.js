//Création tableau de recherche "Nom"
let recipesName = [];
for (let i=0; i<recipes.length; i++) {
    recipesName.push({id: recipes[i].id, text: recipes[i].name.split(" ")});
}

//Création tableau de recherche "ingrédient"
let recipesIngredient = [];
let listIngredientArray  = [];
for (let i=0; i<recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    let ingredientsArray = [];
    for (let j=0; j<ingredients.length; j++) {
        ingredientsArray.push(ingredients[j].ingredient.split(" "));
        listIngredientArray.push(ingredients[j].ingredient)
    }
    recipesIngredient.push({id: recipes[i].id, ingredients: ingredientsArray});
}

//Création tableau de recherche "Description"
let recipesDescription = [];
for (let i=0; i<recipes.length; i++) {
    recipesDescription.push({id: recipes[i].id, text: recipes[i].description.split(" ")});
}

//Fonction de recherche
let searchArray = [];
let searchMemory = [];
let resultArray = [];
let dataName = [];

function research(input) {
    for (let i=0; i<searchArray.length; i++) {

        if (searchArray[i].text !== undefined) {
            dataName = searchArray[i].text;
            for (let j=0; j<dataName.length; j++) {
                if(dataName[j].toLowerCase().startsWith(input)) {
                    resultArray.push(searchArray[i]);
                    break;   
                }
            }
        }
        
        if (searchArray[i].ingredients !== undefined) {
            dataName = searchArray[i].ingredients;
            loop : for (let j=0; j<dataName.length; j++) {
                let dataNameX = dataName[j];
                for (let k=0; k<dataNameX.length; k++) {
                    if(dataNameX[k].toLowerCase().startsWith(input)) {
                        resultArray.push(searchArray[i]);
                        break loop;   
                    }
                }
            }
        }
    }

    for (let i=0; i<resultArray.length; i++) {
        displayName(resultArray[i]);
        hideError();
    }

    if(resultArray.length === 0) {
        displayError();
    }
}