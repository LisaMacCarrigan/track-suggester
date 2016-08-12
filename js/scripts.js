// Business Logic
var introCourse = "Intro to Programming" //Required Level 1, 1st course
var internship = "Internship" // Required Internship, final course

// User Interface Logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var trackIndex = 0;
    var


    $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();

    if (name == "") {
      $(".outcome").text("Please enter your name to get your results.");
    }



  });
});
