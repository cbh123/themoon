$(document).ready(function() {
  $("#rocket").slideDown();
  $(".entry").fadeIn();
  $(".home-display").fadeIn();
});

$("a").click(function() {});

$("#touchdown").click(function() {
  $(".entry").fadeOut("", function() {
    window.location = "home.html";
  });
});
