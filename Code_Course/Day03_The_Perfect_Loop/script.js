const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


let x=0;
let y =0
setInterval(() =>{
    context.clearRect(0,0,300,300);
    console.log("x=",x);
    context.beginPath();
    context.rect(x,0,50,50);
    context.fill();
    x+=1;

    console.log("y=",y);
    context.beginPath();
    context.rect(0,y,50,50);
    context.fill();
    y+=1;
    

},1000/60); // 60 fps