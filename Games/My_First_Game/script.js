const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight


// game loop
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas,height)
}
animate();

