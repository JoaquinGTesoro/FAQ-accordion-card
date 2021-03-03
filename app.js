/*==================
 Element Selectors
==================*/
const questionsSelector = document.querySelectorAll(".question-title");
const answers = document.querySelectorAll(".answer");
const container = document.querySelector(".container");
const boxImg = document.querySelector(".box-img")
const info = document.querySelector(".info");

/*================
 Event listeners
================*/

//event listener to open the question when enter is touched over the question
questionsSelector.forEach(question => question.addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        showAnswer (question.id, question);
    }
}));

//E.L. to open the question when is clicked
questionsSelector.forEach(question => {
    question.addEventListener('click', function show() {
        showAnswer(question.id, question);
    });
});

//E.L to move the container and the box when the .info is hover
document.addEventListener('mousemove', function checkHover() {
    questionsSelector.forEach(question => {
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
    })
});

/*==========
 Functions
===========*/

function showAnswer (questionId, questionElement) {
        answers[questionId - 1].classList.toggle("active");

        questionElement.children[0].classList.toggle("selected");
        questionElement.children[1].children[0].classList.toggle("selected");
}

//Function to check if is hover
const isHover = e => e.parentElement.querySelector(':hover') === e;