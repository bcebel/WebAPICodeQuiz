//Global Variables
var sortable;
data = [
 // {"name": "John Doe", "score": 0},
  {"name":"","score":""},

];
var add_new_entry;
var new_data;
var new_entry;
var allScores;
var lastScores;
var questions = [
  {
    question: "Commonly used data types do not include",
    answers: ["strings", "booleans", "alerts", "numbers", "androids"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______ ",
    answers: ["quotes", "curly braces", "parentheses", "square brackets", "ferns"],
    answer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "nerdy jokes",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables",
    answers: ["commas", "curly braces", "quotes", "parentheses", "string theory"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log", "caffeine"],
    answer: "console log",

  },
];

var start = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var displayQA = document.getElementsByClassName("list");
var inits;

var secondsLeft = 45;
var body;
var quest;
var i = 0;
var score = 0;
var k = 6;
var m;


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


// if answer is right or wrong

var correct = document.createElement("div");
keys = document.querySelector(".answer");
correct.textContent = "CORRECT";
var incorrect = document.createElement("div");
incorrect.textContent = "WRONG";
start.addEventListener("click", setTime);

//hides the function buttons until the end

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
  a4.textContent ="";
  a5.textContent = "";
  hide();
};


//High Scores

add_new_entry=function(data, name, score){
  new_entry = {"name": name, "score": score}
  data.unshift(new_entry);
console.log(data[0].name)}

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
  new_data = add_new_entry(data, document.getElementById("myText").value, score * 20);
  console.log(new_data +'newdata');
  sortable = Object.fromEntries(
    Object.entries(data).sort(([,a],[,b]) => a-b)
  );

    localStorage.setItem("highScore", JSON.stringify(sortable));
    console.log(JSON.stringify(sortable)+ 'et');
    a1.textContent = document.getElementById("myText").value + " " + (score / 5) * 100;
    inits = document.getElementById("myText").value;
    a2.textContent = "Scores";
    a3.textContent = sortable[0].name + " " + sortable[0].score;
    a4.textContent = sortable[1].name + " " + sortable[1].score;
    a5.textContent = sortable[2].name + " " + sortable[2].score;
  }
 

  function renderLastScores() {
    // Use JSON.parse() to convert text to JavaScript object
    lastScores = JSON.parse(localStorage.getItem("highScore"));
    if (lastScores == null){old_data=add_new_entry(data, "Han", 1);
    old_data=add_new_entry(data, "Luke", 2);
    old_data=add_new_entry(data, "Rey", 3)}else{
    old_data = add_new_entry(data, lastScores[0].name, lastScores[0].score);
    old_data = add_new_entry(data, lastScores[1].name, lastScores[1].score);
    old_data = add_new_entry(data, lastScores[2].name, lastScores[2].score);
    console.log(lastScores[0].name);
// localStorage.clear();
}

    }

  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastScores();
  }
  init();








//data = [
//  {"name": "John Doe", "score": 90},
//  {"name": "Jane Doe", "score": 85},
//  {"name": "Jim Smith", "score": 95},

//]

//def add_new_entry(data, name, score):
//  new_entry = {"name": name, "score": score}
//  data.append(new_entry)
//  return data

//new_data = add_new_entry(data, "Mike Johnson", 92)
//print(new_data)



//def sort_by_score(data):
//    return sorted(data, key=lambda x: x["score"], reverse=True)

//sorted_data = sort_by_score(data)
//print(sorted_data)