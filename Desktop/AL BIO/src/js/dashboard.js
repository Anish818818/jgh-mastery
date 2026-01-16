// Dashboard JavaScript

import { storage } from './storage.js';
import { syllabus, getTotalTopics } from '../data/syllabus.js';
import { initTheme, initNavigation } from './main.js';

// Initialize dashboard
function initDashboard() {
    initTheme();
    initNavigation();
    loadUserData();
    loadSubjectProgress();
    loadRecentActivity();
    loadStudyGoals();
}

// Load user data
function loadUserData() {
    const user = storage.getUser();

    // Update user name
    const userNameEl = document.getElementById('userName');
    if (userNameEl) {
        userNameEl.textContent = user.name || 'Student';
    }

    // Update stats
    document.getElementById('streakCount').textContent = user.streak || 0;
    document.getElementById('totalPoints').textContent = user.totalPoints || 0;
    document.getElementById('userLevel').textContent = user.level || 1;
}

// Load subject progress
function loadSubjectProgress() {
    const subjects = ['biology', 'chemistry', 'physics'];
    const prefixes = { biology: 'bio', chemistry: 'chem', physics: 'phy' };

    subjects.forEach(subject => {
        const prefix = prefixes[subject];
        const progress = storage.getProgress(subject);
        const totalTopics = getTotalTopics(subject);
        const completed = progress?.completed || 0;
        const percentage = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

        // Update topic counts
        document.getElementById(`${prefix}Completed`).textContent = completed;
        document.getElementById(`${prefix}Total`).textContent = totalTopics;
        document.getElementById(`${prefix}Percentage`).textContent = `${percentage}%`;

        // Update progress bar
        const progressBar = document.getElementById(`${prefix}Progress`);
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }

        // Update quiz stats
        const quizResults = storage.getQuizResults(subject);
        document.getElementById(`${prefix}Quizzes`).textContent = quizResults.length;

        // Calculate average score
        if (quizResults.length > 0) {
            const avgScore = quizResults.reduce((sum, result) => sum + result.score, 0) / quizResults.length;
            document.getElementById(`${prefix}AvgScore`).textContent = `${Math.round(avgScore)}%`;
        } else {
            document.getElementById(`${prefix}AvgScore`).textContent = '0%';
        }
    });
}

// Load recent activity
function loadRecentActivity() {
    const activityContainer = document.getElementById('recentActivity');
    const quizResults = storage.getQuizResults(null, 5); // Last 5 quizzes
    const studySessions = storage.getStudySessions(7); // Last 7 days

    // Combine and sort by date
    const activities = [
        ...quizResults.map(quiz => ({
            type: 'quiz',
            icon: '📝',
            title: `Completed ${quiz.subject} quiz`,
            subtitle: `Score: ${quiz.score}%`,
            date: new Date(quiz.date)
        })),
        ...studySessions.map(session => ({
            type: 'study',
            icon: '⏱️',
            title: `Study session`,
            subtitle: `${session.duration} minutes`,
            date: new Date(session.date)
        }))
    ].sort((a, b) => b.date - a.date).slice(0, 5);

    if (activities.length === 0) {
        activityContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📚</div>
        <p>No recent activity yet</p>
        <p class="text-secondary">Start learning to see your activity here!</p>
      </div>
    `;
        return;
    }

    activityContainer.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-icon">${activity.icon}</div>
      <div class="activity-content">
        <div class="activity-title">${activity.title}</div>
        <div class="activity-time">${activity.subtitle} • ${formatTimeAgo(activity.date)}</div>
      </div>
    </div>
  `).join('');
}

// Load study goals
function loadStudyGoals() {
    const settings = storage.getSettings();
    const dailyGoal = settings?.dailyGoal || 120;

    // Calculate today's study time
    const today = new Date().toDateString();
    const todaySessions = storage.getStudySessions(1).filter(session =>
        new Date(session.date).toDateString() === today
    );

    const studyMinutes = todaySessions.reduce((total, session) => total + (session.duration || 0), 0);
    const percentage = Math.min(Math.round((studyMinutes / dailyGoal) * 100), 100);

    document.getElementById('studyMinutes').textContent = studyMinutes;
    document.getElementById('goalMinutes').textContent = dailyGoal;

    const goalProgress = document.getElementById('goalProgress');
    if (goalProgress) {
        goalProgress.style.width = `${percentage}%`;
    }

    // Load achievements
    loadAchievements();
}

// Load achievements
function loadAchievements() {
    const achievementsContainer = document.getElementById('achievementsList');
    const achievements = storage.getAchievements();

    if (achievements.length === 0) {
        achievementsContainer.innerHTML = `
      <div class="empty-state-small">
        <p>Complete tasks to earn achievements!</p>
      </div>
    `;
        return;
    }

    // Achievement definitions
    const achievementDefs = {
        'first_quiz': { icon: '🎯', name: 'First Quiz' },
        'level_2': { icon: '⭐', name: 'Level 2' },
        'level_3': { icon: '⭐⭐', name: 'Level 3' },
        'streak_7': { icon: '🔥', name: '7 Day Streak' },
        'perfect_score': { icon: '💯', name: 'Perfect Score' }
    };

    achievementsContainer.innerHTML = achievements.slice(-3).map(id => {
        const def = achievementDefs[id] || { icon: '🏆', name: id };
        return `
      <div class="achievement-badge">
        <span class="achievement-icon">${def.icon}</span>
        <span>${def.name}</span>
      </div>
    `;
    }).join('');
}

// Format time ago
function formatTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return date.toLocaleDateString();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
