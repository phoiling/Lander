function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawStars();

    updateLander();
    
    drawlander();

    audioLoop();
    
    requestAnimationFrame(draw);
}
draw();