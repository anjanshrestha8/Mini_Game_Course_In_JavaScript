const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;



class Ball{
    constructor(){
        this.x =100;
        this.y=100;
        this.r=50;
        this.x_speed=3;
        this.y_speed=2;

        
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,360);
        c.fillStyle="red";
        c.fill();
    }
    update(){
        this.y=this.y+this.y_speed;
        this.x=this.x+this.x_speed;
    }

    checkCollision(){
        //right
        if(this.x+this.r > canvas.width){
            this.x_speed=-3;
        }
    }
}
 let obj = new Ball();
 

 function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    obj.draw();
    obj.update();
    obj.checkCollision();

    requestAnimationFrame(animate);


 }

 animate();
