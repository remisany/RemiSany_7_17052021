let recipesName = [];

for (let i=0; i<recipes.length; i++) {
    let newName =[];

    let dataName = recipes[i].name.split(" ");

    for (let j=0; j<dataName.length; j++) {
        if (dataName[j].length > 2) {
            newName.push(dataName[j]);
        }
    }

    recipesName.push({id: recipes[i].id, name: newName});
}