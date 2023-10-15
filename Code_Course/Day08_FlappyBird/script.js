const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "300";
canvas.height = "500";

const obj= new Bird();
const bg= new Background(0,0);
const bg1= new Background(bg.size.width,0);



// game loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    bg.update(obj.isDead);
    bg1.update(obj.isDead);

    obj.update();
    
    requestAnimationFrame(animate);
}
animate();

addEventListener("keydown", (event) => {
   if(event.code === "Space"){
        obj.jump();
   }

})