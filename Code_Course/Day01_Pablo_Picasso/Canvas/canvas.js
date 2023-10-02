let canvas = document.getElementById("Canvas"); // paper
let context = canvas.getContext("2d"); //pen


// drawing Rectangle
context.beginPath();
context.fillStyle(red);
context.rect(0,0,50,50);
context.fill();

context.beginPath();
context.fillStyle(black);
context.rect(60,0,50,50);
context.fill();

context.beginPath();
context.fillStyle(blue);
context.rect(60,0,50,50);
context.fill();


// Drawing Circle
context.beginPath();
context.fillStyle(black);
// context.arc(60,0,0,360);
context.arc(80,30,20,0,2*Math.PI);
context.fill();