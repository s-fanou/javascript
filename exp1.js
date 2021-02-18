
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
    var number1 = parseInt(numb1);

    //here you have to convert the variable numb2 into a number

    //here you have to add the two numbers in text-box 1 and 2

    //this is how you get the answer which the user put in the answer text-box and put it in a variable
    var UsersAnswer = $("#txtaAnswer").val();

    //below you have to check if the answer which the user gave is equal to the addition
    if (   ) {
      alert("You are right " + numb1 + " and " + numb2 + " equals " + UsersAnswer);
    } else {
      alert("YOUR ANSWER IS WRONG!!!");
    } 


  });
}); // ends document.ready
