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
  question: "A very useful tool used during development and debugging for printing content to the debugger is",
  answers: ["JavaScript","terminal/bash","for loops","console log"],
  answer: "console log",
  score: 22,
  
  }];



var start = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var displayQA =document.getElementsByClassName("list");
var record = [{
  plyr: inits, scre: score}];
var inits;

var secondsLeft =45;
var body;
var quest;
var i=0;
var score =0;
//var history = localStorage.getItem("High Score");
var count = JSON.parse(localStorage.getItem("High Score"));
var m;



//Functions

//timer/start
function setTime() {start.remove();play();
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left!!";
    if(secondsLeft === 0) {timer.textContent="Time's up!";
  
      // Stops execution of action at set interval
      clearInterval(timerInterval);
end();
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
    if(event.target.innerText == questions[i].answer){keys.append(correct);
      ;score++}else{keys.append(incorrect);
        ; secondsLeft=secondsLeft-5;
      }}});
      a1.addEventListener("click",add);

a2 =document.createElement("button")
a2.innerText=questions[i].answers[1];
a2.setAttribute("class","ans")
divvy.append(a2);

a2.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    if(event.target.innerText == questions[i].answer){keys.append(correct);
  score++}else{keys.append(incorrect);
  secondsLeft=secondsLeft-5;
      }}});
      a2.addEventListener("click",add);

a3 =document.createElement("button")
a3.innerText=questions[i].answers[2];
a3.setAttribute("class","ans")
divvy.append(a3);

a3.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    if(event.target.innerText == questions[i].answer){
      keys.append(correct);
      score++}else{keys.append(incorrect);
        secondsLeft=secondsLeft-5;
        
      }}});
      a3.addEventListener("click",add);

a4 =document.createElement("button")
a4.innerText=questions[i].answers[3];
a4.setAttribute("class","ans")
divvy.append(a4);

a4.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    if(event.target.innerText == questions[i].answer){keys.append(correct); score++
    }else{keys.append(incorrect);
        secondsLeft=secondsLeft-5;
      }}});
      a4.addEventListener("click",add);

a5 =document.createElement("button")
a5.innerText=questions[i].answers[4];
a5.setAttribute("class","ans")
divvy.append(a5);
a5.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    
    if(event.target.innerText == questions[i].answer){keys.append(correct);
      score++}else{keys.append(incorrect);
        secondsLeft=secondsLeft-5;
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

var hide=function(){unhiding = document.body;
  var grab = document.getElementById("hidden");
  grab.setAttribute("id","unhidden")
  unhiding.append(grab);
}
var end = function(){
quest.innerText="Game Over";
a1.innerText="YOUR SCORE";
timer.remove();
a2.textContent="";
a3.textContent=""
a4.textContent=record.scre;
a5.textContent="";
//localStorage.setItem("score", score/5*100); 
//localStorage.setItem("High Score", JSON.stringify(score/5*100));
hide();
}


var add=function(){      if (i==4){
  quest.innerText="Game Over, enter your initials for your score!";end();secondsLeft=0;} else{
  quest.remove();
  a1.remove();
  a2.remove();
  a3.remove();
  a4.remove();
  a5.remove();
  var answerduration = setInterval(function() {correct.remove(); incorrect.remove()},1500);
  i++;play()
}}

var myFunction=function(){

a1.textContent=document.getElementById("myText").value + ' '+score/5*100;
inits=document.getElementById("myText").value;
record.scre=score/5*100;
record.plyr=document.getElementById("myText").value;

if (record.scre > count[2] ||record.scre > count[4] || record.scre > count[6] || record.scre==100){
count.unshift(record.plyr);
count.unshift(record.scre);
quest.textContent="You made it onto the leader board!  Nice job!"
} else {quest.textContent="You joined the dark side!  Try again"}

localStorage.setItem("High Score", JSON.stringify(count));
a2.textContent="High Scores"
a3.textContent=count[1] +" "+count[2];
a4.textContent=count[3] +" "+count[4];
a5.textContent=count[5] +" "+count[6];
};


/*
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var studentGrade = {
  student: student.value,
  grade: grade.value,
  comment: comment.value.trim()
};

localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
*/