const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');

canvas.width="600";
canvas.height="600";

const player = new Player();
let allBullets =[];

function loop(){
    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<allBullets.length;i++){
        allBullets[i].draw();
        allBullets[i].move();
   



    }
    player.update();
    
    requestAnimationFrame(loop);

}
loop();

// all listener code is here!!!!!!
document.addEventListener("keydown",(event) =>{
    if(event.code === "ArrowUp") player.velocity.y =-5;
    if(event.code === "ArrowDown") player.velocity.y =5;
    if(event.code === "ArrowLeft") player.velocity.x =-5;
    if(event.code === "ArrowRight") player.velocity.x =5;
    if(event.code === "Space") allBullets.push(new Bullet(player.position.x +22,player.position.y));


});
document.addEventListener("keyup",(event) =>{
    if(event.code === "ArrowUp") player.velocity.y =0;
    if(event.code === "ArrowDown") player.velocity.y =0;
    if(event.code === "ArrowLeft") player.velocity.x =0;
    if(event.code === "ArrowRight") player.velocity.x =0;

});