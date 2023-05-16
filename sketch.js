

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16
  

var count
var quadrado
var chegada,edge
 
function setup() {
  createCanvas(400, 400); 
  edge = createEdgeSprites()
  wall1 = createSprite(70,100,5, 250)
  wall2 = createSprite(120, 228, 100, 5)
  wall3 = createSprite(280, 228, 100, 5)
  wall4 = createSprite(330, 100, 5, 250)
  wall5 = createSprite(120, 290, 100, 5)
  wall6 = createSprite(280, 290, 100, 5)
  wall7 = createSprite(70,310,5, 50)
  wall8 = createSprite(330,310,5, 50)
  wall9 = createSprite(200, 332, 250, 5)
  wall10 = createSprite(100,50,50, 5)
  wall11 = createSprite(200,50,50, 5)
  wall12 = createSprite(225,30,5, 50)
  wall13 = createSprite(250,30,5, 50)
  wall14 = createSprite(300,30,5, 50)
  wall15 = createSprite(225,30,5, 50)
 quadrado = createSprite(30,50,7,7)
  chegada = createSprite(150,40,40,10)
  chegada.shapeColor = '#b9bada'
  //cores
  
  wall13.shapeColor = 'red'
  wall14.shapeColor = 'red'
  quadrado.shapeColor = 'cyan'
  

  
}





function draw() {
  background('#b9bada');
  if(keyDown('up')){
     
quadrado.velocityY = -2 
   quadrado.velocityX = 0
     }
  
 if(keyDown('down')){
    
    quadrado.velocityY = 2 
   quadrado.velocityX = 0
    }   
    
  if(keyDown('right')){
     
  quadrado.velocityY = 0 
   quadrado.velocityX = 2
     }  
   
  if(keyDown('left')){
     
    quadrado.velocityY = 0
   quadrado.velocityX = -2
    
  }
    
    if(
    
       quadrado.isTouching(wall1)||  
   quadrado.isTouching(wall2)||    
   quadrado.isTouching(wall3)||
   quadrado.isTouching(wall4)||    
   quadrado.isTouching(wall5)||    
   quadrado.isTouching(wall6)||    
   quadrado.isTouching(wall7)||     
   quadrado.isTouching(wall8)||   
   quadrado.isTouching(wall9)||
   quadrado.isTouching(wall10)||
   quadrado.isTouching(wall11) ||
   quadrado.isTouching(wall12) ||
   quadrado.isTouching(wall13) ||
   quadrado.isTouching(wall14) ||
   quadrado.isTouching(wall15) ||
    quadrado.isTouching(chegada) ||
      quadrado.isTouching(edge)
      
    ){
  quadrado.x = 30
   quadrado.y = 50
      
      quadrado.velocityY = 0
   quadrado.velocityX = 0
  }    
    
    
    
    
    
    
    
     
  
  
  
  
  
  
  
  drawSprites()
}