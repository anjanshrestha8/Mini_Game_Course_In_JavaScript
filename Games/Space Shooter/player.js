class Player{
    constructor(){
        this.position ={x:300,y:300,};
        this.size ={width:60,height:60};
        this.velocity ={x:0,y:0,};
        this.playerImage = new Image();
        this.playerImage.src="ship4.png"
    }
    draw(){
        c.beginPath();
        // c.fillStyle="red";
        c.drawImage(this.playerImage,this.position.x,this.position.y,this.size.width,this.size.height);
        // c.fill();

    }

    move(){
        this.position.x  +=this.velocity.x;
        this.position.y  +=this.velocity.y;


    }
    checkCollision(){
        if(this.position.y + this.size.height > canvas.height){
            this.position.y = canvas.height - this.size.height;
        }
        if(this.position.y - this.size.height < 0){
            this.position.y = 500;
        }
        if(this.position.x + this.size.width > canvas.width){
            this.position.x = canvas.width - this.size.width;
        }
        if(this.position.x - this.size.width < 0){
            this.position.x = 550;
        }
    }
    update(){
        this.draw();
        this.move();
        this.checkCollision();

    }
    
}