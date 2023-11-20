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
    constructor(x,y,size,color){
        this.position={x:x,y:y};
        this.size=size;
        this.color=color;
        this.velocity=12;
        this.acceleration=1;
       this.jumpPressed=false;
    }
    draw(){
        c.beginPath();
        c.fillStyle=this.color;
        c.rect(this.position.x,this.position.y,this.size,this.size);
        c.fill();
    }
   jump(){
        if(this.jumpPressed){
            this.velocity= this.velocity*this.acceleration;
            this.position.y-=this.velocity*this.acceleration;
            console.log("true")
        }
   }
   down(){
    if(this.jumpPressed ==false){
        this.velocity= this.velocity*this.acceleration;
        this.position.y+=this.velocity*this.acceleration;
    }
                
   }
    update(){
        this.draw();
        
    }
} 
let player = new Dragon(150,500,50,"black");
let enemy = new Enemy();
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    background();
    player.draw();
    enemy.update();
    
    requestAnimationFrame(animate);
}

animate();

addEventListener("keydown",event =>{
    if(event.code==="Space"){
     player.jumpPressed=true;
     player.jump();
    }
});
addEventListener("keyup",event =>{
    if(event.code ==="Space"){
        player.jumpPressed=false;
        player.down();
    }
})
    


