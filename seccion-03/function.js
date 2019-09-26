function checkValue(){
var text;
var lang = document.getElementById("inputValue").value;

  switch(lang) {
   case "one":
      text = "false, we are not working on it";
      break;
   case "three":
      text = "Yup, we are working on it";
      break;
   case "five":
      text = "No, we are not working on it";
      break;

    default:
    text = "You have to give answer from the following options!";
  }
  document.getElementById("displayText").innerHTML = text;
}
