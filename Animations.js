function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawStars();

    updateLander();
    
    drawlander();
     
    requestAnimationFrame(draw);
}
draw();