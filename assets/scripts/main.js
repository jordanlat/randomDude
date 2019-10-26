function mixingPeople() {
    let Madina = new Boolean(false);
    let Mouafak = new Boolean(false);
    let Edward = new Boolean(false);
    let Damien = new Boolean(false);
    let Thibau = new Boolean(false);
    let Joël = new Boolean(false);
    let Déborah = new Boolean(false);
    let Anaïs = new Boolean(false);
    let Allan = new Boolean(false);
    let Justin = new Boolean(false);
    let Victoria = new Boolean(false);
    let Kévin = new Boolean(false);
    let Antonin = new Boolean(false);
    let LucaR = new Boolean(false);
    let LucaB = new Boolean(false);
    let Medhi = new Boolean(false);
    let Nathan = new Boolean(false);
    let Tom = new Boolean(false);
    let Jordan = new Boolean(false);
    let Florent = new Boolean(false);
    let Eleve1 = new Boolean(false);
    let Eleve2 = new Boolean(false);
    let Eleve3 = new Boolean(false);
    let Eleve4 = new Boolean(false);
    let Cindy = new Boolean(false);
    let Jeremy = new Boolean(false);
    let Naïm = new Boolean(false);
    let Joker = new Boolean(false);

    let elevesArray = ["Madina","Mouafak","Edward","Damien","Thibau","Joël","Déborah","Anaïs","Justin","Victoria","Kévin","Allan","Antonin","Luca.R","Luca.B","Medhi","Nathan","Tom","Jordan","Florent","Eleve 1","Eleve 2","Eleve 3","Eleve 4","Cindy","Jeremy","Naïm", "Joker"];
    let checkArray = [Madina,Mouafak,Edward,Damien,Thibau,Joël,Déborah,Anaïs,Justin,Victoria,Kévin,Allan,Antonin,LucaB,LucaR,Medhi,Nathan,Tom,Jordan,Florent,Cindy,Jeremy,Naïm,Eleve1,Eleve2,Eleve3,Eleve4,Joker];

    let numBoolFCounter = 0;

    while(numBoolFCounter<elevesArray.length){
        for(let i=0;i<elevesArray.length;i++){
            let rNumber = Math.floor(Math.random()*(elevesArray.length));
            
            if(checkArray[rNumber]==false){
                let createDiv = document.createElement("div");
                let divContent = document.createTextNode(elevesArray[rNumber]);
                createDiv.appendChild(divContent);
                document.getElementById("content").appendChild(createDiv);
                checkArray[rNumber]=true;
            }
        }
        numBoolFCounter+=1;
        console.log(numBoolFCounter);
    }
}