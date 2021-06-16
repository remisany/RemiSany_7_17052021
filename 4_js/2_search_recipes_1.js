//LINEAR SEARCH FUNCTION
function mainResearch() {
    inputSearch = document.querySelector(".main-research__input").value;
    let input = inputSearch.split(" ");

    for (let i=0; i<input.length; i++) {
        hideRecipes();
        
        searchArray = [];
  
        for (let j=0; j<searchMemory.length; j++) {
            //Search by name
            searchMemoryName = searchMemory[j].name.split(" ");
            for (let k=0; k<searchMemoryName.length; k++) {
                if(searchMemoryName[k].toLowerCase().startsWith(input[i].toLowerCase())) {
                    searchArray.push(searchMemory[j]);
                    break;   
                }
            }
    
            //Search by description
            searchMemoryDescription = searchMemory[j].description.split(" ");
            for (let k=0; k<searchMemoryDescription.length; k++) {
                if(searchMemoryDescription[k].toLowerCase().startsWith(input[i].toLowerCase())) {
                    searchArray.push(searchMemory[j]);
                    break;   
                }
            }
    
            //Search by ingredients
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
    
        //Duplicate deletion
        searchArray = new Set(searchArray);
        searchArray = [...searchArray];
    
        //Recipe display
        for (let i=0; i<searchArray.length; i++) {
            hideError();
            displayRecipes(searchArray[i]);
        }

        if (input.length > 1) {
            searchMemory = searchArray;
        }
    }

    //If the result is zero
    if(searchArray.length === 0) {
        displayError();
        mainMemory = [];
        hideList();
    } else {
        mainMemory = searchArray;
        //Update secondary search list
        checkMemory();
        updateList();
    }
} 