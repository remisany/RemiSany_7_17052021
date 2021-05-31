//Ecoute les touches
const input = document.querySelector(".main-research__input");
let searchTyped;

input.addEventListener("keyup", function (event) {
    const inputSearch = document.querySelector(".main-research__input").value;

    searchTyped = inputSearch.split(" ");

    if ((searchTyped.length === 1) && (searchTyped[0].length > 2)) {
        clearDisplay();
        searchNameArray = [];
        //Name
        nameArray = recipesName;
        nameMemory[0] = recipesName;
        researchName(searchTyped[0]);

        //Ingredient
        nameArray = recipesIngredient;
        nameMemory[0] = recipesIngredient;
        researchName(searchTyped[0]);

        //Ingredient
        nameArray = recipesDescription;
        nameMemory[0] = recipesDescription;
        researchName(searchTyped[0]);

    } else if (searchTyped.length > 1) {
        for (let i=1; i<searchTyped.length; i++) {
            clearDisplay();

            if(nameMemory[i] === undefined) {
                nameMemory[i] = searchNameArray;
            }

            searchNameArray = [];
            nameArray = nameMemory[i];
            researchName(searchTyped[i]);
        }
    } else if (searchTyped[0].length === 0) {
        resetDisplay();
        hideError();
        nameMemory = [];
    }
});

/*
//Ecoute le click sur la loupe
const submit = document.querySelector(".main-research__submit");

submit.addEventListener("click", function () {
    const searchClick = document.querySelector(".main-research__input").value;

    if (searchClick !== "") {
        console.log(searchClick);
    }
});
*/