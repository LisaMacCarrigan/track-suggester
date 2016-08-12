// Business Logic
var introCourse = "Intro to Programming"; //Required Level 1, 1st course
var cSharp = "C#"; // Level 2
var javaScript = "JavaScript"; // Level 2
var dotNet = ".NET"; // Level 3
var php = "PHP"; // Level 2
var ruby = "Ruby"; // Level 2
var rails = "Rails"; // Level 3
var css = "CSS"; // Level 2
var design = "Design"; // Level 3

// User Interface Logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var trackIndex = 0;
    var middle = 0;


    $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();

    if (name == "") {
      $(".outcome").text("Please enter your name to get your results.");
    }

// Outcome displayed on page
    if (trackIndex < middle && trackIndex > ) {
      $(".outcome").text("Based on your responses " + name + ", you might want to consider taking " + introCourse + ", " + cSharp + ", " + javaScript + ", and " + dotNet + "." + "Following this course sequence, you would complete an Internship.");
    }
    else if (trackIndex < middle && trackIndex > -3) {
      $(".outcome").text("Based on your responses " + name + ", you might want to consider taking " + introCourse + ", " + ruby + ", " + javaScript + ", and " + rails + "." + "Following this course sequence, you would complete an Internship.");
    }
    else if (trackIndex > middle) {
      $(".outcome").text("Based on your responses " + name + ", you might want to consider taking " + introCourse + ", " + php + ", " + css + ", and " + design + "." + "Following this course sequence, you would complete an Internship.");
    }
    else {

    }

  });
});
