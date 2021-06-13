const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function nettoieCanvas(){
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.strokeRect(0,0,canvas.width, canvas.height);
}

// Variables

// Vitesse sur X
vx = 10;
// Vitesse sur Y
vy = 0;

let snake = [{x:140, y:150},{x:130, y:150},{x:120, y:150},{x:110, y:150},]

function animation(){


        setTimeout(function(){
            
            nettoieCanvas();
            
            faireAvancerSerpent();
    
            dessineLeSerpent();
    
            // recursion
            animation();
    
        }, 100);
    
}
animation();


function dessineLesMorceaux(morceau) {

    ctx.fillStyle = "#00fe14";
    ctx.strokeStyle = 'black';
    ctx.fillRect(morceau.x, morceau.y, 10, 10);
    ctx.strokeRect(morceau.x, morceau.y, 10, 10);

}
function dessineLeSerpent(){
    snake.forEach(morceau => {
        dessineLesMorceaux(morceau);
    })
}


function faireAvancerSerpent() {

    const head = {x: snake[0].x + vx, y: snake[0].y + vy};
    snake.unshift(head);
    snake.pop();


}
dessineLeSerpent();

document.addEventListener('keydown', changerDirection);

function changerDirection(event) {
    // console.log(event);


    const FLECHE_GAUCHE = 37;
    const FLECHE_DROITE = 39;
    const FLECHE_ENHAUT = 38;
    const FLECHE_ENBAS = 40;

    const direction = event.keyCode;

    const monter = vy === -10;
    const descendre = vy === 10;
    const adroite = vx === 10;
    const agauche = vx === -10;

     // Imaginons que l'on veuille aller à gauche (premier cas)
    // on appuie sur la touche gauche, donc direction === FLECHE_GAUCHE === true
    // puis on verifie que l'on est pas entrain d'aller à droite, pour eviter que le serpent se retourne sur lui-même
    // donc si on va à droite, "adroite === true", donc on écrit !adroite (inverse de adroite, donc false) pour empecher la condition && de s'executer.
    if(direction === FLECHE_GAUCHE && !adroite) { vx = -10; vy = 0; }
    if(direction === FLECHE_ENHAUT && !descendre) { vx = 0; vy = -10; }
    if(direction === FLECHE_DROITE && !agauche) { vx = 10; vy = 0; }
    if(direction === FLECHE_ENBAS && !monter) { vx = 0; vy = 10; }

}



    