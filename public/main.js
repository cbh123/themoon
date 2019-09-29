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

$("#submitReview").click(function() {
  var name = $("#name").val();
  var review = $("#review").val();
  var stars = $("#stars").val();
  console.log(name, date, stars);

  if (name != "" && review != "" && stars != "") {
    db.collection("reviews")
      .add({
        name: name,
        review: review,
        stars: stars,
        timestamp: Date($.now())
      })
      .then(function() {
        $("#review-form").addClass("d-none");
        $("#success-form").removeClass("d-none");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  } else {
    window.alert("Please include a name, review, and star number, traveller.");
  }
});

// See Reviews
db.collection("reviews")
  .get()
  .then(function(querySnapshot) {
    var names = [];
    var dates = [];
    var reviews = [];
    var starVal = [];

    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      names.push(doc.data().name);
      dates.push(doc.data().date);
      reviews.push(doc.data().review);
      starVal.push(doc.data().stars);
    });

    var arrayLength = names.length;

    for (var i = 0; i < arrayLength; i++) {
      var div = $("#see-reviews");

      var name = "From: " + names[i];
      var review = '"<em>' + reviews[i] + '</em>"';
      var stars = "Stars: " + starVal[i];

      div.append(
        "<br> <h5 class='text-light'>" +
          review +
          "</h5>" +
          name +
          "<br>" +
          stars +
          "<br><br><br>"
      );
    }
    div.innerHTML +=
      '<a href="suggestions.html"><em>Don\'t forget to leave us a review!</em></a>';
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
