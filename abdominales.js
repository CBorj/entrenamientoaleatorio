
    //----------ABDOMINALES      
  const Abd=["Manos a las rodillas","Plancha lateral apoyando rodilla y levantando pierna","Tocando tobillos","Plancha en pelota","Piernas levantadas sin tocar lumbar y aguantar","Piernas levantadas y pataditas","Escalar en plancha","plancha lateral pasando mano por debajo","Lateral mano en el suelo y la otra en la rodilla","Lateral levantando pierna y tocando con mano contraria","Tumbado boca abajo levantar piernas , barbilla y codos para dentro","laterales piernas flaxionadas y lavar a cada lado"];
  var Aa,Ab,Ac,Ad,lab;
 
 
      
      lab=Abd.length -1;
      Aa=parseInt(Math.random()*lab);
      do{Ab=parseInt(Math.random()*lab);}while(Aa==Ab);
      do{Ac=parseInt(Math.random()*lab);}while(Aa==Ac || Ab==Ac);
      do{Ad=parseInt(Math.random()*lab);}while(Aa==Ad || Ab==Ad || Ac==Ad);
  
  

