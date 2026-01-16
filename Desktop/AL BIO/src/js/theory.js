// Theory/Notes Page JavaScript

import { initTheme, initNavigation } from './main.js';
import { syllabus } from '../data/syllabus.js';
import { getNoteByTopic, getNotesBySubject } from '../data/notes.js';

let currentSubject = 'biology';
let currentTopicId = null;
let allTopics = [];

function initTheory() {
    initTheme();
    initNavigation();

    // Get subject and topic from URL
    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get('subject') || 'biology';
    currentTopicId = urlParams.get('topic');

    loadTopicsList();

    if (currentTopicId) {
        loadTopic(currentTopicId);
    }
}

function loadTopicsList() {
    const subjectData = syllabus[currentSubject];
    if (!subjectData) return;

    // Flatten all topics
    allTopics = [];
    subjectData.units.forEach(unit => {
        unit.topics.forEach(topic => {
            allTopics.push({
                ...topic,
                unitTitle: unit.title
            });
        });
    });

    // Render topics list
    const topicsList = document.getElementById('topicsList');
    const notes = getNotesBySubject(currentSubject);

    topicsList.innerHTML = subjectData.units.map(unit => `
    <div class="unit-group">
      <div style="font-weight: 600; margin-bottom: 0.5rem; color: var(--color-text-secondary); font-size: 0.75rem; text-transform: uppercase;">
        ${unit.title}
      </div>
      ${unit.topics.map(topic => `
        <div class="topic-nav-item ${topic.id === currentTopicId ? 'active' : ''} ${notes[topic.id] ? '' : 'disabled'}" 
             onclick="loadTopicFromNav('${topic.id}')"
             style="${!notes[topic.id] ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
          ${topic.title} ${notes[topic.id] ? '' : '(Coming soon)'}
        </div>
      `).join('')}
    </div>
  `).join('');

    // Update subject link
    document.getElementById('subjectLink').href = `/${currentSubject}.html`;
    document.getElementById('subjectLink').textContent = subjectData.name;
    document.getElementById('subjectBadge').textContent = subjectData.name;
}

window.loadTopicFromNav = function (topicId) {
    const note = getNoteByTopic(currentSubject, topicId);
    if (!note) return;

    currentTopicId = topicId;
    loadTopic(topicId);

    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('topic', topicId);
    window.history.pushState({}, '', url);

    // Update active state
    document.querySelectorAll('.topic-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
};

function loadTopic(topicId) {
    const note = getNoteByTopic(currentSubject, topicId);
    if (!note) {
        document.getElementById('theoryBody').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <p>Notes for this topic are coming soon!</p>
      </div>
    `;
        return;
    }

    // Update title
    document.getElementById('contentTitle').textContent = note.titleSi || note.title;
    document.getElementById('topicName').textContent = note.titleSi || note.title;

    // Render content (convert markdown-like content to HTML)
    const contentHtml = renderMarkdown(note.content);
    document.getElementById('theoryBody').innerHTML = contentHtml;

    // Load diagrams
    if (note.diagrams && note.diagrams.length > 0) {
        const diagramsSection = document.getElementById('diagramsSection');
        diagramsSection.style.display = 'block';

        const diagramsGrid = document.getElementById('diagramsGrid');
        diagramsGrid.innerHTML = note.diagrams.map(diagram => `
      <div class="diagram-card">
        <div class="diagram-image">
          📊
        </div>
        <div class="diagram-info">
          <div class="diagram-title">${diagram.titleSi || diagram.title}</div>
          <div class="diagram-description">${diagram.description}</div>
        </div>
      </div>
    `).join('');
    } else {
        document.getElementById('diagramsSection').style.display = 'none';
    }

    // Update navigation buttons
    updateNavigation();
}

function renderMarkdown(content) {
    // Simple markdown-to-HTML converter
    let html = content
        .replace(/^# (.+)$/gm, '<h2>$1</h2>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^\|(.+)\|$/gm, (match) => {
            const cells = match.split('|').filter(c => c.trim());
            return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
        });

    return `<p>${html}</p>`;
}

function updateNavigation() {
    const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);

    const prevBtn = document.getElementById('prevTopicBtn');
    const nextBtn = document.getElementById('nextTopicBtn');

    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => loadTopicFromNav(allTopics[currentIndex - 1].id);
    } else {
        prevBtn.disabled = true;
    }

    if (currentIndex < allTopics.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => loadTopicFromNav(allTopics[currentIndex + 1].id);
    } else {
        nextBtn.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', initTheory);
