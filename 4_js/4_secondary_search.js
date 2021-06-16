const ingredientContainer = document.querySelector(".secondary-research__ingredients");
const applianceContainer = document.querySelector(".secondary-research__appliances");
const ustensilContainer = document.querySelector(".secondary-research__ustensils");

const inputs = document.querySelectorAll(".secondary-research__input");
const tagContainer = document.querySelector(".tag__container");

//TAGS
//Creation of research table
let listIngredient = [];
let listAppliance = [];
let listUstensil = [];

for (let i=0; i<recipes.length; i++) {
    //Ingredients
    let ingredients = recipes[i].ingredients;
    for (let j=0; j<ingredients.length; j++) {
        listIngredient.push(ingredients[j].ingredient);
    }

    //Appliances
    listAppliance.push(recipes[i].appliance);

    //Ustensils
    let ustensils = recipes[i].ustensils;
    for (let j=0; j<ustensils.length; j++) {
        listUstensil.push(ustensils[j]);
    }
}

//Duplicate deletion
listIngredient = new Set(listIngredient);
listIngredient = [...listIngredient];

listAppliance = new Set(listAppliance);
listAppliance  = [...listAppliance];

listUstensil = new Set(listUstensil);
listUstensil  = [...listUstensil];

//Creation of the list of ingredients
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

//Creation of the list of appliances
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

//Creation of the list of ustensils
creationListUstensil();
function creationListUstensil() {
    const divListUstensil = document.createElement("div");
    divListUstensil.classList.add("secondary-research__list");
    divListUstensil.classList.add("secondary-research__ustensils");

    for (let i=0; i<listUstensil.length; i++) {
        let ustensil = document.createElement("a");
        ustensil.id = i;
        ustensil.textContent = listUstensil[i];
        divListUstensil.appendChild(ustensil);
    }
    ustensilContainer.appendChild(divListUstensil); 
}

//TAGSCONTAINER
//Opening list (tagsContainer)
const list = document.querySelectorAll(".secondary-research__container");
const typeTag = document.querySelectorAll(".secondary-research__title");

let index;
let tags = document.querySelectorAll(".secondary-research__list a");
let tagsAll = document.querySelectorAll(".secondary-research__list a");
let tagList = [];

for (let i=0; i<typeTag.length; i++) {
    typeTag[i].addEventListener("click", function() {
        list[i].classList.add("active");
        index = i;

        tags = this.parentNode.lastChild.querySelectorAll("a");

        for (let i=0; i<tags.length; i++) {
            tags[i].addEventListener("click", addTag);
        }

        tagList = list[index].lastChild.querySelectorAll("a:not(.invisible)");
        
        for (let i=0; i<inputs.length; i++) {
            inputs[i].addEventListener("keyup", searchList);
        }

        //Listening to a click on the page
        document.addEventListener("click", click);

        //Closing the previously opened list
        for (let j=0; j<list.length; j++) {
            if (j != index) {
                list[j].classList.remove("active");
                inputs[index].value = "";

                checkMemory();
                secondaryResearch();
            }
        }
    });
}

//Close list (tagsContainer)
function closeList() {
    list[index].classList.remove("active");
    inputs[index].value = "";

    checkMemory();
    secondaryResearch();
}

//LIST UPDATE
//Hide tags from the list
function hideList() {
    for (let i=0; i<tagsAll.length; i++) {
        tagsAll[i].classList.add("invisible");
    }
}

//Resetting the list
function resetList() {
    for (let i=0; i<tagsAll.length; i++) {
        tagsAll[i].classList.remove("invisible");
    }
}

//List update
function updateList() {
    hideList();

    for (let i=0; i<searchMemory.length; i++) {
        let updateListIngredient = searchMemory[i].ingredients;
        for (let j=0; j<updateListIngredient.length; j++) {
            for (let k=0; k<tagsAll.length; k++) {
                if (tagsAll[k].textContent === updateListIngredient[j].ingredient) {
                    tagsAll[k].classList.remove("invisible");
                    break;
                }
            }
        }

        for (let k=0; k<tagsAll.length; k++) {
            if (tagsAll[k].textContent === searchMemory[i].appliance) {
                tagsAll[k].classList.remove("invisible");
            }
        }

        let updateListUstensils = searchMemory[i].ustensils;
        for (let j=0; j<updateListUstensils .length; j++) {
            for (let k=0; k<tagsAll.length; k++) {
                if (tagsAll[k].textContent === updateListUstensils[j]) {
                    tagsAll[k].classList.remove("invisible");
                    break;
                }
            }
        }
    }
}

//MEMORY
//Memory check
function checkMemory() {
    if (mainMemory == "") {
        searchMemory = recipes;
    } else {
        searchMemory = mainMemory;
    }
}

//TAGS DISPLAY
//Add tag
function addTag() {
    this.classList.add("invisible");

    let tag = document.createElement("p");
    tag.textContent = this.textContent;
    tag.classList.add("tag");
    tag.id = this.id;

    if (this.parentNode.classList.contains("secondary-research__ingredients")) {
        tag.classList.add("ingredient");
    } else if (this.parentNode.classList.contains("secondary-research__appliances")) {
        tag.classList.add("appliance");
    } else {
        tag.classList.add("ustensil");
    }

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


//Deletion tag
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

//CLOSING IF CLICK ON PAGE
function click(event) {
    if (!list[index].contains(event.target)) {
        closeList();
    }
}

//SEARCH IN LIST
let searchListArray = [];
let tagListArray = [];

function searchList() {
    searchListArray = [];
    tagListArray = [];
    
    for (let i=0; i<tagList.length; i++) {
        tagListArray.push(tagList[i].textContent.split(" "));
    }

    let inputList = list[index].querySelector("input").value;
    let input = inputList.split(" ");

    for (let i=0; i<input.length; i++) {
        hideList();
        for (let j=0; j<tagListArray.length; j++) {
            let searchListTag = tagListArray[j];
            for (let k=0; k<searchListTag.length; k++) {
                if (searchListTag[k].toLowerCase().startsWith(input[i].toLowerCase())){
                    searchListArray.push(searchListTag);
                    break;
                }
            }

            for (let i=0; i<searchListArray.length; i++) {
                for (let j=0; j<tagList.length; j++) {
                    if (tagList[j].textContent === searchListArray[i].join(" ")) {
                        tagList[j].classList.remove("invisible");
                    }
                }
            }
        }

        if (input.length > 1) {
            tagListArray = searchListArray;
            searchListArray = [];
        }
    }
}