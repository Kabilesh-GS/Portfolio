function appear1(){
    var x = document.getElementById("iteam1title");
    var y = document.getElementById("iteam01");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "inline-block";
    }

  };