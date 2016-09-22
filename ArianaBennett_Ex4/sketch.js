var option = 1;

function setup(){
  createCanvas(900, 300);
  background(80);
  frameRate(4); //slow frame rate, less chaotic
}

function draw(){
  noStroke();
  //repeating equilateral triangles, width of 20
  for(var x = 0; x < 930; x +=30){
    for(var y = 0; y < 900; y +=25){
      
      if (option == 1){
        //random values for g & b, shades of red and orange
        fill(240, random(0, 255), random(0, 255));
      }
      if(option == 2){
         //random values for r & g, shades of blue and purple
         fill(random(0, 255), random(0, 255), 240);
      }
      if(option == 3){
        //shades of green and yellow
        fill(random(0, 235), 220, random(0, 235));        
      }
      //triangle coordinates
      triangle(x - 20, y + 20, x, y - 20, x + 20, y + 20);
    }
  }
 
}

//pressing the mouse cycles through three different color options
