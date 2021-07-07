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

var highName = document.getElementById('finalName');
var highScore = document.getElementById('finalPoint');

// var nameInput = document.querySelector("#name");

// This variable will help determine which questions is being displayed. With it being
// zero, this is the first question that is going to be displayed.
var currentQ = 0;

score = 0;

var points = 100;

// This variable will determine the overall time to answer the questions.
var timeCount;

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
        question: "Which jQuery method returns the direct parent element of the selected element?",
        a: 'parents()',
        b: 'ancestors()',
        c: 'ancestor()',
        d: 'parent()',
        correctAns: 'd'
    },

    {
        question: "Which jQuery method should be used to deal with name conflicts?",
        a: 'nameConflict()',
        b: 'conflict()',
        c: 'noConflict()',
        d: 'noNameConflict()',
        correctAns: 'c'
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
        question: "Which jQuery method is used to hide selected elements?",
        a: 'visible(false)',
        b: 'display(none)',
        c: 'hide()',
        d: 'hidden()',
        correctAns: 'c'
    },

    {
        question: "The Bootstrap grid system is based on how many columns?",
        a: '12',
        b: '6',
        c: '9',
        d: '3',
        correctAns: 'a'
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
    },

    {
        question: "Which button class is used to create a large button?",
        a: '.btn-lg',
        b: '.btn-large',
        c: '.btn-l',
        d: '.btn-xl',
        correctAns: 'a'
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
        a: '<h6>',
        b: '<head>',
        c: '<heading>',
        d: '<h1>',
        correctAns: 'd'
    },

    {
        question: "Choose the correct HTML element to define important text",
        a: '<i>',
        b: '<b>',
        c: '<strong>',
        d: '<important>',
        correctAns: 'c'
    },

    {
        question: "What is the correct HTML for making a checkbox?",
        a: '<checkbox>',
        b: '<input type="checkbox">',
        c: '<check>',
        d: '<input type="check">',
        correctAns: 'b'
    },

    {
        question: "Choose the correct HTML element to define important text",
        a: 'Modal',
        b: 'Window',
        c: 'Dialog Box',
        d: 'Popup',
        correctAns: 'a'
    },

    {
        question: "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
        a: 'switchClass()',
        b: 'switch()',
        c: 'altClass()',
        d: 'toggleClass()',
        correctAns: 'd'
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

submitEl.disabled = true;

renderHighScore();

// This is the timer function.
function timer() {

    timeCount = 301;
    
    countDown = setInterval(function() {

        timeCount--;
        timerEl.textContent = timeCount + " Seconds Left";

        if (timeCount <= 0) {
            clearInterval(countDown);
            startSwitch.disabled = false;
            submitEl.disabled = false;
            questionEl.style.display = "none";

            buttonA.style.display = "none";
            buttonB.style.display = "none";
            buttonC.style.display = "none";
            buttonD.style.display = "none";

            choiceA.style.display = "none";
            choiceB.style.display = "none";
            choiceC.style.display = "none";
            choiceD.style.display = "none";

            introEl.textContent = "Game Over!! You Ran Out of Time! Try Again!!";
            introEl.style.display = "block";
        }

    }, 1000);
}

function checkAns() {

    if (answerChoice === quizQues[currentQ].correctAns) {
        currentQ++;
        score += points;
        scoreEl.textContent = score;
        showQues();
        points = 100;
    } else {
        timeCount -= 5;
        timerEl.textContent = timeCount + " Seconds Left";
        points/=2;
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

        clearInterval(countDown);
        submitEl.disabled = false;
        startSwitch.disabled = false;
        questionEl.textContent = "";
        choiceA.textContent = "";
        choiceB.textContent = "";
        choiceC.textContent = "";
        choiceD.textContent = "";

        buttonA.style.display = "none";
        buttonB.style.display = "none";
        buttonC.style.display = "none";
        buttonD.style.display = "none";
        
        introEl.textContent = "Congratulation!! The Quiz is Over!!";
        introEl.style.display = "block";

    }
}

//This prints the highscore in the highscore section
function renderHighScore() {

    var names = localStorage.getItem("name");
    var score2 = localStorage.getItem("point");

    highName.textContent = names;
    highScore.textContent = score2;
}

// This event listener should be able to start the timer and display
// the questions and the answers for the quiz. 
startSwitch.addEventListener("click", function() {

    submitEl.disabled = true;

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

    startSwitch.disabled = true;
    
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

// This is the submit button where you users can submit there scores once the quiz
// is over or they have finished taking the quiz. It should, also save the the name
// and score in the highscore section of the page. 

submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    submitEl.disabled = true;

    var name = document.querySelector("#name").value;
    var score1 = score.toString();

    localStorage.setItem("name", name);
    localStorage.setItem("point", score1);
    renderHighScore();
});
