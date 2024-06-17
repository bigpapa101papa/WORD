const quizData = [
    {
        question: "What does CPU stand for?",
        a: "Central Processing Unit",
        b: "Central Process Unit",
        c: "Computer Personal Unit",
        d: "Central Processor Unit",
        correct: "a",
    },
    {
        question: "What is the main function of the RAM?",
        a: "Store data permanently",
        b: "Execute commands",
        c: "Store data temporarily",
        d: "Display graphics",
        correct: "c",
    },
    {
        question: "Which component is considered the 'brain' of the computer?",
        a: "GPU",
        b: "CPU",
        c: "RAM",
        d: "HDD",
        correct: "b",
    },
    {
        question: "What does GPU stand for?",
        a: "Graphics Processing Unit",
        b: "General Processing Unit",
        c: "Graphical Performance Unit",
        d: "Graphics Performance Unit",
        correct: "a",
    },
    {
        question: "Which of the following is a type of storage device?",
        a: "CPU",
        b: "RAM",
        c: "SSD",
        d: "GPU",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function loadQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion) {
            if (letter !== 'question' && letter !== 'correct') {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion[letter]}
                    </label>`
                );
            }
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quiz.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

loadQuiz();

submitButton.addEventListener('click', showResults);




