//Global Variables
var allScores;
var allScores;
var highScore;
var lastScores;
var blah;
var memory;
var questions = [
  {
    question: "Commonly used data types do not include",
    answers: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______ ",
    answers: ["quotes", "curly braces", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables",
    answers: ["commas", "curly braces", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log",

  },
];


var start = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var displayQA = document.getElementsByClassName("list");
var record = [
  {
    plyr: inits,
    scre: score,
  },
];
var inits;

var secondsLeft = 45;
var body;
var quest;
var i = 0;
var score = 0;
var k = 6;
var m;

//Functions

//timer/start
function setTime() {
  start.remove();
  play();
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left!!";
    if (secondsLeft === 0) {
      timer.textContent = "Time's up!";

      // Stops execution of action at set interval
      clearInterval(timerInterval);
      end();
    }
  }, 1000);
}

//beginning of game function called from timer

var play = function () {
  body = document.body;
  var divvy = document.createElement("div");
  quest = document.createElement("button");
  quest.innerText = questions[i].question;
  quest.setAttribute("class", "que");
  body.append(divvy);
  divvy.append(quest);

  a1 = document.createElement("button");
  a1.innerText = questions[i].answers[0];
  a1.setAttribute("class", "ans");
  divvy.append(a1);

  a1.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      if (event.target.innerText == questions[i].answer) {
        keys.append(correct);
        score++;
      } else {
        keys.append(incorrect);
        secondsLeft = secondsLeft - 5;
      }
    }
  });
  a1.addEventListener("click", add);

  a2 = document.createElement("button");
  a2.innerText = questions[i].answers[1];
  a2.setAttribute("class", "ans");
  divvy.append(a2);

  a2.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      if (event.target.innerText == questions[i].answer) {
        keys.append(correct);
        score++;
      } else {
        keys.append(incorrect);
        secondsLeft = secondsLeft - 5;
      }
    }
  });
  a2.addEventListener("click", add);

  a3 = document.createElement("button");
  a3.innerText = questions[i].answers[2];
  a3.setAttribute("class", "ans");
  divvy.append(a3);

  a3.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      if (event.target.innerText == questions[i].answer) {
        keys.append(correct);
        score++;
      } else {
        keys.append(incorrect);
        secondsLeft = secondsLeft - 5;
      }
    }
  });
  a3.addEventListener("click", add);

  a4 = document.createElement("button");
  a4.innerText = questions[i].answers[3];
  a4.setAttribute("class", "ans");
  divvy.append(a4);

  a4.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      if (event.target.innerText == questions[i].answer) {
        keys.append(correct);
        score++;
      } else {
        keys.append(incorrect);
        secondsLeft = secondsLeft - 5;
      }
    }
  });
  a4.addEventListener("click", add);

  a5 = document.createElement("button");
  a5.innerText = questions[i].answers[4];
  a5.setAttribute("class", "ans");
  divvy.append(a5);
  a5.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      if (event.target.innerText == questions[i].answer) {
        keys.append(correct);
        score++;
      } else {
        keys.append(incorrect);
        secondsLeft = secondsLeft - 5;
      }
    }
  });
  divvy.append(a5);
  a5.addEventListener("click", add);
};

var highScore = {
  name: document.getElementById("myText").value,
  score: (score / 5) * 100,
};
var correct = document.createElement("div");
keys = document.querySelector(".answer");
correct.textContent = "CORRECT";
var incorrect = document.createElement("div");
incorrect.textContent = "WRONG";
start.addEventListener("click", setTime);

var hide = function () {
  unhiding = document.body;
  var grab = document.getElementById("hidden");
  grab.setAttribute("id", "unhidden");
  unhiding.append(grab);
};
var end = function () {
  quest.innerText = "Game Over";
  a1.innerText = "YOUR SCORE";
  timer.remove();
  a2.textContent = "";
  a3.textContent = "";
  a4.textContent = record.scre;
  a5.textContent = "";
  hide();
};

var add = function () {
  if (i == 4) {
    quest.innerText = "Game Over, enter your initials for your score!";
    end();
    secondsLeft = 0;
  } else {
    quest.remove();
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    a5.remove();
    var answerduration = setInterval(function () {
      correct.remove();
      incorrect.remove();
    }, 1500);
    i++;
    play();
  }
};

var myFunction = function () {
  a1.textContent = document.getElementById("myText").value + " " + score * 20;
  inits = document.getElementById("myText").value;
  record.scre = score * 20;
  record.plyr = document.getElementById("myText").value;

  saveHighScore();

  function saveHighScore() {
    // Save related form data as an object
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    allScores={
      ...highScore,
      ...lastScores,
    };
    console.log(allScores.name + "as");
    localStorage.setItem("highScore", JSON.stringify(allScores));
    console.log(JSON.stringify(allScores)+ 'et');
  }
  renderLastScores();

  function renderLastScores() {
    // Use JSON.parse() to convert text to JavaScript object
    lastScores = JSON.parse(localStorage.getItem("highScore"));
    console.log(lastScores.name + 'ls');
    // Check if data is returned, if not exit out of the function
    if (lastScores !== null) {
      a3.textContent = highScore.name;
      a4.textContent = highScore.score;

      //document.getElementById("saved-grade").innerHTML = highScore.score;
      //document.getElementById("saved-comment").innerHTML = highScore.comment;
    } else {
      return;
    }
  }

  a1.textContent =
    document.getElementById("myText").value + " " + (score / 5) * 100;
  inits = document.getElementById("myText").value;
  record.scre = (score / 5) * 100;
  record.plyr = document.getElementById("myText").value;


  console.log(record.scre + " " + record.plyr);
  a2.textContent = "High Scores";
  a3.textContent = lastScores.name + " " + lastScores.score;
  a4.textContent = lastScores.name + " " + lastScores.score;
  a5.textContent = lastScores.name + " " + lastScores.score;


  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastScores();
  }
  init();
};
