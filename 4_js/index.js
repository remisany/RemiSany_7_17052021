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

input.addEventListener("keyup", function (event) {

    const searchTyped = document.querySelector(".main-research__input").value;

    if ((searchTyped != "") && (searchTyped.length > 2)) {
        researchName(searchTyped);
    } else {
        resetDisplay();
    }
});
