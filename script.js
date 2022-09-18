
function ButtonColor(id) {
  // alert()
  if (document.getElementById(id).value != "Yes"){
    document.getElementById(id).style.background = "#90EE90"
    document.getElementById(id).value = "Yes"
  }
  else{
    document.getElementById(id).style.background = "#e8e9ea"
    document.getElementById(id).value = "No"
  }
  if (id == "yesnoperm" && document.getElementById(id).value == "Yes"){
      document.getElementById("multinom").style.display = "none";
      document.getElementById("hider").style.display = "none";
      document.getElementById("label2hider").style.display = "none";
  }
  if (id == "yesnoperm" && document.getElementById(id).value == "No"){
            document.getElementById("multinom").style.display = "block";
      document.getElementById("hider").style.display = "block";
      document.getElementById("label2hider").style.display = "block";
      document.getElementById("multinom").style.margin = "auto";
  }
}