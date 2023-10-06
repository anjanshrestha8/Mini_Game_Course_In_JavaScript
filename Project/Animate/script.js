const canvas = document.getElementById("canvas");
const c =canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight ;






var x =Math.random()*innerWidth;
var y =Math.random()*innerHeight;
var dx =Math.random() *(3 - -1)+ -1;
var dy =Math.random() *(3 - -1)+ -1;
var radius =30;


    function animate(){
       
            
        c.clearRect(0,0,innerWidth,innerHeight);
        c.beginPath();
        c.fillStyle="#ffcd00";
        c.arc(x,y,radius,0,360);
        c.stroke();

       

        
    
        
    
        // canvas.addEventListener("");
        requestAnimationFrame(animate);
    
        // creating the collison on all side
        if(x+radius> innerWidth || x-radius <0){
            dx= -dx;
        }
        if(y+radius> innerHeight || y-radius <0){
            dy= -dy;
        }
        x+=dx;
        y+=dy;
    }
    
    animate();
    
