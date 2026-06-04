var canvas = document.getElementById("lander");
var context = canvas.getContext("2d");
context.moveTo(100,100)
context.lineTo(112.5,80);
context.lineTo(125,100);
context.lineTo(125,200);
context.lineTo(100,200);
context.lineTo(100,100);
context.ellipse(112.5 ,100, 12.5, 25, 0, 0, 2*Math.PI)

context.fillStyle = "red";
context.fill();


document.addEventListener('keydown', function(event) {
    if (event.key === 'W' || event.key ==='w'){
        console.log('W');
        box.style.top = 1 +'px';
    }
    if (event.key === 'A' || event.key ==='a'){
        console.log('A');
    }
    if (event.key === 'S' || event.key ==='s'){
        console.log('S');
        box.style.bottom = 'px'-1;
    }
    if (event.key === 'D' || event.key ==='d'){
        console.log('D');
    }
});
