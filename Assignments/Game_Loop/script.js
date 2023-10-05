const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");


let x=10;
let y=10;
let fall= true;
canvas.addEventListener("click",(event) => {
    x=event.clientX;
    y=event.clientY;
});
c.beginPath();
c.arc(10,50,10,0,360);
c.fill();

function update(){
    c.clearRect(0,0,500,500);
    c.beginPath();
    c.arc(x,y,10,0,360);
    c.fill();

     // another circle
     c.beginPath();
     c.arc(250,250,10,0,360);
     c.fill();
     
    window.requestAnimationFrame(update);
    y+=3;
}
update();

