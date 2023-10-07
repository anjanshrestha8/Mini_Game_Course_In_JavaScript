const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box{
    constructor(x,y,color){
        this.x =x;
        this.y=y;
        this.x_speed=2;
        this.y_speed=2
        this.width =40;
        this.height =40;
        this.color=color || "red";
        
    }
    draw(){
        c.beginPath();
        c.fillStyle=this.color;
        c.rect(this.x,this.y,this.width,this.height);
        c.fill();

    }
    move(){
        this.x=this.x+this.x_speed;
        this.y=this.y+this.y_speed;

        

       
    }
    update(){
        this.draw();
        this.move();
        this.checkCollision();
    }
    checkCollision(){
        // checks collision on right side
        if(this.x+this.width>canvas.width){
            console.log("right collison");
            this.x_speed=-2;
            this.color="green";
        }
        // check left collision
        else if(this.x<0){
            console.log("left collison");
            this.x_speed=+2;
            this.color="yellow";
        }

        if(this.y+this.height>canvas.height){
            console.log("buttom collison");
            this.y_speed=-2;
            this.color="white";
        }
        // check left collision
        else if(this.y<0){
            console.log("top collison");
            this.y_speed=+2;
            this.color="red";
        }

    }
    
}
var a = Math.random()*(400-0)+ 0;
var b= Math.random()*(400-0)+ 0;


const box = new Box(a,b,"blue");
const box1 = new Box(a+100,b+50,"grey");



function animate(){
    // update logic here

    c.clearRect(0,0,canvas.width,canvas.height);
    box.update();
    box1.update();
    

   
    
    requestAnimationFrame(animate);

}
animate();