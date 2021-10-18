function emFunc() {
  var x = document.createElement("INPUT");
  var y = document.createElement("BUTTON");
  var z = document.createTextNode("Submit");
  document.body.appendChild(x);
  y.appendChild(z);
  document.body.appendChild(y);
  document.getElementById("ema").innerHTML = "Enter email address below: ";
}

function phFunc() {
  var x = document.createElement("INPUT");
  var y = document.createElement("BUTTON");
  var z = document.createTextNode("Submit");
  document.body.appendChild(x);
  y.appendChild(z);
  document.body.appendChild(y);
  document.getElementById("ph").innerHTML = "Enter phone number below: ";
}
