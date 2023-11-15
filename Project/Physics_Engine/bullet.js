class Fire{
    constructor(){
        this.position={x:100,y:100};
        this.size={width:50,height:50};
        this.velocity={x:1,y:1}
        this.acceleration=0.8;
    }
    draw(){
        c.beginPath();
        c.fillStyle="black";
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
    }
    move(){
        

    }
    update(){
        this.draw();
        this.move();
    }
}