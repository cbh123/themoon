$(document).ready(function() {
  $("#rocket").slideDown();
  $(".entry").fadeIn();
  $(".home-display").fadeIn();
  $(".dropdown-toggle").dropdown();
});

$("a").click(function() {});

$("#touchdown").click(function() {
  $(".entry").fadeOut("", function() {
    window.location = "home.html";
  });
});

var now = new Date();
now.setDate(now.getDate() + 365250);
var date = now;
console.log(date);
var dateString =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + date.getDate()).slice(-2);
console.log(dateString);
$("#date").val(dateString);

// Visit Stuff
$("#submitVisit").click(function() {
  var name = $("#name").val();
  var date = $("#date").val();
  var zorbtron = $("#exampleCheck1").val();
  console.log(name, date, zorbtron);
  db.collection("visits")
    .add({
      name: name,
      date: date,
      zorbtron: zorbtron,
      timestamp: Date($.now())
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});

// Review Stuff
var db = firebase.firestore();

function sendToFirebase(name, review, stars) {
  db.collection("reviews").add({
    name: name,
    review: review,
    stars: stars,
    timestamp: Date($.now())
  });
}

$("#submitReview").click(function() {
  var name = $("#name").val();
  var review = $("#review").val();
  var stars = $("#stars").val();
  console.log(name, date, stars);

  if (name != "" && review != "" && stars != "") {
    $("#review-form").addClass("d-none");
    $("#success-form").removeClass("d-none");
    sendToFirebase(name, review, stars);
  }
});
