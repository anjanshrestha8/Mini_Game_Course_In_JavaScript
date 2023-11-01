const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');
canvas.width =400;
canvas.height =400;

class Cannon{
    constructor(){
        this.position ={x: 10,y:295}
        this.size={width:70,height:60}
        this.velocity={x:1,y:1}
        this.acceleration=0.2;
        this.can = new Image();
        this.can.src="./cannon1.png"
    }
    draw(){
        c.beginPath();
        c.fillStyle="black"
        c.drawImage( this.can,this.position.x,this.position.y,this.size.width,this.size.height);
        console.log("draw")
    }
    drawStand(){
        c.beginPath();
        c.moveTo(45,350)
        c.lineTo(25,400);
        c.stroke();

        c.beginPath();
        c.moveTo(45,350)
        c.lineTo(65,400);
        c.stroke();

    }
    update(){
        this.draw();
        this.drawStand();
    }
}
let mouseX;
let mouseY;

canvas.addEventListener("mousemove",(event) =>{
    mouseX=event.clientX;
    console.log(event.clientX)
})
let cannon = new Cannon();

//game loop()
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    cannon.update();
    
}
animate();