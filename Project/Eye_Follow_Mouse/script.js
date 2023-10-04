const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// face
c.beginPath();
c.fillStyle="#ffcd00";
c.arc(250,250,150,0,360);
c.fill();

// left eyes
c.beginPath();
c.fillStyle="white";
c.arc(190,200,40,0,360);
c.fill();

//right eyes
c.beginPath();
c.fillStyle="white";
c.arc(310,200,40,0,360);
c.fill();

// left pupil
c.beginPath();
c.fillStyle="black";
c.arc(200,200,20,0,360);
c.fill();


// right pupil
c.beginPath();
c.arc(300,200,20,0,360);
c.fill();

// mouth
c.beginPath();
c.fillStyle="brown";
c.arc(250,300,80,0,1*Math.PI);
c.fill();

canvas.addEventListener("mousemove",(event) =>{
  

    let x= 200+event.clientX/2 ;
    let  y= 200+event.clientX/2 ;
   console.log(x,y);
   

})


