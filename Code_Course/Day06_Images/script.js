const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "700";
canvas.height = "1000";

// loading Image
const peaky = new Image();
peaky.src ='peaky.jpeg'

// game loop
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);
    c.drawImage(peaky,0,0,700,1000);
    requestAnimationFrame(animate);
}

animate();