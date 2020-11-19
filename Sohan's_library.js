function istouching(obj1,obj2){

    if(obj1.x - obj2.x < obj1.width/2+obj2.width/2 
      && obj2.x- obj1.x < obj1.width/2+obj2.width/2
      && obj1.y -obj2.y < obj1.height/2+obj2.height/2
      && obj2.y - obj1.y < obj1.height/2+obj2.height/2){
        
        return true;
     }
    
     else {
      return false
     
     }
  
  }

  function bounceoff(G1,G2){
  
    if(G1.x - G2.x < G1.width/2+G2.width/2 
      && G2.x- G1.x < G1.width/2+G2.width/2) {
      
        G1.velocityX=G1.velocityX * (-1);
        G2.velocityX=G2.velocityX * (-1);
  
      }
  
      if(G1.y - G2.y < G1.height/2+G2.height/2 
        && G2.y- G1.y < G1.height/2+G2.height/2) {
        
          G1.velocityY=G1.velocityY * (-1);
          G2.velocityY=G2.velocityY * (-1);
    
        }
   
  }
  
  