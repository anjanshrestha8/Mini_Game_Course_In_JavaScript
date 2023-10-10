const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let totalNumber=1000;
let balls =[];

class Ball{
    constructor(){
        this.x =Math.random()*innerWidth;
        this.y =Math.random()*innerHeight;
        this.r=20;
        this.x_speed=Math.random()*0.5;
        this.y_speed=4;
        this.color= "pink";

        
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,360);
        c.strokeStyle="black";
        c.fillStyle=this.color;
        c.stroke();
        c.fill();
    }
    move(){
        this.y=this.y+this.y_speed;
        this.x=this.x+this.x_speed;
        
    }

    checkCollision(){
        // //right
        // if(this.x+this.r >= canvas.width){
        //     this.x_speed=-this.x_speed;
        //     this.color='green';

        // }
        // //left
        // if(this.x-this.r <=0){
        //     this.x_speed=+this.x_speed;
        //     this.color='purple';

        // }
        // //top
        // if(this.y-this.r <=0){
        //     this.y_speed=+this.y_speed;
        //     this.color='black';
        // }
        
        //buttom
        if(this.y+this.r >= canvas.height){
            this.y_speed=-this.y_speed;
            this.color="cyan";
        }else{
            this.y_speed+=1;
            console.log(this.y_speed);
            this.color="pink ";

        }
        
    }
    update(){
        this.draw();
        this.move();
        this.checkCollision();
        
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
