function execMixingPeople(){
    if(document.getElementsByClassName('prenom').length==0){
        mixingPeople();
    }
}



function mixingPeople() {
    //On crée deux tableau, le premier contient les prénoms au format text,
    let elevesArray =
     ["Madina","Mouafak","Edward","Damien","Thibau","Joël","Déborah","Anaïs",
     "Justin","Victoria","Kévin","Allan","Antonin","Luca.R","Luca.B","Medhi",
     "Nathan","Tom","Jordan","Florent","Eleve 1","Eleve 2","Eleve 3","Eleve 4",
     "Cindy","Jeremy","Naïm", "Joker"];
    //  et le second contient des valeurs booleen.
    let checkArray =
     [Madina=false,Mouafak=false,Edward=false,Damien=false,Thibau=false,Joël=false,
     Déborah=false,Anaïs=false,Justin=false,Victoria=false,Kévin=false,Allan=false,
     Antonin=false,LucaB=false,LucaR=false,Medhi=false,Nathan=false,Tom=false,Jordan=false,
     Florent=false,Cindy=false,Jeremy=false,Naïm=false,Eleve1=false,Eleve2=false,Eleve3=false,
     Eleve4=false,Joker=false];

    let numBoolRCounter = 0; //variable pour compter le nombre de bool à vrai.
    let numberDiv = 0; //variable pour compter le nombre de Div.

    //Ci-dessous: tant que le compteur de bool vrai est inférieur au nombre d'entré dans le tableau élèves,
    // on éxecute le code suivant.
    while(numBoolRCounter<elevesArray.length){
        //Pour i valent 0, si i est inférieur au nombre d'entrés, dans le tableau élèves, alors j'incrémente i.
        for(let i=0;i<elevesArray.length;i++){
            let rNumber = Math.floor(Math.random()*(elevesArray.length)); // On crée un nombre aléatoire arrondie au supérieur.
            if(checkArray[rNumber]==false){
                numberDiv++;
                if(numberDiv%2 == 1){
                    //ajout Id
                    let createId = document.createElement("div");
                    createId.setAttribute("id", "group"+numberDiv);
                    //document.getElementById('content').setAttribute("id","SomeID"+i);
                    let createHr = document.createElement("hr");
                    let createH3 = document.createElement("h3");
                    let createGrpName = document.createTextNode("Groupe n° "+(Math.floor(numberDiv/2)+1));
                    createH3.appendChild(createGrpName);
                    document.getElementById('content').appendChild(createId);
                    document.getElementById("group"+numberDiv).appendChild(createHr);
                    document.getElementById("group"+numberDiv).appendChild(createH3);
                }
                /*
                let createDiv = document.createElement("div");
                createDiv.classList.add('prenom');
                */
                console.log(Math.floor(numberDiv/2)+1);
                let createP = document.createElement("p"+numberDiv);
                let divContent = document.createTextNode(elevesArray[rNumber]);
                createP.appendChild(divContent);
                document.getElementById("content").appendChild(createP);
                checkArray[rNumber]=true;
            }
        }
        numBoolRCounter+=1;
    }
}