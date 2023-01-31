//Global Variables
var questions = [{
    question: "question1",
    answers: ["1","2","3","4","5"],
    answer: "1",

},{
    question: "question2",
    answers: ["1","2","3","4","5"],
    answer: "1",
},{
    question: "question3",
    answers: ["1","2","3","4","5"],
    answer: "1",
},{
    question: "question4",
    answers: ["1","2","3","4","5"],
    answer: "1",
},{
    question: "question5",
    answers: ["1","2","3","4","5"],
    answer: "1",
    score: 22,

}];
console.log(questions[4].score);

var start = document.querySelector("#start-button");
var timer = document.querySelector("#timer");
var displayQA =document.getElementsByClassName("list");
var hs = "high score";
//Functions

//timer/start
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left!!";
    if(secondsLeft === 0) {
      console.log(qnum[0]);
      qnum[0]=0;
      console.log(qnum);
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Call function to end game
     // sendMessage();
    }
  }, 1000);
}

//display and answer
var play = function(){};
//high score


//Event Listeners
start.addEventListener("click", setTime);
displayQA.addEventListener("click",play);
//question buttons
//text initials


var button1 = document.getElementById("button1");


// FUNCTIONS
// create a function that will display the words hello Brian on the page in a div
var brian = function(){
// create element
var div = document.createElement("div");
var par = document.createElement("p");


// add content to the element
par.textContent="Brian";

// append element 
div.append(par);
document.querySelector("#container");
}

// EVENT LISTENERS
button1.addEventListener('click', brian)