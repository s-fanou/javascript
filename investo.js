/*
Sotiris Fanou 
version 1.0, 2020 11 22 
For Inverstotech exercise
*/

$(document).ready(function () {
  // set default value for Age textbox
  $("#numAge").val(1);

  // set the focus on the first name field
  $("#txtFName").focus();
}); // ENDS DOCUMENT READY

/* -------- GUI HANDLERS --------------- */

/* The Handler for the Submit button */
$(document).on("click", "#btnSubmit", function () {
  /* if there are no data validation errors, validateForm() will return TRUE */
  if (validateForm()) {
    addRow();
  }
}); // ENDS $("#btnSubmit").click

/* The Handler for the Export button */
$(document).on("click", "#btnExport", function () {
  var arrTable = [];

  var nrows = document.getElementById("dataTable").rows.length;

  for (let r = 1; r < nrows; r++) {

    var rowObj = {
      name: "",
      surname: "",
      email: "",
      age: "",
      color: "",
      byEmail: "",
      byPhone: "",
      bySMS: "",
    };

    var cells = document.getElementById("dataTable").rows[r].cells;

    rowObj.name = cells[0].innerHTML;
    rowObj.surname = cells[1].innerHTML;
    rowObj.email = cells[2].innerHTML;
    rowObj.age = cells[3].innerHTML;
    rowObj.color = cells[4].innerHTML;
    rowObj.byEmail = cells[5].innerHTML;
    rowObj.byPhone = cells[6].innerHTML;
    rowObj.bySMS = cells[7].innerHTML;

    arrTable.push(rowObj);
  }

  jsonFormatAdd(arrTable);

  //alert(JSON.stringify(arrTable));
  $("#jsonModalDialogue").modal("show");
}); // ENDS $("#btnExport").click

/* -------- FUNCTIONS --------------- */

// formats the JSON for HTML presentation and adds it to the Modal Dialogue
// the input parameter is an array of JSON objects
function jsonFormatAdd(arrJ) {

  /* if the modal has already been used once it keeps the DIV from first use.
     The below code deletes the previous DIV. */
  if (document.getElementById("jsonModalMsgDiv")) {
    $("#jsonModalMsgDiv").remove();
  }

  var doc = "<div id='jsonModalMsgDiv'>";

  for (let i = 0; i < arrJ.length; i++) {
    doc += JSON.stringify(arrJ[i]) + "<br>";
  }

  doc += "<div>"; // closes the <div id='jsonModalMsgDiv'>

  $("#jsonModalLine").after(doc); // add the HTML (doc var) content to the modal

} // ENDS jsonFormatAdd()

// Reads the data from the form controls and adds a row to the HTML table
function addRow() {
  if ($("#dataTable tbody").length == 0) {
    $("#dataTable").append("<tbody></tbody>");
  }

  var email = document.getElementById("chkEmail").checked ? "X" : "";
  var phone = document.getElementById("chkPhone").checked ? "X" : "";
  var sms = document.getElementById("chkSMS").checked ? "X" : "";

  $("#dataTable tbody").append(
    "<tr>" +
      "<td>" +
      $("#txtFName").val() +
      "</td>" +
      "<td>" +
      $("#txtSurname").val() +
      "</td>" +
      "<td>" +
      $("#txtEmail").val() +
      "</td>" +
      "<td>" +
      $("#numAge").val().toString() +
      "</td>" +
      "<td>" +
      $("#sltFavoriteColor option:selected").text() +
      "</td>" +
      "<td style='text-align:center'>" +
      email +
      "</td>" +
      "<td style='text-align:center'>" +
      phone +
      "</td>" +
      "<td style='text-align:center'>" +
      sms +
      "</td>" +
      "<td><button type='button' onclick='deleteRow(this);' class='btn btn-default'><span class='glyphicon glyphicon-remove' /></button></td>" +
      "</tr>"
  );
  // hide the "No Data" screen message
  $("#spNoData").hide();
  $("#dvTable").show();
  // reset the form ready for next input
  document.getElementById("investoForm").reset();
  //Set the focus to the first name field
  $("#txtFName").focus();
} // ENDS addRow()

// deletes the current table row
function deleteRow(ctl) {
  //present Confirmation dialogue box to the user
  var r = confirm("You are about to delete this record! \n Are you sure?");

  if (r == true) {
    $(ctl).parents("tr").remove();
    //if only one row left, it is the header row, there are not data rows, show no data message
    if ($("#dataTable tr").length == 1) {
      $("#dvTable").hide();
      $("#spNoData").show();
    }
  }
} // ENDS deleteRow()

/* Validates the data in the form controls.
 If there is something wrong with the data entered in the GUI controls
 then an alert box is presented to the user and the function 
 returns FALSE. If the form data is ok then it returns true.
 */
function validateForm() {
  // age must be between 1 and 120
  if (validateAge($("#numAge").val()) == false) {
    alert("Your age must be between 1 and 120 years old!");
    return false;
  }

  // email address must have correct format something@server.com
  if (validateEmail($("#txtEmail").val()) == false) {
    alert("You have entered an invalid email address!");
    return false;
  }

  /* at least one checkbox must be selected */
  if (validateContactPreference() == false) {
    alert("Please select at least one Contact Preference!");
    return false;
  }

  return true;
} // ENDS validateForm()

// if age is between 1 to 120 it returns True, else False
// the input parameter 'age' is the value of the age textbox
function validateAge(age) {
  var intAge = 0;

  //if age textbox is empty return false
  if (age == "") {
    return false;
  } else {
    intAge = parseInt(age); //convert to int
  }

  if (intAge <= 0 || intAge > 120) {
    return false;
  }

  return true;
}

// if the email format is correct e.g. name@someserver then returns true, else returns false
// the parameter input is the value of the email textbox
function validateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

/* Contact Preference checkboxes: 
if at least one checkbox has been selected then returns TRUE else returns FALSE 
*/
function validateContactPreference() {
  // get all the 'input' type gui controls on the form
  var inputs = document.getElementsByTagName("input");

  var checkboxes = [];

  /* go through all the input type controls separate the checkboxes 
    and add them to an array */
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() == "checkbox") {
      checkboxes.push(inputs[i]);
    }
  }
  // if at least one checkbox has been selected return true and exit the function
  for (let ch = 0; ch < checkboxes.length; ch++) {
    if (checkboxes[ch].checked) {
      return true;
    }
  }

  return false; //if execution reaches here no check box is checked,  return FALSE
} //ENDS validateContactPreference()
