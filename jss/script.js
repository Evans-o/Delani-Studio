$(document).ready(function() {
    $(".desg p").hide();
    $(".desg").click(function() {
        $(".desg p").toggle();
        $(".desg img").toggle();
    });
    $(".devp p").hide();
    $(".devp").click(function() {
        $(".devp p").toggle();
        $(".devp img").toggle();
    });
    $(".prd p").hide();
    $(".prd").click(function() {
        $(".prd p").toggle();
        $(".prd img").toggle();
    });
});
$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
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
$(".#work1").hover(function(){
  $('#overlay2').toggle();
})

  });