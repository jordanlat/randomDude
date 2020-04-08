/**
 * Les Variables
 */


    //les tableaux
    let elevesArray = [];
    let tamponArray = [];
    let newArray = [];

    //les DOM selector
    const bpAdd = document.querySelector('#bpAdd');
    let onShuffle = document.getElementById('bpRandom');


/**
 * La Classe
 */
    class createUL {
        constructor(name) {
            this.name = name;
            this.list = document.querySelector('#list');
            this.li = document.createElement('li');
            const li = this.li;
            this.ahref = document.createElement('a');
            let textName = document.createTextNode(this.name);

            this.ahref.appendChild(textName);
            this.li.id = this.name;
            this.ahref.href = "#";
            this.ahref.onclick = function (e) {
                let value = li.id;
                elevesArray = elevesArray.filter(item => item !== value)
                li.remove();
            };
            this.li.appendChild(this.ahref);
            this.list.appendChild(this.li);

        }
    }

/**
 * Les écouteurs
 */
    // A l'appuie sur btn submit on insère le nom dans le tableau et  on l'affiche via le DOM
    document.addEventListener("submit", function (e) {
        e.preventDefault();
        const form = document.querySelector('#form').elements;
        const name = form[0].value;
        const char = /^[a-zA-Z0-9]+$/;
        counter = 0;
        if (name.match(char)) {
            elevesArray.push(name);
            const addName = new createUL(name);
            resetTextName();
        } else {
            return false;
        }
    });

    // A l'appuie sur btn submit on génère la liste des équipes
    onShuffle.addEventListener('click', e => {
        let value = document.querySelector('#nbrMate').value;
        isTeamExist();
        shuffle();
        popSkeleton(value);
        insertMate();
    });

/**
 * Les fonctions
 */

    // Mélange aléatoirement les noms enregistré
    function shuffle() {
        for (let c = 0; c < elevesArray.length; c++)tamponArray.push(elevesArray[c]);
        if (newArray.length > 0) {
            newArray.splice(0, newArray.length);
        }
        for (let i = tamponArray.length; i >= 0; i--) {
            let rNumber = Math.floor(Math.random() * (tamponArray.length));
            newArray.push(tamponArray[rNumber]);
            let suppr = tamponArray.indexOf(tamponArray[rNumber]);
            tamponArray.splice(suppr, 1);
        }
    }

    // Génère la structure html
    function popSkeleton(nbrPerTeam) {
        let counter = 0;
        const divTeam = document.querySelector('#team');
        const createDiv = document.createElement('div');
        createDiv.id = 'content_added';
        divTeam.appendChild(createDiv);
        const divContentAdded = document.querySelector('#content_added');

        for (let i = 0; i < Math.round(elevesArray.length / nbrPerTeam); i++) {
            let numberMate = nbrPerTeam;
            const newTeam = document.createElement('div');
            newTeam.className = 'group';
            newTeam.id = 'Groupe' + (i + 1);
            const title = document.createElement('h3');
            let teamName = document.createTextNode('Groupe ' + (i + 1));
            title.appendChild(teamName);
            newTeam.appendChild(title);
            divContentAdded.appendChild(newTeam);
            for (let i = 0; i < numberMate; i++) {
                const p = document.createElement('p');
                newTeam.appendChild(p);
                p.id = 'mate' + counter;
                counter++;
            }
        }
    }

    // Vérifie si une liste à été généré
    function isTeamExist() {
        let parent = document.querySelector('#content_added');

        if (document.getElementById('team').childElementCount != 0) {
            parent.remove();
        }

    }

    // Insère les noms dans la structure HTML
    function insertMate() {
        for (let lol = 0; lol < elevesArray.length; lol++) {
            let id = document.querySelector('#mate' + lol);
            let mate = document.createTextNode(newArray[lol]);
            id.appendChild(mate);
        }
    }

    // Retire le nom de l'input
    function resetTextName() {
        document.getElementById('inputName').value = '';
    }
