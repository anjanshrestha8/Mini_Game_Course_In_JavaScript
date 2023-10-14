class Bullet{
    constructor(x=0,y=0){
        this.position ={x:x,y:y,};
        this.size ={width:20,height:20};
        this.velocity ={x:0,y:-10,};
        this.image= new Image();
        this.image.src ="bullet.png"
    }
    draw(){
        c.beginPath();
        // c.fillStyle="white";
        c.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height);
        // c.fill();
    }
    
    move(){
        this.position.y += this.velocity.y;
    }
}