let elevesArray =
["Madina","Mouafak","Edward","Damien","Thibau","Joël","Déborah","Anaïs",
"Justin","Victoria","Kévin","Allan","Antonin","Luca.R","Luca.B","Medhi",
"Nathan","Jordan","Erwan","Cindy","Jeremy","Naïm"];
let tamponArray = [];
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
            //console.log(elevesArray);
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
    const char =  /^[a-zA-Z0-9]+$/;
    counter = 0;
    if(name.match(char)){
        elevesArray.push(name);
        const addName = new createUL(name);
        resetTextName();
    } else {
        return false;
    }
    //console.log(elevesArray);
});

function init(){
    for(let c=0;c<elevesArray.length;c++){
        let printName = new createUL(elevesArray[c]);
        //newArray.push(elevesArray[c]);
    }
}

function shuffle(){
    for(let c=0;c<elevesArray.length;c++)tamponArray.push(elevesArray[c]);
    if(newArray.length>0){
        newArray.splice(0,newArray.length);
    }
    for(let i=tamponArray.length;i>=0;i--){
        let rNumber = Math.floor(Math.random()*(tamponArray.length));
        newArray.push(tamponArray[rNumber]);
        let suppr = tamponArray.indexOf(tamponArray[rNumber]);
        tamponArray.splice(suppr,1);  
    }
}

let onShuffle = document.getElementById('bpRandom');
onShuffle.addEventListener('click', e => {
    let value = document.querySelector('#nbrMate').value;
    //console.log(elevesArray);
    shuffle();
    teamExist(value);
    popSkeleton(value);
    insertMate();
    //console.log('eleves array: '+elevesArray);
    //console.log('tampon array: '+tamponArray);
    //console.log('new array: '+newArray);

});

let counter = 0;
const list = document.querySelector('#team');
function popSkeleton(nbrPerTeam){
    for(let i = 0; i<Math.round(elevesArray.length/nbrPerTeam);i++){
        let numberMate = nbrPerTeam;
        
        const newTeam = document.createElement('div');
        //console.log('list: '+list.children.length);
        newTeam.className = 'group';
        newTeam.id = 'Groupe' + (i+1);
        const title = document.createElement('h3');
        let teamName = document.createTextNode('Groupe '+ (i+1));
        title.appendChild(teamName);
        newTeam.appendChild(title);
        list.appendChild(newTeam);
        for(let i=0;i<numberMate;i++){
            const p = document.createElement('p');
            /*
            let name = document.createTextNode(newArray[i]);
            p.appendChild(name);
            */
            newTeam.appendChild(p);
            p.id = 'mate'+counter;
            counter++;
        }
    }
}

function insertMate(){
    for(let lol = 0; lol< elevesArray.length;lol++){
        let id = document.querySelector('#mate'+lol);
        let mate = document.createTextNode(newArray[lol]);
        id.appendChild(mate);
    }
}

function teamExist(c){
    //console.log(Math.round(elevesArray.length/c));
    //console.log(list.childElementCount);
    //console.log((list.childElementCount)>= (Math.round(elevesArray.length/c)));
    if((list.childElementCount) === (Math.round(elevesArray.length/c))){
        //console.log(document.getElementsByClassName('group'));
        //const group = document.getElementsByClassName('group');
        
        //console.log(document.querySelector('#team').removeChild(document.getElementsByTagName('group')));
        //document.getElementById('team').innerHTML = "";
        console.log('avant while: '+list.childElementCount);
        let i = list.childElementCount;

        while(list.childElementCount >1){
            document.querySelector('#Groupe'+i).remove();
            
            console.log('list element count: '+list.childElementCount);
            console.log('which group: '+document.querySelector('#Groupe'+i));
            console.log(i);
            i--;
        }
        console.log('après while: '+list.childElementCount);

        /*
        for(let i = 1; i <list.childElementCount; i++){
            console.log(document.querySelector('#Groupe'+i))
            console.log(i);
            document.querySelector('#Groupe'+i).remove();
           
        }
        */
        console.log('REMOVE');
    }
}
function resetTextName(){
    document.getElementById('inputName').value = '';
}