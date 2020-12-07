/* JS file for exp1.html*/

class person {
  constructor() {
    this.fname;//all the properties must be declared in the constructor
    this.lname;
  }

  get firstname() {
    return this.fname;
  }

  get lastname() {
    return this.lname;
  }

  set firstname(name) {
    this.fname = name;
  }

  set lastname(name) {
    this.lname = name;
  }
} // ends class person

class female extends person {
  constructor() {
    super(); //I must call super() even though person's constructor takes no arguments
    this._gender; //this property is by default public
  }

  get gender() {
    return this._gender;
  }

  set gender(mf) {
    this._gender = mf;
  }
} // ends class female

var sot = new person();
var maryana = new female();

$(document).ready(function () {
  $("#btn1").click(function () {
    //$("#span1").text("The button has been clicked!");
    //var xout = "button was clicked";
    //document.getElementById("span1").innerHTML = sot.firstname + " " + sot.lastname;

    sot.firstname = "Lakis";
    sot.lastname = "Antoniou";
    $("#txtArea1").val(sot.firstname + " " + sot.lastname);

    maryana.firstname = "Maryana";
    maryana.lastname = "Ofitserova";
    maryana._gender = "female"; //notice here that I can assign to _gender without the setter

    $("#span1").text(
      maryana.firstname + " " + maryana.lastname + " " + maryana.gender
    );
  });
}); // ends document.ready
