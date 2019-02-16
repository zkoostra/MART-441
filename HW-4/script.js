<script>
  function storyTitle() {
    document.write("<h1>Should I do my Homework?</h1>");
  }

  function description() {
    document.write("<h2>A brief decision-making guide for the average student</h2>");
  }

  function setup() {
    document.write("Ah, the weekend is finally here. It's Saturday morning. You know you have a lot to get done before Monday, but you're not sure if now is the right time to start working.")
    }

  function answerOne(){
    var myFirstChoice = document.getElementById("answer").value;
    var myQuestion = document.getElementById("question");

    if(myFirstChoice === "Yes"){
      myQuestion.innerHTML = "Get some extra rest and then go to IHOP. Its important to be kind to your body. Are you feeling better after a big breakfast?";
      document.getElementById("answer").style.display="none";
      document.getElementById("submit").style.display="none";

      document.getElementById("answer2").style.display="block";
      document.getElementById("submit2").style.display="block";

  }
  else if(myFirstChoice === "No")
  {
      myQuestion.innerHTML = "Well congratulations! Sunday is still the time to treat yo-self. Time to catch up on weekend TV?";
      document.getElementById("answer").style.display="block";
      document.getElementById("submit").style.display="block";

      document.getElementById("answer3").style.display="none";
      document.getElementById("submit3").style.display="none";
  }
  else
  {
      myQuestion.innerHTML = "You seem confused. Type yes or no, sleepyhead!";
  }

}

function answerTwo(){
  {
      var feelingBetter = document.getElementById("answer2").value;
      var myQuestion = document.getElementById("question");
      if(feelingBetter === "Yes")
      {
          myQuestion.innerHTML = "You're feeling better after those pancakes but not quite ready for work. Look at all of your friends' social medias?";
          document.getElementById("answer2").style.display="none";
          document.getElementById("submit2").style.display="none";

          document.getElementById("answer3").style.display="block";
          document.getElementById("submit3").style.display="block";
      }
      else if(feelingBetter === "No")
      {
          myQuestion.innerHTML = "Still not feeling too well? You poor sweetie. Well, you're only young once. You're only young once. Try and get some more rest?";
          document.getElementById("answer2").style.display="none";
          document.getElementById("submit2").style.display="none";

          document.getElementById("answer4").style.display="block";
          document.getElementById("submit4").style.display="block";
      }
      else
      myQuestion.innerHTML = "Type yes or no.";

  }
}

function answerThree(){
  var myFirstChoice = document.getElementById("answer").value;
  var watchTv = document.getElementById("answer3").value
  var myQuestion = document.getElementById("question");
  if (watchTv === "Yes"){
    myQuestion.innerHTML = "You deserve a little break. Turn on The Good Place and just make sure you do your homwork before Monday, okay?";
    document.getElementById("answer3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("answer4").style.display="block";
    document.getElementById("submit4").style.display="block";
  }
  else if (watchTv==="No") {
    myQuestion.innerHTML = "You're right, you're all caught up. Well, fine. Start on homework?";
    document.getElementById("answer3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("answer5").style.display="block";
    document.getElementById("submit5").style.display="block";
  }
}
</script>
