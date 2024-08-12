// Array of quiz questions and options
const quizQuestions = [
    {
        question: "How do you typically react to stress?",
        options: ["I become withdrawn.", "I seek help from others.", "I take charge of the situation."],
        answer: 0 // Simplified for example; actual implementation may vary
    },
    // Additional questions can be added here
];

// Loads quiz questions and displays them on the page
function loadQuiz() {
    const container = document.getElementById('quiz-container');
    quizQuestions.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.innerHTML = `
            <p>${item.question}</p>
            ${item.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
        container.appendChild(questionBlock);
    });
}

// Submits the quiz, calculates results based on user inputs
function submitQuiz() {
    let results = quizQuestions.map((item, index) => {
        const inputs = document.getElementsByName(`question${index}`);
        let selected = Array.from(inputs).find(input => input.checked);
        return selected ? parseInt(selected.value) : -1;
    });
    calculateResults(results);
}

// Calculates quiz results and displays personalized feedback
function calculateResults(results) {
    const scores = results.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    const highestScore = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    displayResults(highestScore);
}

// Displays the results in a user-friendly format
function displayResults(result) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `You might be a Type ${result + 1}: detailed description here.`;
}

// Initialize quiz on document load
document.addEventListener('DOMContentLoaded', loadQuiz);
