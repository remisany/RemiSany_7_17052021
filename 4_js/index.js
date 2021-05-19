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
var searchTyped;
var searchTypedArray = [];
const regSearchTyped = /[a-zA-Zéèê_\s]/g;

input.addEventListener("keyup", function (event) {

    const typed = document.querySelector(".main-research__input").value;

    if ((typed != "") && (typed.length > 2)) {
        searchTyped = typed;
        researchName(searchTyped);
    } else {
        searchTyped = "";
        initialize();
    }
});
