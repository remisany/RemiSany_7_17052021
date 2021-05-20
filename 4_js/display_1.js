for (let i=0; i<recipes.length; i++) {
    display(recipes[i]);
}

//Erreur
const main = document.querySelector(".recipe__container");
const error = document.createElement("p");
error.classList.add("invisible");
error.classList.add("error");
error.textContent = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
main.appendChild(error);

function displayError() {
    if (error.classList.contains("invisible")) {
        error.classList.remove("invisible");
    };
}

function hideError() {
    if (!error.classList.contains("invisible")) {
        error.classList.add("invisible");
    }
}


//Affichage recette
function display (recipeDisplay) {
    const main = document.querySelector(".recipe__container");

	const article = document.createElement("a");
    article.classList.add("recipe");
    article.classList.add(recipeDisplay.id);
	
    const photo = document.createElement("div");
    photo.classList.add("recipe__photo");
    article.appendChild(photo);

    const info = document.createElement("div");
    info.classList.add("recipe__info");

	const title = document.createElement("div");
    title.classList.add("recipe__info__title");
	const name = document.createElement("h2");

    const time = document.createElement("div");
    time.classList.add("recipe__info__title__time");
    const timeIcon = document.createElement("span");
    timeIcon.classList.add("far");
    timeIcon.classList.add("fa-clock");
    time.appendChild(timeIcon);
    const timeMinute = document.createElement("p");

	const content = document.createElement("div");
    content.classList.add("recipe__info__content");
    const ingredients = document.createElement("div");
    ingredients.classList.add("recipe__info__content__ingredients");

	const description = document.createElement("p");
    description.classList.add("recipe__info__content__description");
	
    name.textContent = recipeDisplay.name;
	timeMinute.textContent = recipeDisplay.time + " min";

    for (let j=0; j<recipeDisplay.ingredients.length; j++) {
        const ingredient = document.createElement("p");
        ingredient.innerHTML = "<span>" + recipeDisplay.ingredients[j].ingredient + "</span>";
        if (recipeDisplay.ingredients[j].quantity != undefined) {
            ingredient.innerHTML = ingredient.innerHTML + ": " + recipeDisplay.ingredients[j].quantity;
        }
        if (recipeDisplay.ingredients[j].unit != undefined) {
                    ingredient.innerHTML  = ingredient.innerHTML  + " " + recipeDisplay.ingredients[j].unit;
        }   
        ingredients.appendChild(ingredient);
    }

	description.textContent = recipeDisplay.description;
    
	title.appendChild(name);
    time.appendChild(timeMinute);
    title.appendChild(time);
	info.appendChild(title);

    content.appendChild(ingredients);
    content.appendChild(description);
    info.appendChild(content);
    
	article.appendChild(info);

    main.appendChild(article);
}

const recipeList = document.querySelectorAll(".recipe");

function clearDisplay() {
    recipeList.forEach(function(recipe) {
        recipe.classList.add("invisible");
    });
}

function resetDisplay () {
    for (let i=0; i<recipeList.length; i++) {
        if (recipeList[i].classList.contains("invisible")) {
            recipeList[i].classList.remove("invisible");
        }
    }
}

function displayName (recipeDisplay) {
    for (let i=0; i<recipeList.length; i++) {
        if (recipeList[i].classList.contains(recipeDisplay.id)) {
            recipeList[i].classList.remove("invisible");
            break;
        }
    }
}