const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 600

class Dragon{
    constructor(){
        this.position={x:0,y:550}
        this.size={width:50,height:50}
        this.velocity={x:3,y:1}
        this.acceleration=0.8
        
    }
    draw(){
        c.beginPath();
        c.fillStyle="black"
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        this.position.x += this.velocity.x;
       
    }
    borderCollision(){
        if(this.position.x+this.size.width>=canvas.width){
            this.position.x = canvas.width-this.size.width
            console.log('collision vayo hai')
        }
    }
    update(){
        this.draw();
        this.move();
        this.borderCollision();
    }
}
let obj = new Dragon();
let obj1 = new Enemy();

// game loop
function animate(){

    c.clearRect(0,0,canvas.width,canvas.height)
    obj.update();
    obj1.update();
    requestAnimationFrame(animate);
   
}
animate();

