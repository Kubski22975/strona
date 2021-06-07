$("#arrow").on("click", function() {
  $("body,html").animate({
    scrollTop: $("main").offset().top
  },1000)
})

$(document).ready(function(){
  $("#icon").click(function(){
    $("ul").toggleClass("show");
  })
});
