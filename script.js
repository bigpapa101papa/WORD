function checkAnswer(button) {
    var correctAnswer = "Paris";
    var selectedAnswer = button.textContent;
    var feedback = document.getElementById("feedback");
    
    if (selectedAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "red";
    }
}
