let canvas = document.getElementById("canvas"); // paper
let context = canvas.getContext("2d"); //pen


// drawing Rectangle
context.beginPath();
context.rect(0,0,50,50);
context.fill();

context.beginPath();
context.rect(60,0,50,50);
context.fill();

context.beginPath();
;
context.rect(120,0,50,50);
context.fill();


// Drawing Circle
context.beginPath();
context.arc(80,100,20,0,2*Math.PI);
context.fill();