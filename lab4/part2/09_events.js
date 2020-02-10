var score = 0;
window.onload = function()
{  

  var roller = document.getElementById("roller");
  roller.addEventListener(
    "click", 
    function () {
      values = [];

      Dice.showDie("die01", Dice.roll());
      values.push(Dice.getScore());
      Dice.showDie("die02", Dice.roll());
      values.push(Dice.getScore());
      Dice.showDie("die03", Dice.roll());
      values.push(Dice.getScore());
      Dice.showDie("die04", Dice.roll());
      values.push(Dice.getScore());
      Dice.showDie("die05", Dice.roll());
      values.push(Dice.getScore());

     
      for (var i=0; i<values.length; i++){
        for (var x=0; x<values.length; x++){
          if(values[i]==values[x] && x!=i){
            score+=1;
          }
        }
      }
      console.log(score);
      document.getElementById("score").innerHTML = score;
    }, 
    false);

  Dice.showDie("die01", 0);
  Dice.showDie("die02", 0);  
  Dice.showDie("die03", 0);  
  Dice.showDie("die04", 0);  
  Dice.showDie("die05", 0);  

}
