class Enemy{
    constructor(){
        this.position={x:550,y:550}
        this.size ={width:50,height:50}
        this.velocity ={x:5,y:1}
    }
    draw(){
        c.beginPath();
        c.fillStyle="red"
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height)
    }
    move(){
        this.position.x =this.position.x- this.velocity.x
    }
    checkCollision(){
        if(this.position.x<0){
            this.position.x=550;
            this.size.height=Math.random()*50
            this.position.y = canvas.height-this.size.height;
        }
    }
    update(){
        this.draw();
        this.move();
        this.checkCollision();
    }
}