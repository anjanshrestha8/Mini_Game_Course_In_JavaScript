const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.beginPath();
context.rect(60,0,50,50);
context.fill();

canvas.addEventListener("mousemove",(event) =>{
    console.log(event.clientX,event.clientY);

    context.clearRect(0,0,300,300);

    context.beginPath();
    context.fillStyle="red";
    context.arc(event.clientX,event.clientY,20,0,360);
    context.fill();
});

document.addEventListener("keydown", (event) =>{
    if(event.code=="ArrowUp"){
        console.log("JUMP");
    }
});