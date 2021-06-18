/* JS file for exp1.html*/

$(document).ready(function () {


  $("#btn1").click(function () {

    const numbers = [1, 2, 3];

    console.log("sotiris spread oper: \n");
    console.log(...numbers);
    //output: 1 2 3 (space separated)

    // const objectJS = { key1: "one", key2: "two", key3: "three" };

    // console.log("sotiris spread objectJS: \n");
    // console.log(...objectJS);
    //output: returns an error says objectJS is not iterable

    const ArrayObj = [{ key1: "one"}, {key2: "two"}, {key3: "three" } ];

    console.log("sotiris spread ArrayObj: \n");
    console.log(...ArrayObj);
    //output: {key1: "one"} {key2: "two"} {key3: "three"} (space separated JS objects)



    //in the below context the ... does not seem to work
    $("#txtArea1").val(...numbers);
  });
}); // ends document.ready
