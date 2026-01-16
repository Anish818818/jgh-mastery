// Subject Page JavaScript

import { storage } from './storage.js';
import { syllabus, getTotalTopics } from '../data/syllabus.js';
import { initTheme, initNavigation } from './main.js';

// Get current subject from URL
function getCurrentSubject() {
    const path = window.location.pathname;
    if (path.includes('biology')) return 'biology';
    if (path.includes('chemistry')) return 'chemistry';
    if (path.includes('physics')) return 'physics';
    return 'biology';
}

// Initialize subject page
function initSubjectPage() {
    initTheme();
    initNavigation();

    const subject = getCurrentSubject();
    loadSubjectStats(subject);
    loadUnits(subject);
}

// Load subject statistics
function loadSubjectStats(subject) {
    const progress = storage.getProgress(subject);
    const totalTopics = getTotalTopics(subject);
    const completed = progress?.completed || 0;
    const percentage = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

    // Update stats
    document.getElementById('progressPercentage').textContent = `${percentage}%`;
    document.getElementById('completedTopics').textContent = completed;
    document.getElementById('totalTopics').textContent = totalTopics;

    // Quiz stats
    const quizResults = storage.getQuizResults(subject);
    document.getElementById('quizCount').textContent = quizResults.length;

    if (quizResults.length > 0) {
        const avgScore = quizResults.reduce((sum, result) => sum + result.score, 0) / quizResults.length;
        document.getElementById('avgScore').textContent = `${Math.round(avgScore)}%`;
    } else {
        document.getElementById('avgScore').textContent = '0%';
    }
}

// Load units and topics
function loadUnits(subject) {
    const subjectData = syllabus[subject];
    if (!subjectData) return;

    const progress = storage.getProgress(subject);
    const completedTopics = progress?.topics || {};

    const unitsContainer = document.getElementById('unitsContainer');

    unitsContainer.innerHTML = subjectData.units.map((unit, index) => {
        const completedCount = unit.topics.filter(topic => completedTopics[topic.id]).length;
        const totalCount = unit.topics.length;
        const unitProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        return `
      <div class="unit-card ${index === 0 ? 'expanded' : ''}" data-unit-id="${unit.id}">
        <div class="unit-header" onclick="toggleUnit('${unit.id}')">
          <div>
            <h3 class="unit-title">${unit.title}</h3>
            <p class="unit-progress">${completedCount}/${totalCount} topics completed (${unitProgress}%)</p>
          </div>
          <span class="unit-toggle">▼</span>
        </div>
        
        <div class="unit-topics">
          <div class="topics-list">
            ${unit.topics.map(topic => `
              <div class="topic-item ${completedTopics[topic.id] ? 'completed' : ''}" data-topic-id="${topic.id}">
                <div class="topic-checkbox" onclick="toggleTopicCompletion('${subject}', '${topic.id}')">
                  ${completedTopics[topic.id] ? '✓' : ''}
                </div>
                <span class="topic-name">${topic.title}</span>
                <div class="topic-actions">
                  <a href="/theory.html?subject=${subject}&topic=${topic.id}" class="topic-action-btn" title="Theory">
                    📖
                  </a>
                  <a href="/quiz.html?subject=${subject}&topic=${topic.id}" class="topic-action-btn" title="Quiz">
                    📝
                  </a>
                  <a href="/videos.html?subject=${subject}" class="topic-action-btn" title="Videos">
                    🎥
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    }).join('');
}

// Toggle unit expansion
window.toggleUnit = function (unitId) {
    const unitCard = document.querySelector(`[data-unit-id="${unitId}"]`);
    if (unitCard) {
        unitCard.classList.toggle('expanded');
    }
};

// Toggle topic completion
window.toggleTopicCompletion = function (subject, topicId) {
    const progress = storage.getProgress(subject);
    const isCompleted = progress?.topics?.[topicId] || false;

    // Toggle completion
    storage.updateTopicProgress(subject, topicId, !isCompleted);

    // Award points for completing a topic
    if (!isCompleted) {
        storage.addPoints(10, `Completed topic: ${topicId}`);

        // Check for achievements
        const newProgress = storage.getProgress(subject);
        if (newProgress.completed === 1) {
            storage.unlockAchievement(`first_topic_${subject}`);
        }
    }

    // Reload the page to reflect changes
    loadSubjectStats(subject);
    loadUnits(subject);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSubjectPage);
