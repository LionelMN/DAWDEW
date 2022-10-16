let workUnitsContainer = document.getElementsByClassName("unitsContainer");

const unitsJSON = {
    "0" : {
        "title" : "PDF 1",
        "description" : "Prompt y estructuras de control",
        "route" : "./ejercicio2.1"
    },
    "1" : {
        "title" : "PDF 2",
        "description" : "Trabajando con el árbol DOM",
        "route" : "./ejercicio2.2"
    },
}

for(let i in unitsJSON){
    let card = document.createElement("div");
    card.classList.add("unitCard");
    let cardTitle = document.createElement("h4");
    let titleText = document.createTextNode(unitsJSON[i].title);
    cardTitle.appendChild(titleText);
    let cardBody = document.createElement("p");
    let bodyText = document.createTextNode(unitsJSON[i].description);
    cardBody.appendChild(bodyText);
    let link = document.createElement("a");
    link.classList.add("unitCardLink");
    link.href = unitsJSON[i].route;
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    link.appendChild(card);
    workUnitsContainer[0].appendChild(link)
}
