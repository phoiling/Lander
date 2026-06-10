document.addEventListener('keydown', function(event) {
    if (event.key === 'W' || event.key ==='w' || event.key === 'ArrowUp'){
        console.log('W');
        lander.engineOn = true
    }
    if (event.key === 'A' || event.key ==='a' || event.key === 'ArrowLeft'){
        console.log('A');
        lander.rotatingLeft = true
    }
    if (event.key === 'D' || event.key ==='d' || event.key === 'ArrowRight'){
        console.log('D');
        lander.rotatingRight = true
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'W' || event.key ==='w' || event.key === 'ArrowUp'){
        lander.engineOn = false
    }
    if (event.key === 'A' || event.key ==='a' || event.key === 'ArrowLeft'){
        lander.rotatingLeft = false
    }
    if (event.key === 'D' || event.key ==='d' || event.key === 'ArrowRight'){
        lander.rotatingRight = false
    }
});