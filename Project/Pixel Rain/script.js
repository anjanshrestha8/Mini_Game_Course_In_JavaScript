const myImage = new Image();
myImage.src='peaky.jpeg';

myImage.addEventListener("load",function(){
    const canvas = document.getElementById('canvas');
    const c =canvas.getContext('2d');
    canvas.width=666;
    canvas.height=1072;

    c.drawImage(myImage,0,0,canvas.width,canvas.height);
    const pixel = c.getImageData(0,0,canvas.width,canvas.height);
    console.log(pixel);

    let particleArray =[];
    const numberParticle =500;

    let mappedImage =[];
    for(let y=0;y<canvas.height;y++){
        let row =[];
        for(let x = 0; x < canvas.width ; x++){
                const red =pixel.data[(y * 4 * pixel.width)+(x * 4)];
                const green =pixel.data[(y*4*pixel.width)+(x * 4 + 1)];
                const blue =pixel.data[(y*4*pixel.width)+(x * 4 + 2)];
                const brightness = calaculateRelativeBrightness(red, green, blue);
                const cell =[ cellBrightness = brightness];
                row.push(cell);

        }
        mappedImage.push[row];
    }

    function calaculateRelativeBrightness(red,green,blue){
        return Math.sqrt(
            (red * red) * 0.299+
            (green * green) * 0.587+
            (blue * blue ) * 0.114
        )/100;
    }

    // class for particle

    class Particle{
        constructor(){
            this.x = Math.random()*canvas.width;
            this.y = Math.random()*canvas.height;
            this.speed=0;
            this.velocity = 4;
            this.size = Math.random() *1.5 +1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);

        }
        draw(){
            c.beginPath();
            c.fillStyle="white";
            c.arc(this.x,this.y,this.size,0,360);
            c.fill();
        }
        update(){
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            console.log(this.position1,this.position2);

            this.speed = mappedImage[this.position1][this.position2];
            let movement =(2.5 - this.speed) + this.velocity;


            this.y += movement;
            // check Collision
            if(this.y >= canvas.height){
                this.y=0;
                this.x = Math.random()*canvas.width;
            }
        }
    }


   
    function createParticle(){
        for(let i =0;i<=numberParticle;i++){
            particleArray.push(new Particle());
        }
    }
    createParticle();

    function animate(){ 
    c.drawImage(myImage,0,0,canvas.width,canvas.height);
        
        
        c.globalAlpha=0.05;
        c.fillStyle ="black";
        c.fillRect(0,0,canvas.width,canvas.height);
        for(let i=0; i<= numberParticle;i++){
            
            particleArray[i].draw();
            particleArray[i].update(); 
        }
        requestAnimationFrame(animate);
    }
    animate();

});
