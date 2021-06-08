const ingredientContainer = document.querySelector(".secondary-research__ingredients");
const inputs = document.querySelectorAll(".secondary-research__input");

//Création tableau de recherche "ingrédient"
let listIngredient = [];
for (let i=0; i<recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    for (let j=0; j<ingredients.length; j++) {
        listIngredient.push(ingredients[j].ingredient);
    }
}
//Suppression doublon
listIngredient = new Set(listIngredient);
listIngredient = [...listIngredient];


//Creation de la liste des ingrédients
creationList();
function creationList() {
    const divListIngredient = document.createElement("div");
    divListIngredient.classList.add("secondary-research__list");

    for (let i=0; i<listIngredient.length; i++) {
        let ingredient = document.createElement("a");
        ingredient.id = i;
        ingredient.textContent = listIngredient[i];
        divListIngredient.appendChild(ingredient);
        listIngredient[i] = listIngredient[i].split(" ");
    }

    ingredientContainer.appendChild(divListIngredient); 
}

//Ouvrir tagsContainer
const list = document.querySelectorAll(".secondary-research__container");
const typeTag = document.querySelectorAll(".secondary-research__title")

let index;

for (let i=0; i<typeTag.length; i++) {
    typeTag[i].addEventListener("click", function() {
        list[i].classList.add("active");
        index = i;
        click();
    });
} 

const tagIngredients = document.querySelectorAll(".secondary-research__list a");
const tagContainer = document.querySelector(".tag__container");

//Masquer les ingrédients de la liste
function hideList() {
    for (let i=0; i<tagIngredients.length; i++) {
        tagIngredients[i].classList.add("invisible");
    }
}

function resetList() {
    for (let i=0; i<tagIngredients.length; i++) {
        tagIngredients[i].classList.remove("invisible");
    }
}

//Mise à jour des ingrédients de la liste
function updateList() {
    hideList();
    //checkMemory();
    for (let i=0; i<searchMemory.length; i++) {
        let updateList = searchMemory[i].ingredients;
        for (let j=0; j<updateList.length; j++) {
            for (let k=0; k<tagIngredients.length; k++) {
                if (tagIngredients[k].textContent === updateList[j].ingredient) {
                    tagIngredients[k].classList.remove("invisible");
                    break;
                }
            }
        }
    }
}

//Vérification mémoire
function checkMemory() {
    if (mainMemory == "") {
        searchMemory = recipes;
    } else {
        searchMemory = mainMemory;
    }
}

//Ajout tag
for (let i=0; i<tagIngredients.length; i++) {
    tagIngredients[i].addEventListener("click", function() {
        this.classList.add("invisible");

        let tag = document.createElement("p");
        tag.textContent = this.textContent;
        tag.classList.add("tag");
        tag.id = this.id;

        let cross = document.createElement("a");
        cross.classList.add("far");
        cross.classList.add("fa-times-circle");
        tag.appendChild(cross);

        tagContainer.appendChild(tag);

        checkMemory();
        secondaryResearch();

        closeList();
        deleteTag()
    });
}

function closeList() {
    list[index].classList.remove("active");
    inputs[index].value = "";
}


//Suppression tag
function deleteTag() {
    const cross = document.querySelectorAll(".fa-times-circle");
    const tag = document.querySelectorAll(".tag");
    for (let i=0; i<cross.length; i++) {
        cross[i].addEventListener("click", function() {
            tagContainer.removeChild(tag[i]);
            
            checkMemory();
            secondaryResearch();
            
            for (let j=0; j<tagIngredients.length; j++) {
                if (tagIngredients[j].id === tag[i].id) {
                    tagIngredients[j].classList.remove("invisible");
                    break;
                }
            }
        });
    }
}

function click() {
    document.addEventListener("click", function(event) {
        if (!list[index].contains(event.target)) {
            closeList();
        }
    });
}

/*
//Rechercher dans liste ingrédient
const inputs = document.querySelectorAll(".secondary-research__input");
let searchList;

for (let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener("keyup", function () {
        const inputSearch = document.querySelector(".secondary-research__input").value;
    
        searchList = inputSearch.split(" ");
    
        if ((searchList.length === 1)) {
            clearList();
            resultListArray = [];
            searchListArray = listIngredient;
            researchList(searchList[0].toLowerCase());
    
        }
    });
}*/