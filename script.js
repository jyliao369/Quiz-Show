// Here are all the variables that need to be established that grabs elements from 
// the HTML based on the ID.
var testing = document.getElementById('scoreContainer');
var questionEl = document.getElementById('questions');
var timerEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');

var buttonA = document.getElementById('btn0');
var buttonB = document.getElementById('btn1');
var buttonC = document.getElementById('btn2');
var buttonD = document.getElementById('btn3');
var submitEl = document.getElementById('submit');

// These variables will chnage based on question that is being asked
var choiceA = document.getElementById('choice0');
var choiceB = document.getElementById('choice1');
var choiceC = document.getElementById('choice2');
var choiceD = document.getElementById('choice3');

// This is the start button. Once the button is pressed the timer should start
// and the question/answers should be displayed.
var startSwitch = document.getElementById('start')

var switchEl = document.getElementById('switch');

var introEl = document.getElementById('introText');

// This variable will help determine which questions is being displayed. With it being
// zero, this is the first question that is going to be displayed.
var currentQ = 0;

score = 0;

// This variable will determine the overall time to answer the questions.
var timeCount;

var quizAns = [];
var answerChoice = "";

// These are the questions that will be used in the quiz.
// For now there are only three. More will be added. 
var quizQues = [
    {
        question: "HTML is what type of language?",
        a: 'Scripting Language',
        b: 'Markup Language',
        c: 'Programming Language',
        d: 'Network Protocol',
        correctAns: "b"
    },

    {
        question: "What among the following is an appropriate when an event occurs when the user clicks on an element?",
        
        a: 'onchange',
        b: 'onkeyup',
        c: 'onblur',
        d: 'onclick',
        correctAns: 'a'
    },

    {
        question: "Inside which HTML elements do we put the Javascript?",
        
        a: '<scripting>',
        b: '<js>',
        c: '<script>',
        d: '<javascript>',
        correctAns: 'c'
    },

    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        
        a: 'toUpperCase()',
        b: 'toUpper()',
        c: 'changeCase(case)',
        d: 'None of the Above',
        correctAns: 'a'
    },

    {
        question: "How to write an IF statement in JavaScript?",
        
        a: 'if i == 5 then',
        b: 'if (i == 5)',
        c: 'if i = 5',
        d: 'if i == 5 then',
        correctAns: 'b'
    },

    {
        question: "How do you write 'hello World' in an alert box?",
        
        a: 'msgBox("Hello World");',
        b: 'msg("Hello Word");',
        c: 'alertBox("Hellow World");',
        d: 'alert("Hello World");',
        correctAns: 'd'
    },

    {
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        
        a: 'the ? sign',
        b: 'the ! sign',
        c: 'the $ sign',
        d: 'the % sign',
        correctAns: 'c'
    },

    {
        question: "What does CSS stand for?",
        
        a: 'Creative Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Colorful Style Sheets',
        d: 'Computer Style Sheets',
        correctAns: 'b'
    },

    {
        question: "What scripting language is jQuery written in?",
        
        a: 'VBScript',
        b: 'C++',
        c: 'C#',
        d: 'JavaScript',
        correctAns: 'd'
    },

    {
        question: "Which HTML tag is used to define an internal style sheet?",
        
        a: 'style',
        b: 'class',
        c: 'font',
        d: 'styles',
        correctAns: 'a'
    }

]

questionEl.style.display = "none";

buttonA.style.display = "none";
buttonB.style.display = "none";
buttonC.style.display = "none";
buttonD.style.display = "none";

choiceA.style.display = "none";
choiceB.style.display = "none";
choiceC.style.display = "none";
choiceD.style.display = "none";

function timer() {

    timeCount = 300;
    
    var countDown = setInterval(function() {

        timerEl.textContent = timeCount + " Seconds Left";
        console.log("Seconds Left: " + timeCount)
        timeCount--;

        if (timeCount <= -1) {
            clearInterval(countDown);
            questionEl.style.display = "none";

            buttonA.style.display = "none";
            buttonB.style.display = "none";
            buttonC.style.display = "none";
            buttonD.style.display = "none";

            choiceA.style.display = "none";
            choiceB.style.display = "none";
            choiceC.style.display = "none";
            choiceD.style.display = "none";
        }

    }, 1000);
}

function checkAns() {
    if (answerChoice === quizQues[currentQ].correctAns) {
        console.log("Correct");
        currentQ++;
        score += 100;
        scoreEl.textContent = score;
        showQues();
    } else {
        timeCount -= 5;
        console.log("Wrong");
        
    }
}

// This function here is to display the question as well as display the nswer choices for each specific questions. 
// The function operates on an if statement, where if the current question passes the length of the array, it returns
// nothing or a blank question to signify the end of the quiz.
function showQues() {

    if (currentQ < quizQues.length) { 

        questionEl.textContent = quizQues[currentQ].question;
        choiceA.textContent = quizQues[currentQ].a;
        choiceB.textContent = quizQues[currentQ].b;
        choiceC.textContent = quizQues[currentQ].c;
        choiceD.textContent = quizQues[currentQ].d;

    } else {
        questionEl.textContent = "";
        choiceA.textContent = "";
        choiceB.textContent = "";
        choiceC.textContent = "";
        choiceD.textContent = "";
    }
}

// This event listener should be able to start the timer and display
// the questions and the answers for the quiz. 
startSwitch.addEventListener("click", function() {

    introEl.style.display = "none";

    questionEl.style.display = "block";

    buttonA.style.display = "block";
    buttonB.style.display = "block";
    buttonC.style.display = "block";
    buttonD.style.display = "block";
    
    choiceA.style.display = "block";
    choiceB.style.display = "block";
    choiceC.style.display = "block";
    choiceD.style.display = "block";
    timer();
    showQues();
});

// These event listeners' main function is to allow the user to select their answers. Once the
// answer is selected, there answer should be stored in an array that can then be compared to the
// real anaswers.
buttonA.addEventListener("click", function() {
    answerChoice = ("a");
    checkAns();
});
buttonB.addEventListener("click", function() {
    answerChoice = ("b");
    checkAns();
});
buttonC.addEventListener("click", function() {
    answerChoice = ("c");
    checkAns();
});
buttonD.addEventListener("click", function() {
    answerChoice = ("d");
    checkAns();
});

































































// This function will compile the answers from the database of questions
// It will use a for loop that will go down through the array and specifically pull each answer.
// function getAnswer () {

//     for (a = 0; a < quizQues.length; a++) {

//         quizAns.push(quizQues[a].correctAns);

//     }

//     return quizAns;
// }

// function timer () {
    
//     // Currently, the time limit is only 10 seconds but this can be adjusted.
//     timeCount = 11;
//     var countDown = setInterval(function() {
//         // console.log(timeCount);
//         timeCount --;
//         timerEl.textContent = timeCount + " seconds left";

//         if(timeCount === 0) {
//             clearInterval(countDown);
//             timerEl.textContent = "Time's Up!! You Lose!!";
//         }

//     }, 1000);
// }

// // This function here is to display the question as well as display theAnswer choices for those specific questions. 
// // Originally, I had it display the question in random order based on the length ofthe array. Now we should try to get 
// // it to go in the order of the array. 
// function showQues() {
//     currentQues.textContent = quizQues[current].question;
//     choiceA.textContent = quizQues[current].a;
//     choiceB.textContent = quizQues[current].b;
//     choiceC.textContent = quizQues[current].c;
//     choiceD.textContent = quizQues[current].d;

//     current++;
// }

// // This event listener should be able to start the timer and display
// // the questions and the answers for the quiz. 
// startSwitch.addEventListener("click", function() {
//     timer();
//     showQues();
// });

// // These event listeners' main function is to allow the user to select their answers. Once the
// // answer is selected, there answer should be stored in an array that can then be compared to the
// // real anaswers.
// buttonA.addEventListener("click", function() {
//     showQues();
//     answer = ("a");
//     console.log(answer);
// });
// buttonB.addEventListener("click", function() {
//     showQues();
//     answer = ("b");
//     console.log(answer);
// });
// buttonC.addEventListener("click", function() {
//     showQues();
//     answer = ("c");
//     console.log(answer);
// });
// buttonD.addEventListener("click", function() {
//     showQues();
//     answer = ("d");
//     console.log(answer);
// });

// console.log(quizQues[0].correctAns);

// // This function compares the answer of the the quiz answer and the answers that the user
// // creates when they select their choices and determines which is right and wrong.
// submitEl.addEventListener("click", function () {

//     getAnswer();

//     for (b = 0; b < answer.length; b++)  {

//         if (answer[b] === quizAns[b]) {
//             score++;
//         }
//     }
//     console.log(score);
// });


// if (answerChoice !== quizQues[current].correctAns) {
//     console.log("wrong answer");
// } else {
//     console.log("right answer");
// }