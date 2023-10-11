const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width="500"
canvas.height="500"

let color ="red"

let totalBox =1000;

let boxs =[];

class Box{
    constructor(){
        this.position ={x:Math.random()*450,y:Math.random()*450};
        this.size={width:50,height:50};
        
       
    }
    draw(){
        c.beginPath();
        c.fillStyle=color;
        c.rect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fill();
    }
    
    borderCollison(){
        if(this.position.y+this.size.height > canvas.height){
            this.position.y =canvas.height - this.size.height;
            this.velocity.y = this.velocity.y * -0.8;
            
        }
    }
    colloision(){
        this.size.width=0;
    }

}





let x;
let y;
canvas.addEventListener("mousemove",(event) =>{
    x=event.clientX;
    y=event.clientY;

});

// box object store garxa
for(let i =0; i<=totalBox;i++){
   
    boxs.push(new Box());
}

let obj = new Box();




function animate(){
   

    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i =0; i<=100;i++){
        boxs[i].draw();
    }
    // obj.draw();
    c.beginPath();
    c.rect(x,y,50,50);
    c.fill();


        // box ma collison cheeck garxa
        for(let i=0;i<=totalBox;i++){
            if(x + 50 > boxs[i].position.x  && boxs[i].position.x+50 > x && y+50 > boxs[i].position.y && boxs[i].position.y +50 >y ){
                console.log("collison vako xa ");
        boxs[i].colloision();

        }
        // obj.move();
        // obj.borderCollison();
        // color='black'
    }//else{
    //     color='red'
    // }
  

    requestAnimationFrame(animate);
}
animate();
