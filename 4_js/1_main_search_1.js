//Ecoute les touches
const input = document.querySelector(".main-research__input");
let searchTyped;

input.addEventListener("keyup", function (event) {
    const inputSearch = document.querySelector(".main-research__input").value;

    searchTyped = inputSearch.split(" ");

    if ((searchTyped.length === 1) && (searchTyped[0].length > 2)) {
        clearDisplay();
        resultArray = [];
        //Name
        searchArray = recipesName;
        research(searchTyped[0]);

        //Ingredient
        searchArray = recipesIngredient;
        research(searchTyped[0]);

        //Description
        searchArray = recipesDescription;
        research(searchTyped[0]);

    } else if (searchTyped.length > 1) {
        for (let i=1; i<searchTyped.length; i++) {
            clearDisplay();

            if (searchMemory[i] === undefined) {
                searchMemory[i] = resultArray;
            }

            resultArray = [];
            searchArray = searchMemory[i];
            research(searchTyped[i]);
        }
    } else if (searchTyped[0].length === 0) {
        resetDisplay();
        hideError();
        searchMemory = [];
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