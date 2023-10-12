class Player{
    constructor(){
        this.position ={x:0,y:0,};
        this.size ={width:50,height:50};
        this.velocity ={x:0,y:0,};
    }
    draw(){
        c.beginPath();
        c.fillStyle="red";
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();

    }
    move(){
        this.position.x  +=this.velocity.x;
        this.position.y  +=this.velocity.y;


    }
    update(){
        this.draw();
        this.move();


    }
    
}