//Global Variables
var questions = [{
  question: "Commonly used data types do not include",
  answers: ["strings","booleans","alerts","numbers"],
  answer: "alerts",
  
  },{
  question: "The condition in an if/else statement is enclosed within ______ ",
  answers: ["quotes","curly braces","parentheses","square brackets"],
  answer: "parentheses",
  },{
  question: "Arrays in JavaScript can be used to store",
  answers: ["numbers and strings","other arrays","booleans","all of the above"],
  answer: "all of the above",
  },{
  question: "String values must be enclosed within _______ when being assigned to variables",
  answers: ["commas","curly braces","quotes","parentheses"],
  answer: "quotes",
  },{
  question: "A very useful tool used during deveolpment and debugging for printing content to the debugger is",
  answers: ["JavaScript","terminal/bash","for loops","console log"],
  answer: "cossole log",
  score: 22,
  
  }];

console.log(questions[4].score);

var start = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var displayQA =document.getElementsByClassName("list");
var hs = "high score";
var secondsLeft =10;
var body;
var quest;
var i=0;


//Functions

//timer/start
function setTime() {start.remove();play();
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left!!";
    if(secondsLeft === 0) {timer.textContent="Time's up!"
  
      // Stops execution of action at set interval
      clearInterval(timerInterval);
end();
     // sendMessage();
    }
  }, 1000);
}

//beginning of game function called from timer

var play = function(){ 
body=document.body;
var divvy =document.createElement("div")
quest =document.createElement("button")
quest.innerText=questions[i].question;
quest.setAttribute("class","que")
body.append(divvy);
divvy.append(quest);

a1 =document.createElement("button")
a1.innerText=questions[i].answers[0];
a1.setAttribute("class","ans")
divvy.append(a1);

a1.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText);
    if(event.target.innerText == questions[i].answer){keys.append(correct);
      console.log("correct");}else{keys.append(incorrect);
        console.log("wrong")
      }}});
      a1.addEventListener("click",add);

a2 =document.createElement("button")
a2.innerText=questions[i].answers[1];
a2.setAttribute("class","ans")
divvy.append(a2);

a2.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText);
    if(event.target.innerText == questions[i].answer){keys.append(correct);
      console.log("correct");}else{keys.append(incorrect);
        console.log("wrong")
      }}});
      a2.addEventListener("click",add);

a3 =document.createElement("button")
a3.innerText=questions[i].answers[2];
a3.setAttribute("class","ans")
divvy.append(a3);

a3.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText);
    if(event.target.innerText == questions[i].answer){
      keys.append(correct);
      console.log("correct");}else{keys.append(incorrect);
        console.log("wrong")
        console.log(questions[i].answer)
      }}});
      a3.addEventListener("click",add);

a4 =document.createElement("button")
a4.innerText=questions[i].answers[3];
a4.setAttribute("class","ans")
divvy.append(a4);

a4.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText);
    if(event.target.innerText == questions[i].answer){keys.append(correct);
      console.log("correct");
    }else{keys.append(incorrect);
        console.log("wrong")
      }}});
      a4.addEventListener("click",add);

a5 =document.createElement("button")
a5.innerText=questions[i].answers[4];
a5.setAttribute("class","ans")

a5.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText);
    if(event.target.innerText == questions[i].answer){keys.append(correct);
      console.log("correct");}else{
        console.log("wrong")
      }}});
      divvy.append(a5);
a5.addEventListener("click",add);

};
var correct=document.createElement("div");
keys=document.querySelector(".answer");
correct.textContent="CORRECT";
var incorrect=document.createElement("div");
incorrect.textContent="WRONG";
start.addEventListener("click", setTime);

var end = function(){a1.innerText="YOUR SCORE"}

var add=function(){      if (i==4){
  quest.innerText="Game Over";end();} else{
  quest.remove();
  a1.remove();
  a2.remove();
  a3.remove();
  a4.remove();
  a5.remove();
  var answerduration = setInterval(function() {correct.remove(); incorrect.remove()},1000);
  i++;play()
}}