const submit = document.querySelector(".main-research__submit");

submit.addEventListener("click", function () {
    const search = document.querySelector(".main-research__input").value;

    if (search !== "") {
        console.log(search);
    }
});

