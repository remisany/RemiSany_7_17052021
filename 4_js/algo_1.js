let tab = [];
let array = [];

function researchName(input) {
    clearDisplay();

    /*
    for (let i=0; i<recipesName.length; i++) {      
        let dataName = recipesName[i].name;
        for (let j=0; j<dataName.length; j++) {
            if(dataName[j].toLowerCase().includes(input)) {
                tab.push(recipesName[i]);
                break;   
            }
        }
    }

    for (let i=0; i<tab.length; i++) {
        displayName(tab[i]);
    }*/
}

function researchArrayName(input) {
    
    for (let i=0; i<tab.length; i++) {
        array.push(tab[i]);
        let arrayName = array[i].name;
        for (let j=0; j<arrayName.length; j++) {
            if (arrayName[j].toLowerCase().includes(searchTyped[0])) {
                //arrayName.splice(j,1);
            }
        }
    }

    console.log(tab);
    console.log(array);
    console.log("stop");

/*
    for (let i=0; i<tab.length; i++) {
        let tabName = tab[i].name;
        for (let j=0; j<tabName.length; j++) {
            if(tabName[j].toLowerCase().includes(input)) {
                console.log(tab[i]);
                break;
            }
        }
    }

    for (let i=0; i<tab.length; i++) {
        displayName(array[i]);
    }*/

}