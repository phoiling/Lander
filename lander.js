var canvas = document.getElementById("lander");
var context = canvas.getContext("2d");
var gravity = 0.1
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
startStars();
var lander = 
{
    color: "white",
    width: 25,
    height: 100,

    position:{
        x: 300,
        y: 300
    },
    velocity:{
        x:0,
        y:0
    },
    angleVelocty:0.01,
    angle:0,
    engineOn: false,
    rotatingLeft: false,
    rotatingRight: false,
    thrust:{
        mainEngine:0.2,
        rotateEngine:0.0015
    },
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
        context.lineTo(0, lander.height+ Math.random() * 10);
        context.lineTo(lander.width * -0.5, lander.height * 0.5);
        context.closePath();
        context.fillStyle = "orange"
        context.fill();
    }
    context.restore();
}

function updateLander()
{
    lander.position.x += lander.velocity.x;
    lander.position.y += lander.velocity.y;
    if(lander.rotatingRight)
    {
        lander.angleVelocty += lander.thrust.rotateEngine;
    }
    if(lander.rotatingLeft)
    {
        lander.angleVelocty -= lander.thrust.rotateEngine;
    }
    if (lander.engineOn)
    {
        lander.velocity.x -= lander.thrust.mainEngine * Math.sin(-lander.angle);
        lander.velocity.y -= lander.thrust.mainEngine * Math.cos(lander.angle);
    }
    lander.velocity.y += gravity;
    lander.angle += lander.angleVelocty;
}
 

document.addEventListener('keydown', function(event) {
    if (event.key === 'W' || event.key ==='w' ){
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