const returnButton = document.querySelector('#return-img');
const quizButton = document.querySelector('#quiz-section');

returnButton.addEventListener('click', () => {
    window.location.href = "../../index.html";
});

quizButton.addEventListener('click', () => {
    window.location.href = "../pages/quiz.html";
});

