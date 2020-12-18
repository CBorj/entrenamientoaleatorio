
    //----------INFERIORES      
  const inf=["Sentadilla en trx","Sentadilla patada en la mano","Sentadillas y pierna anatras","Sentadilla lateral","Patinador con goma en rodillas","food truck","food truck con goma","cangrejo con goma","Apertura con goma en pie","Sentadilla + puntilletas","Sentadilla zancada atras con pelota","Sentadilla zancada atras con silla","Pierna atras con goma en pie","Sentadilla y manteniaendo llevar pierna atras","Tocar delante al lado y detras","Encima de una caja levantar rodilla y bajar despacio"];
  var Ia,Ib,Ic,Id,lin;
 
 
      
      lin=inf.length -1;
      Ia=parseInt(Math.random()*lin);
      do{Ib=parseInt(Math.random()*lin);}while(Ia==Ib);
      do{Ic=parseInt(Math.random()*lin);}while(Ia==Ic || Ib==Ic);
      do{Id=parseInt(Math.random()*lin);}while(Ia==Id || Ib==Id || Ic==Id);
  
  

