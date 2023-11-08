const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600;
canvas.height = 600;

function background(){
    c.beginPath();
    c.fillStyle="grey"
    c.fillRect(0,550,600,50);
}

class Dragon{
    constructor(){
        this.position={x:300,y:10};
        this.size={width:50,height:50};
        this.velocity={x:1,y:1};
        this.acceleration=0.8;
    }
    draw(){
        c.beginPath();
        c.fillStyle="black"
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
    }
    moveUp(){
        
    }
    update(){
        this.draw();
        this.moveUp();
    }
} 
let obj = new Dragon();

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    obj.update();
    background();
    requestAnimationFrame(animate);
}

animate();


