function display (recipeDisplay) {
    const main = document.querySelector(".recipe_container");
    const p = document.createElement("p");
    
    for (let i=0; i<recipes.length; i++) {
        if (recipeDisplay.id === recipes[i].id) {
            p.textContent = recipes[i].name;
            break;
        }
    }
    
    main.appendChild(p);
}