const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");



canvas.addEventListener("mousemove",(event) =>{
    console.log(event.clientX,event.clientY);

    context.clearRect(0,0,300,300);
    // outer circle
    context.beginPath();
    context.fillStyle="red";
    context.arc(event.clientX,event.clientY,18,0,360);
    context.fill();
    // middle circle
    context.beginPath();
    context.fillStyle="yellow";
    context.arc(event.clientX,event.clientY,13,0,360);
    context.fill();
    // inner core circle
    context.beginPath();
    context.fillStyle="orange";
    context.arc(event.clientX,event.clientY,8,0,360);
    context.fill();
    // dot
    context.beginPath();
    context.fillStyle="black";
    context.arc(event.clientX,event.clientY,3,0,360);
    context.fill();
});

document.addEventListener("keydown", (event) =>{
    if(event.code=="ArrowUp"){
        console.log("JUMP");
    }
});