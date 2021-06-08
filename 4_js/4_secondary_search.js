const ingredientContainer = document.querySelector(".secondary-research__ingredients");
const applianceContainer = document.querySelector(".secondary-research__appliances");
const ustensilContainer = document.querySelector(".secondary-research__ustensils");

const inputs = document.querySelectorAll(".secondary-research__input");
const tagContainer = document.querySelector(".tag__container");

//INGREDIENTS
//Création tableau de recherche "ingrédient"
let listIngredient = [];
let listAppliance = [];
let listUstensil = [];

for (let i=0; i<recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    for (let j=0; j<ingredients.length; j++) {
        listIngredient.push(ingredients[j].ingredient);
    }

    listAppliance.push(recipes[i].appliance);

    let ustensils = recipes[i].ustensils;
    for (let j=0; j<ustensils.length; j++) {
        listUstensil.push(ustensils[j]);
    }
}
//Suppression doublon
listIngredient = new Set(listIngredient);
listIngredient = [...listIngredient];

listAppliance = new Set(listAppliance);
listAppliance  = [...listAppliance];

listUstensil = new Set(listUstensil);
listUstensil  = [...listUstensil];

//Creation de la liste des ingrédients
creationListIngredient();
function creationListIngredient() {
    const divListIngredient = document.createElement("div");
    divListIngredient.classList.add("secondary-research__list");
    divListIngredient.classList.add("secondary-research__ingredients");

    for (let i=0; i<listIngredient.length; i++) {
        let ingredient = document.createElement("a");
        ingredient.id = i;
        ingredient.textContent = listIngredient[i];
        divListIngredient.appendChild(ingredient);
        listIngredient[i] = listIngredient[i].split(" ");
    }
    ingredientContainer.appendChild(divListIngredient); 
}

//APPAREIL
creationListAppliance();
function creationListAppliance() {
    const divListAppliance = document.createElement("div");
    divListAppliance.classList.add("secondary-research__list");
    divListAppliance.classList.add("secondary-research__appliances");

    for (let i=0; i<listAppliance.length; i++) {
        let appliance = document.createElement("a");
        appliance.id = i;
        appliance.textContent = listAppliance[i];
        divListAppliance.appendChild(appliance);
    }
    applianceContainer.appendChild(divListAppliance); 
}

//USTENSIL
creationListUstensil();
function creationListUstensil() {
    const divListUstensil = document.createElement("div");
    divListUstensil.classList.add("secondary-research__list");
    divListUstensil.classList.add("secondary-research__ustensils");

    for (let i=0; i<listUstensil.length; i++) {
        let ustensil = document.createElement("a");
        ustensil.id = i;
        ustensil.textContent = listAppliance[i];
        divListUstensil.appendChild(ustensil);
    }
    ustensilContainer.appendChild(divListUstensil); 
}

//TAGSCONTAINER
//Ouverture list (tagsContainer)
const list = document.querySelectorAll(".secondary-research__container");
const typeTag = document.querySelectorAll(".secondary-research__title")

let index;
let tags;

for (let i=0; i<typeTag.length; i++) {
    typeTag[i].addEventListener("click", function() {
        list[i].classList.add("active");
        index = i;

        //tags = document.querySelectorAll(".secondary-research__list a");
        tags = this.parentNode.lastChild.querySelectorAll("a");

        for (let i=0; i<tags.length; i++) {
            tags[i].addEventListener("click", addTag)
        }

        searchList();
        click();
    });
} 

//Fermeture list (tagsContainer)
function closeList() {
    list[index].classList.remove("active");
    inputs[index].value = "";

    checkMemory();
    secondaryResearch();
}

//MISE A JOUR DE LA LISTE
//Masquer les ingrédients de la liste
function hideList() {
    for (let i=0; i<tags.length; i++) {
        tags[i].classList.add("invisible");
    }
}

//Remise à 0 de la liste (afficher tous les ingrédients)
function resetList() {
    for (let i=0; i<tags.length; i++) {
        tags[i].classList.remove("invisible");
    }
}

//Mise à jour des ingrédients de la liste
function updateList() {
    hideList();
    for (let i=0; i<searchMemory.length; i++) {
        let updateList = searchMemory[i].ingredients;
        for (let j=0; j<updateList.length; j++) {
            for (let k=0; k<tags.length; k++) {
                if (tags[k].textContent === updateList[j].ingredient) {
                    tags[k].classList.remove("invisible");
                    break;
                }
            }
        }
    }
}

//MEMOIRE
//Vérification mémoire
function checkMemory() {
    if (mainMemory == "") {
        searchMemory = recipes;
    } else {
        searchMemory = mainMemory;
    }
}

//AFFICHAGE TAGS
//Ajout tag
function addTag() {
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
    deleteTag();
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
            
            for (let j=0; j<tags.length; j++) {
                if (tags[j].id === tag[i].id) {
                    tags[j].classList.remove("invisible");
                    break;
                }
            }
        });
    }
}

//FERMETURE SI CLICK SUR PAGE
function click() {
    document.addEventListener("click", function(event) {
        if (!list[index].contains(event.target)) {
            closeList();
        }
    });
}

//RECHERCHE DANS LISTE
//Rechercher dans liste ingrédient
function searchList() {
    let tagList = document.querySelectorAll(".secondary-research__list a:not(.invisible)");
    let searchListArray = [];

    for (let i=0; i<tagList.length; i++) {
        searchListArray.push(tagList[i].textContent.split(" "));
    }

    for (let i=0; i<inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
            let inputList = document.querySelector(".secondary-research__input").value;
            let input = inputList.split(" ");

            for (let i=0; i<input.length; i++) {
                hideList();
 
                for (let j=0; j<searchListArray.length; j++) {
                    let searchListTag = searchListArray[j];
                    for (let k=0; k<searchListTag.length; k++) {
                        if (searchListTag[k].toLowerCase().startsWith(input[i].toLowerCase())){
                            tagList[j].classList.remove("invisible");
                            break;
                        }
                    }
                }
            }
    
            if (input.length === 0) {
                resetList();
            }
        });
    }
}
