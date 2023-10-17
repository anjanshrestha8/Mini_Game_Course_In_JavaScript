const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "300";
canvas.height = "500";

const bird= new Bird();
const bg= new Background(0,0);
const bg1= new Background(bg.size.width,0);
const pipe = new Pipe();




// game loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);

    // 1
    // game Logic
    bg.update(bird.isDead);
    bg1.update(bird.isDead);
    pipe.update(bird.isDead);
    bird.update();

    // 2
    if(bird.isDead){
        c.beginPath();
        c.fillStyle="black";
        c.font = "40px sans serif bold";
        c.fillText("Game Over", (canvas.width/4)-10, canvas.height/4);
    }
    
    requestAnimationFrame(animate);
}
animate();

addEventListener("keydown", (event) => {
   if(event.code === "Space"){
        bird.jump();
   }

})