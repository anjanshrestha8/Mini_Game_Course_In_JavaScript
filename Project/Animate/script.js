const canvas = document.getElementById("canvas");
const c =canvas.getContext("2d");


let particleArray =[];
let totalNumber =30;

    let mouseX =0;
    let mouseY =0;


    window.addEventListener("mousemove",(event) => {
        console.log(event);
         mouseX = event.clientX;
         mouseY = event.clientY;
    
    
    });
class Particle{
    constructor(color){
        this.x = Math.random()*500;
        this.y =Math.random()*500;
        this.r = Math.random()*(30-10) + 10;
        this.x_speed=3;
        this.y_speed=3;
        this.color=color||"white";
    }

    draw(){
        c.beginPath();
        c.fillStyle=this.color,0.04;
        c.arc(this.x,this.y,this.r,0,360);
        c.fill();
    }
    move(){
        this.y= this.y+this.y_speed;
        this.x= this.x+this.x_speed;
        if(mouseX - this.x < 50 && mouseX - this.x > - 50){
            this.r +=1;
        console.log(this.r);

            
        }

    }
    checkCollision(){

        //buttom
        if(this.y+this.r > canvas.height){
            this.y_speed -= 3;
            this.color="cyan";
        }
         // top
        else if(this.y< this.r){
                this.y_speed += 3;
                this.color="orange";

        }
        //left
        if(this.x + this.r > canvas.width){
            this.x_speed-= 3;
            this.color="red";

        }
        //right
        else if(this.x - this.r <=0){
            this.x_speed += 3;
            this.color="purple";

    }
       


    }
    update(){
        this.draw();
        this.move();
        this.checkCollision();

    }
} 
for(let i=0;i<=totalNumber;i++){
    particleArray.push(new Particle);

}
function animate(){
    c.clearRect(0,0,500,500);
    for(let i=0;i<=totalNumber;i++){
        particleArray[i].update();
    }

    requestAnimationFrame(animate);

}
animate();
    





        