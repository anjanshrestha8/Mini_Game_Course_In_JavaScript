class Enemy{
    constructor(){
        this.position={x:550,y:550}
        this.size ={width:50,height:50}
        this.velocity ={x:1,y:1}
    }
    draw(){
        c.beginPath();
        c.fillStyle="red"
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height)
    }
    move(){
        this.position.x =this.position.x-this.velocity.x
    }
    update(){
        this.draw();
        this.move();
    }
}