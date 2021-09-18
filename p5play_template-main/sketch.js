
function setup() {
  createCanvas(400,400);
  box = createSprite(210,211, 500, 1)
}

function draw()

{
  background(30);
if (keyIsDown(UP_ARROW))
{
box.position.y = box.position.y-3
}
  drawSprites()
}




