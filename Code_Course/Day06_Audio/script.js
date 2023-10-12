const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = "500";
canvas.height = "500";


const backgroundMusic = new Audio();
//load this music
backgroundMusic.src="bgsound.ogg";
// play the music
function play(){
    backgroundMusic.play();
}
// game loop
function animate(){
    requestAnimationFrame(animate);
}

animate();