const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticleNumber = 50;

class Particle{
    constructor(){
        this.x =Math.random()*(400-0)+0;
        this.y =Math.random()*(400-0)+0;
        this.r =20;
        
    }
    draw(){
        c.beginPath();
        c.fillStyle = "blue";
        c.arc(this.x,this.y,this.r,0,360);
        c.fill();
    }
    move(){
        this.x= Math.random()*(1 - -1)+ -1;
        this.y= Math.random()*(1- -1)+ -1;

    }
}

const particleArr=[];
for(let i=0;i<totalParticleNumber;i++){
    const obj = new Particle();
    particleArr.push(obj);

}
console.log(particleArr);

// game loop
function animate(){
    c.clearRect(0,0,400,400);
    
    for(let i=0;i<totalParticleNumber;i++){
        particleArr[i].draw();
        particleArr[i].move();

    }
    requestAnimationFrame(animate);
    

}
animate();













// let x=Math.random()*(400-0)+0;   // random number generation 
// let y=Math.random()*(400-0)+0;
// let r=Math.random()*(20-5)+5;



// // const randomNumber = Math.random()*(max-min)+min; 


// // game loop
//  function animate(){
//         // your code here
//         c.clearRect(0,0,400,400);
//         c.beginPath();
//         c.arc(x,y,r,0,360);
//         c.fill();
//         window.requestAnimationFrame(animate);
    
//         x+=Math.random()*(1- -1)+ -1;
//         y+=Math.random()*(1- -1)+ -1;
    
    
// }
    
    
// animate();
