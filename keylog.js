var canvas = document.getElementById("lander");
var context = canvas.getContext("2d");

context.rect(0, 0, 100, 100);
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
