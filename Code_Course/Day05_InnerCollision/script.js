const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
let color ='black'
let totalNumber =1000;

let boxs =[];

class Box{
    constructor(){
        this.position={x:Math.random()*450,y:Math.random()*450};
        this.size ={width:50,height:50}
        this.velocity ={x:1,y:1}
        this.acceleration=0.4;
    }
    // draw rect
    draw(){
        c.beginPath();
        c.fillStyle = color;
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
    }
    //move rect
    move(){
        this.velocity.y = this.velocity.y + this.acceleration;
        this.position.y =this.position.y +this.velocity.y;
        // this.velocity.x = this.velocity.x + this.acceleration;
        // this.position.x =this.position.x +this.velocity.x;
    }
    // add gravity on it
    borderCollision(){
        if(this.position.y + this.size.height > canvas.height){
            this.position.y =canvas.height -this.size.height;
            this.velocity.y = this.velocity.y * - 0.4;
        }
        if(this.position.y < 0){
            // this.position.y = canvas.height + this.height;
            this.velocity.y = this.velocity.y * - 0.4;
            this.acceleration = 0.8;

        }

    }
    // collision among boxes
    // innerCollision(){
    //     if(x + 50 > this.position.x  && this.position.x+50 > x && y+50 > this.position.y && this.position.y +50 >y ){
    //     this.velocity.y = this.velocity.y - 2;

    //     this.position.y =this.position.y + this.velocity.y;
            
           
    //     }
    //     else{
    //         color="blue"
    //     }
    // }
    // call all function
    update(){
        this.draw();
        this.move();
        this.borderCollision();
        this.innerCollision();
    }
}

let x ;
let y ;

canvas.addEventListener("mousemove" , (event) =>{
    x = event.clientX;
    y = event.clientY;

});

for(let i =0;i<=totalNumber;i++){
    boxs.push(new Box());
}

// game loop
function animate(){

    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<=totalNumber;i++){
        boxs[i].update();
    }
    // new rect made using mouse hover
    c.beginPath();
    c.rect(x,y,50,50);
    c.fillStyle ="red"
    c.fill();
    requestAnimationFrame(animate);
}
animate();

