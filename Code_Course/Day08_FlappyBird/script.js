const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "300";
canvas.height = "500";

const obj= new Bird();

// game loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    obj.update();
    
    requestAnimationFrame(animate);
}
animate();

addEventListener("keydown", (event) => {
   if(event.code === "Space"){
        obj.jump();
   }

})