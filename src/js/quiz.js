document.addEventListener('DOMContentLoaded', loadQuiz);

const quizQuestions = [
    {
        question: "How do you typically react to stress?",
        options: [
            { text: "I become withdrawn.", type: "Type 1" },
            { text: "I seek help from others.", type: "Type 2" },
            { text: "I take charge of the situation.", type: "Type 3" }
        ]
    },
    // Additional questions can be added here
];

function loadQuiz() {
    const container = document.getElementById('quiz-container');
    quizQuestions.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.innerHTML = `
            <p>${item.question}</p>
            ${item.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option.type}">
                    ${option.text}
                </label>
            `).join('')}
        `;
        container.appendChild(questionBlock);
    });
}

function submitQuiz() {
    let results = {};
    quizQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            results[selected.value] = (results[selected.value] || 0) + 1;
        }
    });
    if (Object.keys(results).length < quizQuestions.length) {
        alert('Please answer all questions.');
        return;
    }
    calculateResults(results);
}

function calculateResults(results) {
    const highestScore = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    displayResults(highestScore);
}

function displayResults(type) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `You might be ${type}: [Detailed description for ${type}].`;
}
