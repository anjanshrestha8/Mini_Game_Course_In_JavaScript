const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


let x=0;
// Game Loop
function update(){
    // update code
    context.clearRect(0,0,300,300)
    context.beginPath();
    context.rect(x,0,50,50);
    context.fill();
    window.requestAnimationFrame(update);
    x+=1;

}
update();