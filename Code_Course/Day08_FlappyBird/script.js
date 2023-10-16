const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "300";
canvas.height = "500";

const obj= new Bird();
const bg= new Background(0,0);
const bg1= new Background(bg.size.width,0);
const pipe = new Pipe();




// game loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);

    // 1
    // game Logic
    bg.update(obj.isDead);
    bg1.update(obj.isDead);
    pipe.draw();
    obj.update();

    // 2
    if(obj.isDead){
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
        obj.jump();
   }

})