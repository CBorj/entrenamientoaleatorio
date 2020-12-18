
//----------SUPERIORES      
const sup=["Remo en trx","remo con goma","Hombro con peso","Flexiones en suelo","Flexiones en pelota","flexiones en trx","Hombro con goma en el culo","sentadilla con hombro","triceps","triceps pisando goma","biceps pisando goma"];
var Sa,Sb,Sc,Sd,lsup;


  
  lsup=sup.length;
  Sa=parseInt((Math.random()*lsup)-1);
  do{Sb=parseInt((Math.random()*lsup)-1);}while(Sa==Sb);
  do{Sc=parseInt((Math.random()*lsup)-1);}while(Sa==Sc || Sb==Sc);
  do{Sd=parseInt((Math.random()*lsup)-1);}while(Sa==Sd || Sb==Sd || Sc==Sd);



