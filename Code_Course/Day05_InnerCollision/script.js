const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width="500"
canvas.height="500"




let x;
let y;
canvas.addEventListener("mousemove",(event) =>{
    x = event.clientX;
    y = event.clientY;    
});

function animate(){
    
    c.clearRect(0,0,canvas.width,canvas.height);

    c.beginPath();
    c.rect(200,200,50,50);
    c.fill();

    c.beginPath();
    c.rect(x,y,50,50);
    c.fill();
    requestAnimationFrame(animate);
}
animate();
