const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
canvas.width = "600";
canvas.height = "600";

const spriteWidth ="575";
const spriteHeight="523";

const playerImage = new Image();
playerImage.src='shadow_dog.png';
let frameX =0;
let frameY =4 ;
let gameFrame =0;
let delay =4;

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    //c.drawImage(image,sx,sx,swidth,sheight,dx,dy,dwidth,dheight);   9 parameters in adding image
    c.drawImage(playerImage,frameX * spriteWidth,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    if(gameFrame % delay == 0){
         if(frameX < 6)
        {
            frameX++;
        } 
        else 
        {
            frameX =0;
        }  
    }
  
    gameFrame ++;
    requestAnimationFrame(animate);
}
animate();
