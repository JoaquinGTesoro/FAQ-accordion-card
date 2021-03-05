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

questionsSelector.forEach((question, i) => {
    //event listener to open the question when enter is touched over the question
    question.addEventListener('keypress', function (e){
        if (e.key === 'Enter') {
            console.log(question)
            showAnswer (i, question);
        }
    })
    //E.L. to open the question when is clicked
    question.addEventListener('click', () => {
        showAnswer(i, question);
    })
    //E.L to move the container and the box when the title is hover
    question.addEventListener('mouseenter', () => {
        container.classList.add("move");
        boxImg.classList.add("move");
    })
    question.addEventListener('mouseleave', () => {
        container.classList.remove("move");
        boxImg.classList.remove("move");
    })    
})

/*==========
 Functions
===========*/

function showAnswer (questionPosition, questionElement) {
    //Desactivate the open answer
    answers[actualQuestion].classList.toggle("active");
    questionsSelector[actualQuestion].children[0].classList.toggle("selected");
    questionsSelector[actualQuestion].children[1].children[0].classList.toggle("selected");
    //Open the new answer
    answers[questionPosition].classList.toggle("active");
    questionElement.children[0].classList.toggle("selected");
    questionElement.children[1].children[0].classList.toggle("selected");
    //Assign new answer its position
    actualQuestion = questionPosition;
}
