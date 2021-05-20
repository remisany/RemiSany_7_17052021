//Ecoute les touches
const input = document.querySelector(".main-research__input");
let searchTyped;

input.addEventListener("keyup", function (event) {
    const inputSearch = document.querySelector(".main-research__input").value;

    searchTyped = inputSearch.split(" ");

    if ((searchTyped.length === 1) && (searchTyped[0].length > 2)) {
        indexArray = recipesName;
        indexMemory[0] = recipesName;
        researchName(searchTyped[0]);
    } else if (searchTyped.length > 1) {
        for (let i=1; i<searchTyped.length; i++) {
             if(indexMemory[i] === undefined) {
                indexMemory[i] = searchArray;
            }
            indexArray = indexMemory[i];
            researchName(searchTyped[i]);
        }
    } else if (searchTyped[0].length === 0) {
        resetDisplay();
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