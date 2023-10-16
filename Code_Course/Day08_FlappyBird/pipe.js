class Pipe{
    constructor(){
        this.position ={
            x:0,
            y:0,
        }
        this.velocity ={
            x:0,
            y:0,
        }
        this.size ={
            width: 100,
            height: 250,
        }
    }

    draw(){
        c.beginPath();
        c.fillStyle ="red";
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
    }
}