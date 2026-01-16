// Quiz System JavaScript

import { storage } from './storage.js';
import { getRandomQuestions } from '../data/questions.js';
import { initTheme, initNavigation } from './main.js';

let currentQuiz = {
    subject: 'biology',
    questions: [],
    currentIndex: 0,
    answers: [],
    startTime: null,
    endTime: null
};

// Initialize quiz page
function initQuiz() {
    initTheme();
    initNavigation();

    // Get subject from URL if provided
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');

    if (subject) {
        document.getElementById('subjectSelect').value = subject;
    }

    // Event listeners
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('retakeQuizBtn').addEventListener('click', resetQuiz);
}

// Start quiz
function startQuiz() {
    const subject = document.getElementById('subjectSelect').value;
    const count = parseInt(document.getElementById('questionCount').value);

    // Get random questions
    const questions = getRandomQuestions(subject, count);

    if (questions.length === 0) {
        alert('No questions available for this subject yet!');
        return;
    }

    // Initialize quiz
    currentQuiz = {
        subject,
        questions,
        currentIndex: 0,
        answers: new Array(questions.length).fill(null),
        startTime: new Date(),
        endTime: null
    };

    // Show quiz screen
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';

    // Update subject display
    const subjectNames = {
        biology: '🧬 Biology',
        chemistry: '⚗️ Chemistry',
        physics: '⚛️ Physics'
    };
    document.getElementById('quizSubject').textContent = subjectNames[subject];
    document.getElementById('totalQuestions').textContent = questions.length;

    // Load first question
    loadQuestion();

    // Start timer
    startTimer();
}

// Load question
function loadQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentIndex];

    // Update question number
    document.getElementById('currentQuestion').textContent = currentQuiz.currentIndex + 1;

    // Update question text
    document.getElementById('questionText').textContent = question.question;

    // Load options
    const optionsSection = document.getElementById('optionsSection');
    const letters = ['A', 'B', 'C', 'D'];

    optionsSection.innerHTML = question.options.map((option, index) => `
    <button class="option-btn ${currentQuiz.answers[currentQuiz.currentIndex] === index ? 'selected' : ''}" 
            onclick="selectOption(${index})">
      <span class="option-letter">${letters[index]}</span>
      <span class="option-text">${option}</span>
    </button>
  `).join('');

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuiz.currentIndex === 0;
    document.getElementById('nextBtn').textContent =
        currentQuiz.currentIndex === currentQuiz.questions.length - 1 ? 'Finish Quiz ✓' : 'Next →';
}

// Select option
window.selectOption = function (optionIndex) {
    currentQuiz.answers[currentQuiz.currentIndex] = optionIndex;
    loadQuestion();
};

// Previous question
function previousQuestion() {
    if (currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        loadQuestion();
    }
}

// Next question
function nextQuestion() {
    if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
        currentQuiz.currentIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Timer
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((new Date() - currentQuiz.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('quizTimer').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Finish quiz
function finishQuiz() {
    stopTimer();
    currentQuiz.endTime = new Date();

    // Calculate results
    let correctCount = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (currentQuiz.answers[index] === question.correct) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / currentQuiz.questions.length) * 100);
    const timeTaken = Math.floor((currentQuiz.endTime - currentQuiz.startTime) / 1000);

    // Save quiz result
    storage.addQuizResult({
        subject: currentQuiz.subject,
        score,
        correct: correctCount,
        total: currentQuiz.questions.length,
        timeTaken
    });

    // Award points
    storage.addPoints(correctCount * 5, 'Quiz completion');

    // Check for achievements
    if (score === 100) {
        storage.unlockAchievement('perfect_score');
    }

    const quizResults = storage.getQuizResults();
    if (quizResults.length === 1) {
        storage.unlockAchievement('first_quiz');
    }

    // Show results
    showResults(score, correctCount, timeTaken);
}

// Show results
function showResults(score, correctCount, timeTaken) {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';

    // Results icon and title based on score
    let icon, title;
    if (score >= 90) {
        icon = '🎉';
        title = 'Excellent!';
    } else if (score >= 70) {
        icon = '👏';
        title = 'Great Job!';
    } else if (score >= 50) {
        icon = '👍';
        title = 'Good Effort!';
    } else {
        icon = '📚';
        title = 'Keep Practicing!';
    }

    document.getElementById('resultsIcon').textContent = icon;
    document.getElementById('resultsTitle').textContent = title;

    // Stats
    document.getElementById('scorePercentage').textContent = `${score}%`;
    document.getElementById('correctAnswers').textContent = `${correctCount}/${currentQuiz.questions.length}`;

    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;

    // Breakdown
    const breakdown = document.getElementById('resultsBreakdown');
    breakdown.innerHTML = '<h3 class="mb-md">Question Breakdown</h3>' +
        currentQuiz.questions.map((question, index) => {
            const isCorrect = currentQuiz.answers[index] === question.correct;
            const letters = ['A', 'B', 'C', 'D'];

            return `
        <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="result-question">
            ${index + 1}. ${question.question}
          </div>
          <div class="result-answer">
            ${isCorrect ? '✓ Correct' : '✗ Incorrect'} - 
            Your answer: ${currentQuiz.answers[index] !== null ? letters[currentQuiz.answers[index]] : 'Not answered'} - 
            Correct answer: ${letters[question.correct]}
          </div>
        </div>
      `;
        }).join('');
}

// Reset quiz
function resetQuiz() {
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('quizSetup').style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);
