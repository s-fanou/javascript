/* JS file for exp1.html*/

$(document).ready(function () {


  $("#btn1").click(function () {

    var answer1 = 3*6;
    var answer2 = (20*10) / 5;

    var finalAns = answer1 + answer2;

    //PRESENT YOUR ANSWER USING THE STATEMENT BELOW:
    $("#span1").text(finalAns);

  });
}); // ends document.ready

