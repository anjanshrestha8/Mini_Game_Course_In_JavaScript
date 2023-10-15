class Bird{
    constructor(){
        this.position ={x:canvas.width/2,y:0};
        this.size ={width:40,height:35};
        this.velocity ={x:0,y:0};
        this.acceleration =0.3;
        this.img  = new Image();
        this.img.src="./frame-l.png"
        this.isDead = false;
    }
    draw(){
        c.beginPath();
        c.fillStyle ="red";
        c.drawImage(this.img,this.position.x - (this.size.width/2),this.position.y,this.size.width,this.size.height);
        c.fill();
       
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y +=this.velocity.y;
        console.log(this.velocity.y);

    }
    jump(){
        this.velocity.y =-5;

    }
    borderCollision(){
        if(this.position.y + this.size.height >canvas.height){
            this.position.y = canvas.height - this.size.height;
            this.isDead = true;
           
        }
    }
    update(){
        this.draw();
        if( this.isDead === false){
            this.move();
            this.borderCollision();
        }
     
    }
}