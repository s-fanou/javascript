
/*  this game is inspired by the battle cats.  */

$(document).ready(function () {
  var level = 1;
  $("#txtLevel").val("Your level: " + level);

  var gamePoints = 0;
  $("#txtPoints").val("Your points: " + gamePoints);

  $("#btnAnswer").click(function () 
  {
    //this is how you get the value from text-box 1, txtNumber1
    var numb1 = $("#txtNumber1").val();
    //this is how you get the value from txtNumber2
    var numb2 = $("#txtNumber2").val();

    //this is how you convert numeric text (string) into a number
    var number1 = parseInt(numb1); //use parseInt(put your var here) to convert numeric text to number
 
     var number2 = parseInt(numb2);//here you have to convert the variable numb2 into a number, like above
     
    var Answer = numb1 + numb2; //here you have to add the two numbers which you got from text-box 1 and 2

    //this is how you get what the user wrote in the answer text-box and put it in a variable
    var UsersAnswer = $("#txtaAnswer").val();

    //below you have to check if the answer which the user gave is equal to the addition
    if (UsersAnswer == numb1 + numb2); 
      alert("You are right " + numb1 + " and " + numb2 + " equals " + UsersAnswer);
      else {alert}; 
      alert("YOUR ANSWER IS WRONG!!!");
    } 


  });
}); // ends document.ready
