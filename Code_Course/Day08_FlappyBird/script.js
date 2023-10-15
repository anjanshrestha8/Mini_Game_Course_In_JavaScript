const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "300";
canvas.height = "500";

// game loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    console.log("working")
    requestAnimationFrame(animate);
}
animate();