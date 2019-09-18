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

// db.collection("users")
//   .add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });
