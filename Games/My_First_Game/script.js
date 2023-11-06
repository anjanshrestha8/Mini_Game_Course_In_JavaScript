const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600;
canvas.height = 600;

// forms background
// function background(){
//     c.beginPath();
//     c.moveTo(0,400);
//     c.lineTo(600,400);
//     c.lineWidth = 1.9;
//     c.strokeStyle="black";
//     c.stroke();
// }
// Dragon Class
class Dragon{
    constructor(){
        this.position={x:150,y:350}
        this.size={width:50,height:50}
        this.velocity={x:3,y:-10 }
        this.acceleration=0.8
        
    }
    draw(){
        c.beginPath();
        c.fillStyle="black"
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y +=this.velocity.y;
    }
    update(){
        this.draw();
        this.move();
        this.checkCollision();
        
    }
}

let obj = new Dragon();

// game loop
function animate(){

    c.clearRect(0,0,canvas.width,canvas.height)
    // background();
    obj.update();
    requestAnimationFrame(animate);
   
}
animate();

window.addEventListener("keypress",(event) =>{
    // console.log(event);
    if(event.code== 'Space'){
        obj.move();
    }
});





