const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = 600;
canvas.height = 600;

class Dragon{
    constructor(){
        this.position={x:10,y:10};
        this.size={width:10,length:10};
        this.velocity={x:1,y:1};
        this.acceleration=0.8;
    }
    draw(){
        c.beginPath();
        c.fillStyle="red"
        c.fillRect=(this.position.x,this.position.y,this.size.width,this.size.height);
    }
} 
let obj 


