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

input.addEventListener("keydown", function (event) {

    if ((event.key.match(regSearchTyped)) && (event.key.length === 1)) {
        
        if (searchTyped === undefined) {
            searchTyped = event.key;
        } else {
            searchTyped = searchTyped + event.key;
        }

        if (searchTyped.length >= 3) {
            research(searchTyped);
        }
    }

    if ((event.key === "Backspace") && (searchTyped.length != 0)) {
        
        searchTyped = searchTyped.substr(0, searchTyped.length - 1);
        
        if (searchTyped.length > 2) {
            research(searchTyped);
        }
    }
});
