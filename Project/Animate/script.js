const canvas = document.getElementById("canvas");
const c =canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight ;

let pos = [];
for(let i=0;i<=10;i++){
pos[i].x
    var sx =4;
    var sy =4;
    var radius =30;
    pos.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight });

}



function animate(){
       
        
            c.clearRect(0,0,innerWidth,innerHeight);
            c.beginPath();
            c.fillStyle="#ffcd00";
            c.arc(pos[i].x,pos[i].y,radius,0,360);
            c.stroke();
    
        // canvas.addEventListener("");
        requestAnimationFrame(animate);
    
        // creating the collison on all side
        if(pos[i].x+radius> innerWidth || pos[i].x-radius <0){
            sx= -sx
        }
        if(pos[i].y+radius> innerHeight || pos[i].y-radius <0){
            sy= -sy;
        }
        x+=sx;
        y+=sy;
    }
    
    animate();
    
        