let engine = new Audio("audio/engine.mp3");
let thruster = new Audio("audio/thruster.mp3");

engine.loop = true;
thruster.loop = true;
thruster.volume = 0.5;

function audioLoop () {
    if (lander.engineOn === true){
        engine.play();
    }
    else{
        engine.pause();
    }

    if (lander.rotatingLeft === true || lander.rotatingRight === true){
        thruster.play();
    }
    else{
        thruster.pause();
    }
}