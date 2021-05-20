const submit = document.querySelector(".main-research__submit");

//Ecoute le click sur la loupe
submit.addEventListener("click", function () {
    const searchClick = document.querySelector(".main-research__input").value;

    if (searchClick !== "") {
        console.log(searchClick);
    }
});

//Ecoute les touches
const input = document.querySelector(".main-research__input");
let searchTyped;

input.addEventListener("keyup", function (event) {
    const inputSearch = document.querySelector(".main-research__input").value;

    if ((inputSearch!= "") && (inputSearch.length > 2)) {
        searchTyped = inputSearch.split(" ");

        if (searchTyped.length === 1) {
            tab = [];
            researchName(searchTyped[0]);
        }

        if (searchTyped.length > 1) {
            for (let i=1; i<searchTyped.length; i++) {
                if (searchTyped[i] != "") {
                    researchArrayName(searchTyped[i]);
                }
            }
        }

    } else {
        resetDisplay();
        tab = [];
        array = [];
    }
});
