const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width="700"
canvas.height="600"

let color ="rgb(100,100,100)"

let totalBox =2500;

let boxs =[];

const image= new Image() ;
image.src="manga.jpeg"


class Box{
    constructor(){
        this.position ={x:Math.random()*650,y:Math.random()*950};
        this.size={width:Math.random()*50,height:Math.random()*50};
        
       
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
    


let i =Math.random()*(3-0) + -0;
function animate(){
   

    c.clearRect(0,0,canvas.width,canvas.height);
    c.drawImage(image,0,0,700,1000); 
    for(let i =0; i<=totalBox;i++){
        boxs[i].draw();
    }
    // obj.draw();
    c.beginPath();
    c.strokeStyle="black"
    c.fillStyle="white";
    c.rect(x,y,50,50);
    c.fill();
    c.stroke();
   


        // box ma collison cheeck garxa
        for(let i=0;i<=totalBox;i++){
            if(x + 50 > boxs[i].position.x  && boxs[i].position.x+50 > x && y+50 > boxs[i].position.y && boxs[i].position.y +50 >y ){
                
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

