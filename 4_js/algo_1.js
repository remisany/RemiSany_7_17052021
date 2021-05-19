function researchName(input) {
    clearDisplay();
    for (let i=0; i<recipesName.length; i++) {      
        let dataName = recipesName[i].name;
        for (let j=0; j<dataName.length; j++) {
            if(dataName[j].toLowerCase().includes(input)) {
                displayName(recipesName[i]);
                break;   
            }
        }
    }
}