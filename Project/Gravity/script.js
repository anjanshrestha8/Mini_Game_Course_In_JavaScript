const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let totalNumber=500;
let balls =[];




class Ball{
    constructor(){
        this.position ={
            x:Math.random()*innerWidth,
            y :Math.random()*innerHeight,

        }
        this.size ={r:Math.random()*(30-20) + 20}
        
        this.velocity ={
            x_speed:1,
            y_speed:1,
        }
        this.acceleration =0.1;
        this.color = "pink";

        
    }
    draw(){
        c.beginPath();
        c.arc(this.position.x,this.position.y,this.size.r,0,360);
        c.strokeStyle="black";
        c.fillStyle=this.color;
        c.stroke();
        c.fill();
    }
    move(){
        this.velocity.y_speed = this.velocity.y_speed + this.acceleration;
        this.position.y=this.position.y+this.velocity.y_speed;
        
        
    }

    borderCollision(){
        if(this.position.y + this.size.r >= canvas.height){
            this.position.y =canvas.height - this.size.r;
            this.velocity.y_speed = this.velocity.y_speed * - 0.8;
            this.color="cyan";
        }
        else{
            this.color="red";
        }
        
        
    }
    update(){
        this.draw();
        this.move();
        this.borderCollision();
        
    }
}

 

 function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<totalNumber;i++){
        balls.push(new Ball());
        balls[i].update();
    }
    

    requestAnimationFrame(animate);


 }

 animate();
