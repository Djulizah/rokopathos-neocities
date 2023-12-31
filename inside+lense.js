function showDiv(divId) {
  var divPholder = document.getElementById("placeholder");
  divPholder.style.display = "none";

  var divs = document.querySelectorAll(
    "#myDiv, #myDiv2, #myDiv3, #myDiv4, #myDiv5, #myDiv6, #myDiv7, #myDiv8"
  );
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }

  var div = document.getElementById(divId);
  div.style.display = "block";
}

function viewRestricted() {
  const passOverlay = document.getElementById("overlay");
  passOverlay.style.visibility = "visible";
}

function validate() {
  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  if (enteredPassword === "123") {
    alert("hurray!")
    document.getElementById("overlay").style.visibility = "hidden";
    
    // FIX
    showDiv('myDiv7')
    
  } else {
    alert("uh oh")
    document.getElementById("error-overlay").style.backgroundColor = "black";
    document.getElementById("error-overlay").style.visibility = "visible";
  }
}

function out() {
    window.location.href = "";
}