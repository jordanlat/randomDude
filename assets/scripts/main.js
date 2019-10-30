function execMixingPeople(){
    let getDiv = document.getElementById("content");
    let list = getDiv.getElementsByTagName("p");
    //document.getElementById("content").innerHTML = list.length;
    if(list.length == 0){
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

/*
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
                    let createHr = document.createElement("hr");
                    let createH3 = document.createElement("h3");
                    let createGrpName = document.createTextNode("Groupe n° "+(Math.floor(numberDiv/2)+1));
                    createH3.appendChild(createGrpName);
                    document.getElementById('content').appendChild(createId);
                    document.getElementById("group"+numberDiv).appendChild(createHr);
                    document.getElementById("group"+numberDiv).appendChild(createH3);
                }
                console.log("group"+numberDiv);
                let createP = document.createElement("p");
                let divContent = document.createTextNode(elevesArray[rNumber]);
                createP.appendChild(divContent);
                document.getElementById("content").appendChild(createP);
                checkArray[rNumber]=true;
            }
        }
        numBoolRCounter+=1;
    }
*/

    function getRandomName () {
        let rNumber = Math.floor(Math.random()*(elevesArray.length));
    }
    function createDiv (x) {
        /*
            Je veux créer une fonction qui va créer une Div id="group"+numero de groupe.
            Dans cette div id je veux un h2 et 2 p classe = numeros d'apparition
        */
        let nP = 0; // Le nombre de p créer
        let addDiv = document.createElement('div');
        addDiv.classList.add("group"+x);
        let addTitle = document.createElement("h3");
        addTitle.classList.add("Groupe "+x);

        let addP = document.createElement("p");
        addP.setAttribute("id",nP);
    }

}