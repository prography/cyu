$(function() {
  $(".btn_toggle").on("click", function(e) {
    e.preventDefault();
    $(".upload").slideDown("slow");
  })
});
