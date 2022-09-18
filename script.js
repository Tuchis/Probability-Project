// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});
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
