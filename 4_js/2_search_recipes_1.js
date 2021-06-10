let inputSearch = [];

//Fonction de recherche principale
function mainResearch() {
    inputSearch = document.querySelector(".main-research__input").value;
    let input = inputSearch.split(" ")

    for (let i=0; i<input.length; i++) {
        //Cacher recette
        hideRecipes();
        
        searchArray = [];
  
        for (let j=0; j<searchMemory.length; j++) {
            //Recherche par le nom
            searchMemoryName = searchMemory[j].name.split(" ");
            for (let k=0; k<searchMemoryName.length; k++) {
                if(searchMemoryName[k].toLowerCase().startsWith(input[i].toLowerCase())) {
                    searchArray.push(searchMemory[j]);
                    break;   
                }
            }
    
            //Recherche par la description
            searchMemoryDescription = searchMemory[j].description.split(" ");
            for (let k=0; k<searchMemoryDescription.length; k++) {
                if(searchMemoryDescription[k].toLowerCase().startsWith(input[i].toLowerCase())) {
                    searchArray.push(searchMemory[j]);
                    break;   
                }
            }
    
            //Recherche par les ingrédients
            searchMemoryIngredients = searchMemory[j].ingredients;
    
            loop : for (let k=0; k<searchMemoryIngredients.length; k++) {
                let searchMemoryIngredient = searchMemoryIngredients[k].ingredient.split(" ");
                for (let l=0; l<searchMemoryIngredient.length; l++) {
                    if(searchMemoryIngredient[l].toLowerCase().startsWith(input[i].toLowerCase())) {
                        searchArray.push(searchMemory[j]);
                        break loop;   
                    }
                }
            }
        }
    
        //Suppression doublon
        searchArray = new Set(searchArray);
        searchArray = [...searchArray];
    
        for (let i=0; i<searchArray.length; i++) {
            hideError();
            displayRecipes(searchArray[i]);
        }

        console.log(searchArray);

        if (input.length > 1) {
            searchMemory = searchArray;
        }
    }

    if(searchArray.length === 0) {
        displayError();
        mainMemory = [];
        hideList();
    } else {
        mainMemory = searchArray;
        checkMemory();
        updateList();
    }
} 