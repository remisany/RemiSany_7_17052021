const ingredientContainer = document.querySelector(".secondary-research__ingredients");

listIngredientArray = new Set(listIngredientArray );
listIngredientArray = [...listIngredientArray ];

const listIngredient = document.createElement("div");
listIngredient.classList.add("secondary-research__list");

for (i=0; i<listIngredientArray.length; i++) {
    let ingredient = document.createElement("p");
    ingredient.textContent = listIngredientArray[i];
    listIngredient.appendChild(ingredient);
}

ingredientContainer.appendChild(listIngredient);

//Ouvrir tagsContainer
const tagsContainer = document.querySelectorAll(".secondary-research a");

for (i=0; i<tagsContainer.length; i++) {
    tagsContainer[i].addEventListener("click", function() {
        this.classList.add("active");
    });
}


