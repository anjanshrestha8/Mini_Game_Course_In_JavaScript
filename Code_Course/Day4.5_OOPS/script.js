const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box{
    constructor(){
        this.x =0;
        this.y=0;
        this.width =40;
        this.height =40;
    }
    draw(){
        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.fill();
    }
}

const box = new Box();


function animate(){
    // update logic here
    c.clearRect(0,0,canvas.width,canvas.height);
    box.draw();
    
    requestAnimationFrame(animate);

}
animate();