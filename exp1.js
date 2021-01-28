// this is marios first homework 28 01 2021


$(document).ready(function () {


  $("#btn1").click(function () {

    /* homework instructions: You must create 2 variables 
    using the keyword var. Name the variables phrase1 and
    phrase2. 
      In the first variable I want you to put in 
    the phrase "I am 11 years old " and In the second variable 
    put the phrase "and I live in Larnaca."
      Then I want you to display both variables together in 
    #span1. Good luck! */

    /* Marie write your code below here */

    var my_name  =  "my name is marios 1";

    var result = 6+4;  
 
    var new_result = result + 10; 

    // this is the top text-box
    $("#txt1").val(my_name);

    // this is the second text-box
    $("#txtArea1").val();


    // this is the red span area
    $("#span1").text("The result of the addition is " + new_result);

  });


}); // ends document.ready
