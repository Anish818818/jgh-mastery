// Pomodoro Timer JavaScript

import { storage } from './storage.js';
import { initTheme, initNavigation } from './main.js';

let timerState = {
    isRunning: false,
    isWorkSession: true,
    timeRemaining: 25 * 60, // seconds
    totalTime: 25 * 60,
    interval: null
};

function initTimer() {
    initTheme();
    initNavigation();
    loadSettings();
    loadTodayStats();

    // Add SVG gradient
    const svg = document.querySelector('.timer-circle svg');
    svg.innerHTML = `
    <defs>
      <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:var(--color-physics-start);stop-opacity:1" />
        <stop offset="100%" style="stop-color:var(--color-biology-start);stop-opacity:1" />
      </linearGradient>
    </defs>
    ${svg.innerHTML}
  `;

    // Event listeners
    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
    document.getElementById('resetBtn').addEventListener('click', resetTimer);

    updateDisplay();
}

function loadSettings() {
    const settings = storage.getSettings();
    const workMinutes = settings.pomodoroWork || 25;

    timerState.timeRemaining = workMinutes * 60;
    timerState.totalTime = workMinutes * 60;
    updateDisplay();
}

function loadTodayStats() {
    const today = new Date().toDateString();
    const sessions = storage.getStudySessions(1).filter(s =>
        new Date(s.date).toDateString() === today
    );

    const totalMinutes = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);

    document.getElementById('sessionsCompleted').textContent = sessions.length;
    document.getElementById('totalMinutes').textContent = totalMinutes;
}

function startTimer() {
    if (timerState.isRunning) return;

    timerState.isRunning = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;

    timerState.interval = setInterval(() => {
        timerState.timeRemaining--;

        if (timerState.timeRemaining <= 0) {
            completeSession();
        }

        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    timerState.isRunning = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;

    if (timerState.interval) {
        clearInterval(timerState.interval);
    }
}

function resetTimer() {
    pauseTimer();
    loadSettings();
}

function completeSession() {
    pauseTimer();

    if (timerState.isWorkSession) {
        // Save study session
        const settings = storage.getSettings();
        const duration = settings.pomodoroWork || 25;

        storage.addStudySession({
            duration,
            type: 'pomodoro'
        });

        // Award points
        storage.addPoints(duration, 'Pomodoro session');

        // Switch to break
        const breakMinutes = settings.pomodoroBreak || 5;
        timerState.isWorkSession = false;
        timerState.timeRemaining = breakMinutes * 60;
        timerState.totalTime = breakMinutes * 60;

        alert('🎉 Work session complete! Time for a break!');
    } else {
        // Switch back to work
        const settings = storage.getSettings();
        const workMinutes = settings.pomodoroWork || 25;
        timerState.isWorkSession = true;
        timerState.timeRemaining = workMinutes * 60;
        timerState.totalTime = workMinutes * 60;

        alert('✨ Break complete! Ready for another work session?');
    }

    loadTodayStats();
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timerState.timeRemaining / 60);
    const seconds = timerState.timeRemaining % 60;

    document.getElementById('timerDisplay').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    document.getElementById('timerLabel').textContent =
        timerState.isWorkSession ? 'Work Session' : 'Break Time';

    // Update progress circle
    const progress = ((timerState.totalTime - timerState.timeRemaining) / timerState.totalTime) * 880;
    document.getElementById('timerProgress').style.strokeDashoffset = progress;
}

document.addEventListener('DOMContentLoaded', initTimer);
