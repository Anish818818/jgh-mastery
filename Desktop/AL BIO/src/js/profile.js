// Profile Page JavaScript

import { storage } from './storage.js';
import { initTheme, toggleTheme, initNavigation } from './main.js';

function initProfile() {
    initTheme();
    initNavigation();
    loadProfile();
    loadAchievements();
    loadSettings();

    // Event listeners
    document.getElementById('saveProfileBtn').addEventListener('click', saveProfile);
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('resetDataBtn').addEventListener('click', resetData);
}

function loadProfile() {
    const user = storage.getUser();

    document.getElementById('userName').value = user.name || '';
    if (document.getElementById('displayUserName')) {
        document.getElementById('displayUserName').textContent = user.name || 'Student';
    }
    document.getElementById('levelDisplay').textContent = user.level || 1;
    document.getElementById('pointsDisplay').textContent = user.totalPoints || 0;
    document.getElementById('streakDisplay').textContent = user.streak || 0;

    const quizResults = storage.getQuizResults();
    document.getElementById('quizzesDisplay').textContent = quizResults.length;
}

function saveProfile() {
    const name = document.getElementById('userName').value;
    storage.updateUser({ name });
    if (document.getElementById('displayUserName')) {
        document.getElementById('displayUserName').textContent = name || 'Student';
    }
    alert('Profile saved successfully! ✓');
}

function loadAchievements() {
    const achievements = storage.getAchievements();
    const achievementsGrid = document.getElementById('achievementsGrid');

    const achievementDefs = {
        'first_quiz': { icon: '🎯', name: 'First Quiz' },
        'first_topic_biology': { icon: '🧬', name: 'Bio Beginner' },
        'first_topic_chemistry': { icon: '⚗️', name: 'Chem Starter' },
        'first_topic_physics': { icon: '⚛️', name: 'Physics Fan' },
        'level_2': { icon: '⭐', name: 'Level 2' },
        'level_3': { icon: '⭐⭐', name: 'Level 3' },
        'level_5': { icon: '⭐⭐⭐', name: 'Level 5' },
        'streak_7': { icon: '🔥', name: '7 Day Streak' },
        'perfect_score': { icon: '💯', name: 'Perfect Score' }
    };

    if (achievements.length === 0) {
        achievementsGrid.innerHTML = '<div class="empty-state-small"><p>Complete activities to unlock achievements!</p></div>';
        return;
    }

    achievementsGrid.innerHTML = achievements.map(id => {
        const def = achievementDefs[id] || { icon: '🏆', name: id };
        return `
      <div class="achievement-item">
        <div class="achievement-icon">${def.icon}</div>
        <div class="achievement-name">${def.name}</div>
      </div>
    `;
    }).join('');
}

function loadSettings() {
    const settings = storage.getSettings();

    document.getElementById('dailyGoal').value = settings.dailyGoal || 120;
    document.getElementById('pomodoroWork').value = settings.pomodoroWork || 25;
    document.getElementById('pomodoroBreak').value = settings.pomodoroBreak || 5;
}

function saveSettings() {
    const settings = {
        dailyGoal: parseInt(document.getElementById('dailyGoal').value),
        pomodoroWork: parseInt(document.getElementById('pomodoroWork').value),
        pomodoroBreak: parseInt(document.getElementById('pomodoroBreak').value)
    };

    storage.updateSettings(settings);
    alert('Settings saved successfully! ✓');
}

function exportData() {
    storage.exportData();
    alert('Data exported successfully! ✓');
}

function resetData() {
    if (confirm('Are you sure you want to reset all data? This cannot be undone!')) {
        storage.clearData();
        alert('All data has been reset! ✓');
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', initProfile);
