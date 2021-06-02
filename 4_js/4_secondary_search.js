const ingredientContainer = document.querySelector(".secondary-research__ingredients");

//Suppression doublon
listIngredient = new Set(listIngredient);
listIngredient = [...listIngredient];

//Creation de la liste des ingrédients 
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
            researchList(searchList[0]);
    
        } /*else if (searchList.length > 1) {
            for (let i=1; i<searchList.length; i++) {
                clearList();
    
                if (searchListMemory[i] === undefined) {
                    searchListMemory[i] = resultListArray;
                }
    
                resultListArray = [];
                searchListArray = searchListMemory[i];
                console.log(searchListArray);
                researchList(searchList[i]);
            }
        } else if (searchList[0].length === 0) {
            searchListMemory = [];
        } */
    });
}

//Ouvrir tagsContainer
const list = document.querySelectorAll(".secondary-research__container");

for (let i=0; i<list.length; i++) {
    list[i].addEventListener("click", function() {
        this.classList.add("active");
    });
} 

const tagIngredients = document.querySelectorAll(".secondary-research__list a");
const tagContainer = document.querySelector(".tag__container");
let tagArray = [];

for (let i=0; i<tagIngredients.length; i++) {
    tagIngredients[i].addEventListener("click", function() {
        this.classList.add("invisible");

        let tag = document.createElement("p");
        tag.textContent = this.textContent;
        tag.classList.add("tag");
        tag.id = this.id;
        console.log(tag.id);

        let cross = document.createElement("a");
        cross.classList.add("far");
        cross.classList.add("fa-times-circle");
        tag.appendChild(cross);

        tagContainer.appendChild(tag);

        deleteTag()
    });
}

//Suppression tag
function deleteTag() {
    const cross = document.querySelectorAll(".fa-times-circle");
    const tag = document.querySelectorAll(".tag");
    for (let i=0; i<cross.length; i++) {
        cross[i].addEventListener("click", function() {
            tagContainer.removeChild(tag[i]);
            for (let j=0; j<tagIngredients.length; j++) {
                if (tagIngredients[j].id === tag[i].id) {
                    tagIngredients[j].classList.remove("invisible");
                    break;
                }
            }
        });
    }
}