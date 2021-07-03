// Here are all the variables that need to be established
var testing = document.getElementById('scoreContainer');
var currentQues = document.getElementById('questions');
var choiceA = document.getElementById('choice0');
var choiceB = document.getElementById('choice1');
var choiceC = document.getElementById('choice2');
var choiceD = document.getElementById('choice3');

// These are the questions that will be used in the quiz.
// For now there are only three. More will be added. 
var quizQues = [
    {
        question: "HTML is what type of language?",
        a: 'Scripting Language',
        b: 'Markup Language',
        c: 'Programming Language',
        d: 'Network Protocol',
        correctAns: 'b'
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
        question: "What among the following is an appropriate when an event occurs when the user clicks on an element?",
        
        a: 'onchange',
        b: 'onkeyup',
        c: 'onblur',
        d: 'onclick',
        correctAns: 'a'
    }
]

console.log(quizQues[0].question);
console.log(quizQues[1].question);
console.log(quizQues[2].question);

function showQues() {

    currentQues.textContent = quizQues[1].question;
    choiceA.textContent = quizQues[1].a;
    choiceB.textContent = quizQues[1].b;
    choiceC.textContent = quizQues[1].c;
    choiceD.textContent = quizQues[1].d;

}

showQues();