function appear1() {
  var x = document.getElementById("iteam1title");
  var y = document.getElementById("iteam01");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
function appear2() {
  var x = document.getElementById("iteam2title");
  var y = document.getElementById("iteam02");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
function appear3() {
  var x = document.getElementById("iteam3title");
  var y = document.getElementById("iteam03");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
function appear4() {
  var x = document.getElementById("iteam4title");
  var y = document.getElementById("iteam04");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
function appear5() {
  var x = document.getElementById("iteam5title");
  var y = document.getElementById("iteam05");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
function appear6() {
  var x = document.getElementById("iteam6title");
  var y = document.getElementById("iteam06");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
function appear7() {
  var x = document.getElementById("iteam7title");
  var y = document.getElementById("iteam07");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
}
let mybutton = document.getElementById("topbutton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function Scrolltotop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
