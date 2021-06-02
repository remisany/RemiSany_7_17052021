const ingredientList = document.querySelectorAll(".secondary-research__list a");

function clearList() {
    ingredientList.forEach(function(ingredient) {
        ingredient.classList.add("invisible");
    });
}