class Pipe{
    constructor(){
        this.position ={
            x:canvas.width-10,
            y:0,
        }
        this.velocity ={
            x:-1 ,
            y:0,
        }
        this.size ={
            width: 50,
            height: 300,
        }
        this.image = new Image();
        this.image.src="./pipe-up.png"
    }
        // draw upper pipe
    drawUpper(){
        c.beginPath();
        c.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height);

        
    }
    // draw lower pipe
    drawLower(){
        c.beginPath();
        c.fillStyle = "red"
        c.fillRect(this.position.x ,this.position.y +this.size.height +150,this.size.width,this.size.height)
       
    }
    checkCollision(){
        if(this.position.x + this.size.width >= bird.position.x - bird.size.width/2 &&
          this.position.x <= bird.position.x+ bird.size.width - bird.size.width/2 &&
          this.position.y + this.size.height >= bird.position.y &&
          this.position.y <= bird.position.y + bird.size.height)
          {
            
            bird.isDead=true; 
        }

    }
    moveLeft(){
        if(this.position.x + this.size.width <= 0){
            this.position.x = canvas.width;
            this.size.height= Math.random() *(200-30) + 30;

        }
        this.position.x += this.velocity.x; 

   }
    update(isDead){
        this.draw();
        this.draw1();
        this.checkCollision();
        if(! isDead){
            this.moveLeft();
        }
    }
}