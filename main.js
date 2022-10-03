let workUnitsContainer = document.getElementsByClassName("unitsContainer");

const unitsJSON = {
    "0" : {
        "title" : "Unidad 1",
        "description" : "lorem ipsum matracas vaias y más cosas",
        "route" : "./unit1"
    },
    "1" : {
        "title" : "Unidad 2",
        "description" : "lorem ipsum matracas vaias y más cosas",
        "route" : "./unit2"
    },
    "2" : {
        "title" : "Unidad 3",
        "description" : "lorem ipsum matracas vaias y más cosas",
        "route" : "./unit3"
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
