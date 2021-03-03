const questionsSelector = document.querySelectorAll(".question-title");
const answers = document.querySelectorAll(".answer");
const container = document.querySelector(".container");
const boxImg = document.querySelector(".box-img")
const info = document.querySelector(".info");

//Function to check if is hover
const isHover = e => e.parentElement.querySelector(':hover') === e;

questionsSelector.forEach(question => question.addEventListener('click', function showAnswer(){
    let questionId = question.id;
    answers[questionId - 1].classList.toggle("active");

    question.children[0].classList.toggle("selected");
    question.children[1].children[0].classList.toggle("selected");
}));

document.addEventListener('mousemove', function checkHover() {
    questionsSelector.forEach(question => {
        const hovered = isHover(info);
        if (hovered !== checkHover.hovered) {
            checkHover.hovered = hovered;  
            console.log(hovered);
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

