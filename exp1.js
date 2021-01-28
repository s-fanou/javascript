// this is marios first homework 28 01 2021


$(document).ready(function () {


  $("#btn1").click(function () {

    /* homework instructions: You must create 2 variables 
    using the keyword var. You can name the variables whatever
    you want. 
    (1)In the first variable I want you to put in 
    the phrase "my name is Marios." and then display 
    the value inside that variable in the top text-box.
    (2) In the second variable I want you to put the 
    result of the addition 4 + 6 and then display the 
    result of this addition the second text-box */

    /* Marie write your code below here */

    var my_name  =  "my name is marios 1";

    var result = 6+4;  
 
    var new_result = result +10; 

    // this is the top text-box
    $("#txt1").val(my_name);

    // this is the second text-box
    $("#txtArea1").val();


    // this is the red span area
    $("#span1").text("The result of the addition is " + new_result);

  });


}); // ends document.ready
