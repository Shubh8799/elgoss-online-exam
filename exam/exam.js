let questions = [];
let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetchQuestions();
    
    document.getElementById('prev-btn').addEventListener('click', showPreviousQuestion);
    document.getElementById('next-btn').addEventListener('click', showNextQuestion);
});

function fetchQuestions() {
    fetch("./Question.Json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then((data) => {
            questions = data;
            displayQuestion(currentQuestionIndex);
        })
        .catch((err) => {
            console.log("Error loading data:", err);
            document.getElementById('question-text').textContent = "Failed to load questions.";
        });
}

function displayQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    
    const question = questions[index];
    const optionsContainer = document.getElementById('options-container');
    
    // Update question count
    document.getElementById('question-count').textContent = `Question ${index + 1}/${questions.length}`;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options with radio buttons
    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.innerHTML = `
            <input type="radio" name="Options" id="option-${i}" value="${option}">
            <label for="option-${i}">${option}</label><br>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update button states
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === questions.length - 1;
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function jump()
{
    //let btn=document.querySelector(".submit-btn");
    window.location.href="/Submitted/index.html";
}
