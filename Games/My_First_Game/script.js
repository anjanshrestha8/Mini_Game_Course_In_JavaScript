const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 600

class Dragon{
    constructor(){
        this.position={x:100,y:100}
        this.size={width:50,height:50}
        this.velocity={x:1,y:1}
        this.acceleration=0.8
        
    }
    draw(){
        c.beginPath();
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        this.velocity.y =this.velocity.y +this.acceleration;
        this.position.y = this.position.y + this.velocity.y;
    }
    borderCollision(){
        if(this.position.y+this.size.height>=canvas.height){
            this.position.y = canvas.height-this.size.height
            this.velocity.y = this.velocity.y * -0.8;
        }
    }
    update(){
        this.draw();
        this.move();
        this.borderCollision();
    }
}
let obj = new Dragon();
// game loop
function animate(){

    c.clearRect(0,0,canvas.width,canvas.height)
    obj.update();
    requestAnimationFrame(animate);
   
}
animate();

