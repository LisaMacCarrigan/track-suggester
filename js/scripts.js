// User Interface Logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    $(".imgs").children().hide();
    var introCourse = "Intro to Programming"; //Required Level 1, 1st course
    var cSharp = "C#"; // Level 2
    var javaScript = "JavaScript"; // Level 2
    var dotNet = ".NET"; // Level 3
    var ruby = "Ruby"; // Level 2
    var rails = "Rails"; // Level 3
    var css = "CSS"; // Level 2
    var design = "Design"; // Level 3
    //Images
    var introCourseImg = $("#introCourse");
    var cSharpImg = $("#cSharp");
    var javaScriptImg = $("#javaScript");
    var dotNetImg = $("#dotNet");
    var rubyImg = $("#ruby");
    var railsImg = $("#rails");
    var cssImg = $("#css");
    var designImg = $("#design");
    var internshipImg = $("#internship");

    var name = $("input#name").val();
    var trackIndex = 0;
    var middle = 0;

    $("input:radio[name=question1]:checked").val();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();

    if (name == "") {
      $("#entername").text("Please enter your name.");
    }

    if (question1 === "agree") {
      trackIndex++;
    }
    else {
      trackIndex--;
    }

    if (question2 === "agree") {
      trackIndex++;
    }
    else {
      trackIndex--;
    }

    if (question3 === "agree") {
      trackIndex++;
    }
    else {
      trackIndex--;
    }

    if (question4 === "agree") {
      trackIndex++;
    }
    else {
      trackIndex--;
    }

    if (question5 === "agree") {
      trackIndex++;
    }
    else {
      trackIndex--;
    }

    if (question6 === "agree") {
      trackIndex++;
    }
    else {
      trackIndex--;
    }


// Outcome displayed on page
    if (trackIndex === middle) {
      $(".outcome").text("Based on your responses, " + name + ", it appears that your interests are evenly spread among design, front-end, and back-end development, so you would likely benefit from any Epicodus track!");
    }
    else if (trackIndex < middle && trackIndex < -2) {
      $(".outcome").text("Based on your responses, " + name + ", you might want to consider taking " + introCourse + ", " + cSharp + ", " + javaScript + ", and " + dotNet + ". " + "Following this C#/.NET track, you would complete an Internship.");
      introCourseImg.show();
      cSharpImg.show();
      javaScriptImg.show();
      dotNetImg.show();
      internshipImg.show();
    }
    else if (trackIndex > middle && trackIndex > 2) {
      $(".outcome").text("Based on your responses, " + name + ", you might want to consider taking " + introCourse + ", " + javaScript + ", " + css + ", and " + design + ". " + "Following this CSS/Design track, you would complete an Internship.");
      introCourseImg.show();
      javaScriptImg.show();
      cssImg.show();
      designImg.show();
      internshipImg.show();
    }
    else {
      $(".outcome").text("Based on your responses, " + name + ", you might want to consider taking " + introCourse + ", " + ruby + ", " + javaScript + ", and " + rails + ". " + "Following this Ruby/Rails track, you would complete an Internship.");
      introCourseImg.show();
      rubyImg.show();
      javaScriptImg.show();
      railsImg.show();
      internshipImg.show();
    }

  });
});
