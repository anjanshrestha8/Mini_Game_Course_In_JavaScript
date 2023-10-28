const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
canvas.width =400;
canvas.height =400;

class Cannon{
    constructor(){
        this.position ={x: 10,y:350}
        this.size={width:50,height:50}
        this.velocity={x:1,y:1}
        this.acceleration=0.4;
    }
    draw(){
        c.beginPath();
        c.fillStyle="black"
        c.fillRect( this.position.x,this.position.y,this.size.width,this.size.height);
        console.log("draw")
    }
}
let cannon = new Cannon();

//game loop()
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    cannon.draw();
    
}
animate();