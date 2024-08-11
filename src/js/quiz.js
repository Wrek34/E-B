const quizQuestions = [
    {
        question: "How do you typically react to stress?",
        options: ["I become withdrawn.", "I seek help from others.", "I take charge of the situation."],
        answer: 0 // This is an example; actual scoring might be more complex
    },
    // Add more questions as needed
];

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

function submitQuiz() {
    let results = quizQuestions.map((item, index) => {
        const inputs = document.getElementsByName(`question${index}`);
        let selected = Array.from(inputs).find(input => input.checked);
        return selected ? parseInt(selected.value) : -1;
    });
    calculateResults(results);
}

function calculateResults(results) {
    // Simple calculation; you might want to use a more complex algorithm
    const type = results.reduce((a, b) => a + b, 0) % 3; // Simplified scoring
    displayResults(type);
}

function displayResults(type) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `Your Enneagram type might be: Type ${type + 1}`;
}

document.addEventListener('DOMContentLoaded', loadQuiz);
