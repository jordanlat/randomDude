let elevesArray =
["Madina","Mouafak","Edward","Damien","Thibau","Joël","Déborah","Anaïs",
"Justin","Victoria","Kévin","Allan","Antonin","Luca.R","Luca.B","Medhi",
"Nathan","Jordan","Erwan","Cindy","Jeremy","Naïm"];
let newArray = [];

class createUL{
    constructor (name) {
        this.name = name;
        this.list = document.querySelector('#list');
        this.li = document.createElement('li');
        const li = this.li;
        this.ahref = document.createElement('a');
        let textName = document.createTextNode(this.name);
        
        this.ahref.appendChild(textName);
        this.li.id = this.name;
        this.ahref.href = "#";
        this.ahref.onclick = function(e){
            let value =li.id;
            elevesArray = elevesArray.filter(item => item !== value)
            li.remove();
            console.log(elevesArray);
        };
        this.li.appendChild(this.ahref);
        this.list.appendChild(this.li);
        
    }
}

const bpAdd = document.querySelector('#bpAdd');
document.addEventListener("submit",function(e){
    e.preventDefault();
    const form =  document.querySelector('#form').elements;
    const name = form[0].value;
    elevesArray.push(name);
    const addName = new createUL(name);
    console.log(elevesArray);
});

function init(){
    for(let c=0;c<elevesArray.length;c++){
        let printName = new createUL(elevesArray[c]);
        newArray.push(elevesArray[c]);
    }
}


/*  work in progresss   */
class createTeam{
    constructor(nbrTeamMates){
        const team = document.querySelector('#team');
        const div =  document.createElement('div');
        div.id = 'Groupe'+ Math.round(newArray.length/nbrTeamMates);
        team.appendChild(div);

    }
}

const test = new createTeam(elevesArray,3);