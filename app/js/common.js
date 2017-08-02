$(document).ready(function(){
  $(".toggle-menu").click(function () {
    $(this).toggleClass("on");

  });
  var searchForm = $("#enter-word");
  function checkFull(){
    if(searchForm.val() == ""){
      searchForm.removeClass("full");
    }
    else(
      searchForm.addClass("full")
    )
  };
  checkFull();
  searchForm.click(function (){
    setTimeout('checkFull()',100)
  });
  searchForm.bind('mouseout mousemove keydown keypress keyup',function(e){
    checkFull();
  });
});
