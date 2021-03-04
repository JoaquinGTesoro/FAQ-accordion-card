/*==================
 Element Selectors
==================*/
const questionsSelector = document.querySelectorAll(".question-title");
const answers = document.querySelectorAll(".answer");
const container = document.querySelector(".container");
const boxImg = document.querySelector(".box-img")
const info = document.querySelector(".info");
let actualQuestion = 1;

/*================
 Event listeners
================*/

//event listener to open the question when enter is touched over the question
questionsSelector.forEach(question => question.addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        console.log(question)
        showAnswer (question.parentElement.classList[1], question);
    }
}));

//E.L. to open the question when is clicked
questionsSelector.forEach(question => {
    question.addEventListener('click', function show() {
        showAnswer(question.parentElement.classList[1], question);
    });
});

//E.L to move the container and the box when the .info is hover
document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(info);
    if (hovered !== checkHover.hovered) {
        checkHover.hovered = hovered;  
        if (checkHover.hovered == true) {
            container.classList.toggle("move");
            boxImg.classList.toggle("move");    
        } else {
            if (container.classList.length == 3) {
                container.classList.toggle("move");
                boxImg.classList.toggle("move");    
            }
        }
    }
});

/*==========
 Functions
===========*/

function showAnswer (questionPosition, questionElement) {
    //Desactivate the open answer
    answers[actualQuestion].classList.toggle("active");
    questionsSelector[actualQuestion].children[0].classList.toggle("selected");
    questionsSelector[actualQuestion].children[1].children[0].classList.toggle("selected");
    //Open the new answer
    answers[questionPosition - 1].classList.toggle("active");
    questionElement.children[0].classList.toggle("selected");
    questionElement.children[1].children[0].classList.toggle("selected");
    //Assign new answer its position
    actualQuestion = questionPosition - 1;

}

//Function to check if is hover
const isHover = e => e.parentElement.querySelector(':hover') === e;
