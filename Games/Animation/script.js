const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
canvas.width = "600";
canvas.height = "600";

const playerImage = new Image();
playerImage.src='shadow_dog.png';


function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
   //c.drawImage(image,sx,sx,swidth,sheight,dx,dy,dwidth,dheight);   9 parameters in adding image
    c.drawImage(playerImage,0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}
animate();
