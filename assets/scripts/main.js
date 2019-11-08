function tinder(){
    // -- Je récupère le nombre de personne dans le groupe --
    let nbrPeople = document.getElementById("nbrMate").value;
    //Je déclare deux tableau, l'un rempli de nom, l'autre vide
    const elevesArray =
    ["Madina","Mouafak","Edward","Damien","Thibau","Joël","Déborah","Anaïs",
    "Justin","Victoria","Kévin","Allan","Antonin","Luca.R","Luca.B","Medhi",
    "Nathan","Jordan","Erwan","Cindy","Jeremy","Naïm"];  
    let newArray = [];
    //-- Je détermine le nombre de groupe --
    let nbrGrp = Math.ceil(elevesArray.length / nbrPeople);
    //console.log(nbrGrp);
    // --Si le tableau est impaire, alors j'ajoute joker --
    if(elevesArray.length%2==1){elevesArray.push("Joker");}
/* -- Function createNewArray -- */
    for(let i=elevesArray.length;i>=0;i--){
        let rNumber = Math.floor(Math.random()*(elevesArray.length));
        newArray.push(elevesArray[rNumber]);
        let suppr = elevesArray.indexOf(elevesArray[rNumber]);
        elevesArray.splice(suppr,1);  
    }
/* -- Function remove child -- */
    //console.log(document.getElementsByTagName('p').length);
    if(document.getElementsByTagName('p').length > 0){
        document.getElementById('list').innerHTML = "";
    }
/* -- Function createStructure -- */
        // -- Je déclare mes variables, pour cette fonction --
        //let halfClass = Math.floor(newArray.length/2);
        let nbrP = 0;
        let grpCounter = 1;
        // -- J'ajoute une balise HR si elle n'existe pas --
        if(document.getElementsByTagName('hr').length==0){
            let getList = document.getElementById('intro');
            let addHR = document.createElement("hr");
            getList.appendChild(addHR);
        }
        /*
            Je crée une div 'group' dans laquelle j'ajoute un titre et 2 'p'
        */
        if(document.getElementsByClassName("group").length==0){
            for (let i=0;i<nbrGrp;i++){
                // création d'un div
                let addH = document.createElement("div");
                addH.classList.add("group");
                document.getElementById('list').appendChild(addH);
                // ajout du titre
                let addTitre = document.createElement("h3");
                let addTextTitre = document.createTextNode("Groupe "+grpCounter);
                addTitre.appendChild(addTextTitre);
                addH.appendChild(addTitre);
                // ajout des 'p'
                //for(let i=0;i<2;i++){
                for(let i=0;i<nbrPeople;i++){
                    let addP = document.createElement("p");
                    addP.setAttribute("id","group"+nbrP);
                    let addTextP = document.createTextNode("");
                    addP.appendChild(addTextP);
                    addH.appendChild(addP);
                    nbrP++;
                }
                grpCounter++;
            }
        }
/* -- Function insertName -- */
// -- pour chaque entré de newArray, on va vider le 'p' puis remplacer la valeur dans newArray --
        for(let i=0; i<newArray.length;i++){
            document.getElementById("group"+i).innerHTML= "";
            let target = document.getElementById("group"+i).innerHTML;
            //let target = document.getElementById("group"+i);
            let update = target.replace("",newArray[i]);
            document.getElementById("group"+i).innerHTML = update;
        }
    console.log("fin");
}

/* -- Scroll to Top BP -- */

let backToTopBP  = document.getElementById('scrollTop');
window.onscroll = function() {this.hideSeek();}
function hideSeek(){
    let scrollStatus = document.documentElement.scrollTop;
    /*console.log(scrollStatus);*/
    if(scrollStatus > 700){
        backToTopBP.style.display = "block";
        //console.log("hein?!");
        
        if(backToTopBP.style.display == "block"){
            //console.log("j'ai tendance à bloquer"); 
            /*
            backToTopBP.style.transition = "opacity 3s";
            */
           backToTopBP.style.display = "block";
        }
        
        /*


        ----- objctv faire apparaitre le button smoothly ----

        object.style.transition="property duration timing-function delay|initial|inherit"

        backToTopBP.style.transitionProperty = "display";
        backToTopBP.style.transitionDuration = "4s";
        backToTopBP.style.transitionDelay = "1s";
        */
        /*
        transition-property: font-size;
        transition-duration: 4s;
        transition-delay: 2s;
        */
       /*
        const getBp = document.getElementById('idTopBp');
        getBp.style.opacity = 1;
        getBp.style.transition = "opacity 3s";
        console.log('transition');
        */
    } else {
        backToTopBP.style.display = "none";
        //console.log("Je ne bloque plus, merci");
    }
}

function toTop(){
    /*document.body.scrollTop = 0;*/
    document.documentElement.scrollTop = 0;
}

/* //Tentative d'inclusion de donné dans le js
document.getElementById("submit").addEventListener("click",
function addName() {
    let getValue = document.querySelector("#name").value;
    console.log(getValue);
    elevesArray.push(getValue);
}
);
*/