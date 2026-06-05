var canvas = document.getElementById("lander");
var context = canvas.getContext("2d");
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
    context.translate(lander.position.x, lander.position.y);
    context.beginPath();
    context.rect(lander.width * -0.5 , lander.height * -0.5 , lander.width , lander.height);
    context.ellipse(0 ,lander.height * -0.5, lander.width/2 , lander.height/4 , 0, 0, 2*Math.PI)
    context.fillStyle = lander.color
    context.fill();
    context.closePath();
    context.restore();

    if (lander.engineOn){
        
    }
}

drawlander();


document.addEventListener('keydown', function(event) {
    if (event.key === 'W' || event.key ==='w'){
        console.log('W');
    }
    if (event.key === 'A' || event.key ==='a'){
        console.log('A');
    }
    if (event.key === 'S' || event.key ==='s'){
        console.log('S');

    }
    if (event.key === 'D' || event.key ==='d'){
        console.log('D');
    }
});
