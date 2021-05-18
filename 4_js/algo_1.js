function research(input) {

    for (let i=0; i<recipesName.length; i++) {
        
        let dataName = recipesName[i].name;

        for (let j=0; j<dataName.length; j++) {
            if(dataName[j].toLowerCase().includes(input)) {
                console.log(recipesName[i]);
                display(recipesName[i]);
                break;   
            }
        }
    }

}