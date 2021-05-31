//Création tableau de recherche "Nom"
let recipesName = [];

for (let i=0; i<recipes.length; i++) {
    recipesName.push({id: recipes[i].id, text: recipes[i].name.split(" ")});
}

//Création tableau de recherche "ingrédient"
let recipesIngredient = [];

for (let i=0; i<recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    let ingredientsArray = [];
    for (let j=0; j<ingredients.length; j++) {
        ingredientsArray.push(ingredients[j].ingredient.split(" "));
    }
    recipesIngredient.push({id: recipes[i].id, ingredients: ingredientsArray});
}

//Création tableau de recherche "Description"
let recipesDescription = [];

for (let i=0; i<recipes.length; i++) {
    recipesDescription.push({id: recipes[i].id, text: recipes[i].description.split(" ")});
}

//Fonction de recherche à partir du nom
let nameArray = [];
let nameMemory = [];
let searchNameArray = [];
let dataName = [];

function researchName(input) {
    for (let i=0; i<nameArray.length; i++) {

        if (nameArray[i].text !== undefined) {
            dataName = nameArray[i].text;
            for (let j=0; j<dataName.length; j++) {
                if(dataName[j].toLowerCase().startsWith(input)) {
                    searchNameArray.push(nameArray[i]);
                    break;   
                }
            }
        }
        
        if (nameArray[i].ingredients !== undefined) {
            dataName = nameArray[i].ingredients;
            loop : for (let j=0; j<dataName.length; j++) {
                let dataNameX = dataName[j];
                for (let k=0; k<dataNameX.length; k++) {
                    if(dataNameX[k].toLowerCase().startsWith(input)) {
                        searchNameArray.push(nameArray[i]);
                        break loop;   
                    }
                }
            }
        }
    }

    for (let i=0; i<searchNameArray.length; i++) {
        displayName(searchNameArray[i]);
        hideError();
    }

    if(searchNameArray.length === 0) {
        displayError();
    }
}