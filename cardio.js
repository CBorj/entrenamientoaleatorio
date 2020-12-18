
    //----------CARDIO      
  const car=["Rodillas al pecho","Bumping jumps","Escalar","Plancha, levantarse de un salto y juntar pies y manos","Hacer V","Bachata","Bachata con rodilla","bachata cruzando","Patinar con salto","Skiping"];
  var Ca,Cb,Cc,Cd,lca;
 
 
      
      lca=car.length -1;
      Ca=parseInt(Math.random()*lca);
      do{Cb=parseInt(Math.random()*lca);}while(Ca==Cb);
      do{Cc=parseInt(Math.random()*lca);}while(Ca==Cc || Cb==Cc);
      do{Cd=parseInt(Math.random()*lca);}while(Ca==Cd || Cb==Cd || Cc==Cd);
  
  

