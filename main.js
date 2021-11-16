function changeTitle() {
    let newTitle = prompt("What's your name?");
    let titleElement = document.getElementById("title");

    titleElement.innerText = 'Welcome ' + newTitle + ' to the world of RPG'

}

let GameManager = {
setGameStart: function(classType) {
this.resetPlayer(classType);
this.setPreFight(classType);
},
resetPlayer: function(classType) {
switch (classType) {
    case "Slayer":
        player = new Player(classType, 500, 50, 300, 100, 50);
        break;
    case "Witch":
        player = new Player(classType, 500, 200, 30, 40, 300);
        break;
    case "Assassin":
        player = new Player(classType, 500, 100, 100, 200, 50);
        break;
    case "Ranger":
        player = new Player(classType, 500, 70, 100, 300, 50);
        break;
}
    let getInterface = document.querySelector(".player");
    getInterface.innerHTML = '<img src="img/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Dexterity: ' + player.dexterity + '</p><p>Intelligence: ' + player.intelligence + '</p></div>';
},
setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".action");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Find an enemy!</p>';
    getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an Enemy</a>';
    getArena.style.visibility = "visible";
},
setFight: function() {
    let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".action");
    let getEnemy = document.querySelector(".enemy");
    // Create enemy
    let enemy1 = new Enemy("Enemy", 100, 0, 20, 20, 20);
    let enemy2 = new Enemy("Enemy", 200, 0, 20, 20, 20);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    
    switch (chooseRandomEnemy) {
    case 0:
        enemy = enemy1;
        break;
    case 1:
        enemy = enemy2;
        break;
    }

    getHeader.innerHTML = '<p>Attack now</p>';
    getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="img/enemy.jpg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Dexterity: ' + enemy.dexterity + '</p><p>Intelligence: ' + enemy.intelligence + '</p></div>';
}
}

let player;

function Player(classType, health, mana, strength, dexterity, intelligence) {
    this.classType = classType;
    this.health = health
    this.mana = mana;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
}

let enemy;

function Enemy(enemyType, health, mana, strength, dexterity, intelligence) {
    this.enemyType = enemyType;
    this.health = health
    this.mana = mana;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
}

