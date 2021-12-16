
function setup() {
  createCanvas(400,400);
  background(51);
 
  smile = createSprite(200,200,100,100)
 
}



function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  


  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
     smile.velocityX = -1;
     
  }

 
    if (keyIsDown(UP_ARROW)) 
  {smile.velocityY = -1;
    background("yellow");
 
  }

  if (keyIsDown(DOWN_ARROW)) 
  {smile.velocityY = 1;
    background("green");
   
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {smile.velocityX = 1;
    background("red");
   
  }
  

  
  drawSprites();
}

