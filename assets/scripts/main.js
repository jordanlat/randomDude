function tinder(){
    let elevesArray =
    ["Madina","Mouafak","Edward","Damien","Thibau","Joël","Déborah","Anaïs",
    "Justin","Victoria","Kévin","Allan","Antonin","Luca.R","Luca.B","Medhi",
    "Nathan","Jordan","Erwan","Cindy","Jeremy","Naïm"];  
    let newArray = [];
    for(let i=elevesArray.length;i>=0;i--){
        let rNumber = Math.floor(Math.random()*(elevesArray.length));
        newArray.push(elevesArray[rNumber]);
        let suppr = elevesArray.indexOf(elevesArray[rNumber]);
        elevesArray.splice(suppr,1);  
    }
    function addStructure(){
        let halfClass = Math.floor(newArray.length/2);
        let nbrP = 0;
        let n = 1;
        if(document.getElementsByClassName("group").length==0){
            for (let i=0;i<halfClass;i++){
                
                let addH = document.createElement("div");
                addH.classList.add("group");
                document.getElementById('list').appendChild(addH);

                let addTitre = document.createElement("h3");
                let addTextTitre = document.createTextNode("Groupe "+n);
                addTitre.appendChild(addTextTitre);
                addH.appendChild(addTitre);

                for(let i=0;i<2;i++){
                    let addP = document.createElement("p");
                    addP.setAttribute("id","group"+nbrP);
                    let addTextP = document.createTextNode("");
                    addP.appendChild(addTextP);
                    addH.appendChild(addP);
                    nbrP++;
                }
                n++;
            }
        }
    }
    addStructure();
    function insertNameIntoP(){
        for(let i=0; i<newArray.length;i++){
            document.getElementById("group"+i).innerHTML="";
            let target = document.getElementById("group"+i).innerHTML;
            let update = target.replace("",newArray[i]);
            document.getElementById("group"+i).innerHTML = update;
        }
    }
    insertNameIntoP();
}
