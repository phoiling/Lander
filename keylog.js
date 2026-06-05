var canvas = document.getElementById("lander");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var lander = 
{
    color: "black",
    width: 25,
    height: 100,

    position:{
        x: 100,
        y: 100
    },
    angle:0,
    engineOn: false,
    rotatingLeft: false,
    rotatingRight: false,
}
var x = 0



function drawlander(){
    context.save();
    context.beginPath();
    context.translate(lander.position.x, lander.position.y);
    context.rotate(lander.angle)
    context.rect(lander.width * -0.5 , lander.height * -0.5 , lander.width , lander.height);
    context.ellipse(0 ,lander.height * -0.5, lander.width/2 , lander.height/4 , 0, 0, 2*Math.PI)
    context.fillStyle = lander.color
    context.fill();
    context.closePath();


    if (lander.engineOn){
        context.beginPath();
        context.moveTo(lander.width * -0.5, lander.height * 0.5);
        context.lineTo(lander.width * 0.5, lander.height * 0.5);
        context.lineTo(0, lander.height+ Math.random() * 5);
        context.lineTo(lander.width * -0.5, lander.height * 0.5);
        context.closePath();
        context.fillStyle = "orange"
        context.fill();
    }
    context.restore();
}

function updateLander()
{
    if(lander.rotatingRight)
    {
        lander.angle += Math.PI / 180;
    }
     if(lander.rotatingLeft)
    {
        lander.angle -= Math.PI / 180;
    }
    if (lander.engineOn)
    {
        lander.position.x += Math.sin(lander.angle)
        lander.position.y -= Math.cos(lander.angle)
    }
}

function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    updateLander();
    
    drawlander();
     
    requestAnimationFrame(draw);
}

draw();



document.addEventListener('keydown', function(event) {
    if (event.key === 'W' || event.key ==='w'){
        console.log('W');
        lander.engineOn = true
    }
    if (event.key === 'A' || event.key ==='a'){
        console.log('A');
        lander.rotatingLeft = true
    }
    if (event.key === 'D' || event.key ==='d'){
        console.log('D');
        lander.rotatingRight = true
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'W' || event.key ==='w'){
        lander.engineOn = false
    }
    if (event.key === 'A' || event.key ==='a'){
        lander.rotatingLeft = false
    }
    if (event.key === 'D' || event.key ==='d'){
        lander.rotatingRight = false
    }
});