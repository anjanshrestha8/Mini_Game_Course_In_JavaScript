const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600;
canvas.height = 600;

// forms background
function background(){
    c.beginPath();
    c.moveTo(0,400);
    c.lineTo(600,400);
    c.lineWidth = 1.9;
    c.strokeStyle="black";
    c.stroke();
}
// Dragon Class
class Dragon{
    constructor(){
        this.position={x:150,y:350}
        this.size={width:50,height:50}
        this.velocity={x:3,y:-5}
        this.acceleration=0.8
        
    }
    draw(){
        c.beginPath();
        c.fillStyle="black"
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    jump(){
        this.velocity.y =-5;
        this.position.y = this.position.y + this.velocity.y;
        console.log("jump")
    }
    update(){
        this.draw();
        
    }
}

let obj = new Dragon();

// game loop
function animate(){

    c.clearRect(0,0,canvas.width,canvas.height)
    background();
    obj.update();
    requestAnimationFrame(animate);
   
}
animate();
console.log(obj)
window.addEventListener("keydown",(event) =>{
    if(event== "Space"){
        console.log("jump")
        obj.jump();
    }
});





