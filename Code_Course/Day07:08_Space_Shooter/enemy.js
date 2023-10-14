class Enemy{
    constructor(){
        this.position ={x:Math.random() *((canvas.width -50) - 10) + 10,y:-50,};
       
        this.velocity ={x:0,y:1,};
        this.size =50;
        this.image = new Image();
        this.image.src='enemy1.png';
    }
    draw(){
        c.beginPath();
        c.fillStyle="red";
c.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);

    }
    move(){
        this.position.y = this.position.y + this.velocity.y;

    }
    collision(player) {
        if (
          this.position.x + this.size >= player.position.x &&
          this.position.x <= player.position.x + player.size &&
          this.position.y + this.size >= player.position.y &&
          this.position.y <= player.position.y + player.size
        ) {
          player.isAlive = false;
          
        
        }
      }
    update(){
        this.draw();
        this.move();
       
    }
}


