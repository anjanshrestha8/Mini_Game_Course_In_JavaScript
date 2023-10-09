let canvas = document.getElementById("canvas");
let c =canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let star=[];
let meteor=[]

// moon ko code yeta xa 
class Moon{
    constructor(){
        this.x =150;
        this.y=150;
        this.size=100;
    }
    draw(){
        c.save();
        c.beginPath();
        c.arc(this.x,this.y,this.size,0,360);
        c.shadowColor="rgba(254,247,144,1)";
        c.shadowBlur=70;
        c.fillStyle="rgba(254,247,144,0.7)";
        c.fill();
        c.restore();
    }
}


// star ko code yeta xa
class Star{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size=Math.random() +1;
        this.blinkChance =0.0005;
        this.alpha=1;
        this.alphaChange=0;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.size,0,360);
        c.fillStyle='rgba(255,255,255,1)';
        c.fill();
    }
    update(){
        // if(this.alphaChange === 0 && Math.random()<this.blinkChance){
        //     this.alphaChange =-1;
        // }else if(this.alphaChange!==0){
        //     this.alpha += this.alphaChange*0.05;
        //     if(this.alpha <= 0){
        //         this.alphaChange = 1;
        //     }else if(this.alpha >=1){
        //         this.alphaChange=0;
        //     }
        // }


    }

}
// star lai array vitra haleko
for(let i=0;i<=innerWidth*innerHeight*0.0001;i++){
    star.push(new Star());
    

}

// meteor ko code yeta xa
class Meteor{
    constructor(){
        this.reset();
    }
    reset(){
        this.x=Math.random()*innerWidth+300;
        this.y=-100;
        this.size=1;
        this.speed =(Math.random()+0.5)*5;
    }
    draw(){
        c.save();
        c.strokeStyle="rgba(255,255,255,0.3)";
         c.lineCap="round";
         c.shadowColor="rgba(255,255,255,0.01)";
         c.shadowBlur=70;
        for(let i =0;i<=10;i++){
            c.beginPath();
            c.moveTo(this.x,this.y);
            c.lineWidth = this.size;
            c.lineTo(this.x+10*(i),this.y-10*(i+1));
            c.stroke();
        }
        c.restore();

    }
    update(){
        this.x-= this.speed;
        this.y+= this.speed;
        if(this.y >innerHeight+100){
            this.reset();
        }
    }
}
//meteor lai array ma push gareko 
for(let i=0;i<2;i++){
    meteor.push(new Meteor());

}

// moon ko object 
let obj = new Moon();


// star ra meteor lai draw gareko xa 
function drawScene(){
    obj.draw();
    meteor.map((meteor) =>{
        meteor.draw();
        meteor.update();
    })
    star.map((star)=>{
        star.draw();
        star.update();
    });

}

// game loop
function animationLoop(){
    c.clearRect(0,0,innerWidth,innerHeight);
    drawScene();
  
    requestAnimationFrame(animationLoop);
}
animationLoop();

