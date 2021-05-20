//Création tableau de recherche "Nom"
let recipesName = [];

for (let i=0; i<recipes.length; i++) {
    recipesName.push({id: recipes[i].id, name: recipes[i].name.split(" ")});
}

//Fonction de recherche à partir du nom
let nameArray = [];
let nameMemory = [];
let searchNameArray = [];
let dataName = [];

function researchName(input) {
    searchNameArray = [];

    for (let i=0; i<nameArray.length; i++) {   
        let dataName = nameArray[i].name;   
        for (let j=0; j<dataName.length; j++) {
            if(dataName[j].toLowerCase().startsWith(input)) {
                searchNameArray.push(nameArray[i]);
                break;   
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

//Création tableau de recherche "ingrédient"
let recipesIngredient = [];

for (let i=0; i<recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    let ingredientsArray = [];
    for (let j=0; j<ingredients.length; j++) {
        ingredientsArray.push(ingredients[j].ingredient);
    }
    recipesIngredient.push({id: recipes[i].id, ingredients: ingredientsArray});
}

//Fonction de recherche à partir de l'ingrédient
//let ingredientArray = [];
//let ingredientMemory = [];
//let searchNameArray = [];
//let dataName = [];