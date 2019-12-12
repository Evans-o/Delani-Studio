$(document).ready(function(){
  $("form#form").submit(function(event){ 
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
     alert ( "Hi   " +  name + ", we have received your message. Thank you for reaching out to us.");
      $("form#form").allowDefault = true;
    }
    else if($("textarea#comment"===null)) {
      alert("please enter your name,email and your message!");
      event.preventDefault()
    }
    else if($("input#MERGE0"===null)) {
      alert("please enter your email");
      event.preventDefault()
    }
    else {
      alert("Please enter your name and email!");
      event.preventDefault()
    }
  });
});
$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown(3000).hide(3000);
    $("#development").show(5000);
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});
$(document).ready(function() {
  $("#work1").hover(
    function() {
      $("#overlay").show("200");
    },
    function() {
      $("#overlay").hide(3000);
    }
  )
  $("#work2").hover(
    function() {
      $("#overlay2").show("200");
    },
    function() {
      $("#overlay2").hide(3000);
    }
  )
  $("#work3").hover(
    function() {
      $("#overlay3").show("200");
    },
    function() {
      $("#overlay3").hide(3000);
    }
  )
  $("#work4").hover(
    function() {
      $("#overlay4").show("200");
    },
    function() {
      $("#overlay4").hide(3000);
    }
  )
  $("#work5").hover(
    function() {
      $("#overlay5").show("200");
    },
    function() {
      $("#overlay5").hide(3000);
    }
  )
  $("#work6").hover(
    function() {
      $("#overlay6").show("200");
    },
    function() {
      $("#overlay6").hide(3000);
    }
  )
  $("#work7").hover(
    function() {
     $("#overlay7").show("200");
    },
    function() {
      $("#overlay7").hide(3000);
    }
  )
  $("#work8").hover(
    function() {
      $("#overlay8").show("200");
    },
    function() {
      $("#overlay8").hide(3000);
    }
  )
})


  
