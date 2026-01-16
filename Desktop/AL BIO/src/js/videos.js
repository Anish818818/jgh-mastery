// Video Resources Page JavaScript

import { initTheme, initNavigation } from './main.js';
import { teachers, videos, getVideosBySubject, getVideosByTeacher, getTeacherById, searchVideos } from '../data/videos.js';

let currentFilter = {
    subject: 'all',
    teacher: 'all',
    search: ''
};

function initVideos() {
    initTheme();
    initNavigation();

    loadTeachers();
    loadVideos();

    // Event listeners
    document.getElementById('subjectFilter').addEventListener('change', (e) => {
        currentFilter.subject = e.target.value;
        filterVideos();
    });

    document.getElementById('teacherFilter').addEventListener('change', (e) => {
        currentFilter.teacher = e.target.value;
        filterVideos();
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentFilter.search = e.target.value;
        filterVideos();
    });

    // Load teachers into filter
    loadTeacherFilter();
}

function loadTeacherFilter() {
    const teacherFilter = document.getElementById('teacherFilter');
    teacherFilter.innerHTML = '<option value="all">All Teachers</option>' +
        teachers.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
}

function loadTeachers() {
    const teachersGrid = document.getElementById('teachersGrid');

    teachersGrid.innerHTML = teachers.map(teacher => `
    <div class="teacher-card" onclick="filterByTeacher('${teacher.id}')">
      <div class="teacher-avatar">${teacher.avatar}</div>
      <div class="teacher-name">${teacher.name}</div>
      <div class="teacher-name-si">${teacher.nameSi}</div>
      <div class="teacher-subject">${teacher.subject}</div>
      <div class="teacher-stats">
        📺 ${teacher.channel}<br>
        👥 ${teacher.subscribers} subscribers
      </div>
    </div>
  `).join('');
}

window.filterByTeacher = function (teacherId) {
    currentFilter.teacher = teacherId;
    document.getElementById('teacherFilter').value = teacherId;
    filterVideos();

    // Scroll to videos section
    document.querySelector('.videos-section').scrollIntoView({ behavior: 'smooth' });
};

function loadVideos() {
    renderVideos(videos);
}

function filterVideos() {
    let filteredVideos = videos;

    // Filter by subject
    if (currentFilter.subject !== 'all') {
        filteredVideos = filteredVideos.filter(v => v.subject === currentFilter.subject);
    }

    // Filter by teacher
    if (currentFilter.teacher !== 'all') {
        filteredVideos = filteredVideos.filter(v => v.teacher === currentFilter.teacher);
    }

    // Filter by search
    if (currentFilter.search) {
        const query = currentFilter.search.toLowerCase();
        filteredVideos = filteredVideos.filter(v =>
            v.title.toLowerCase().includes(query) ||
            v.titleSi.includes(currentFilter.search) ||
            v.description.toLowerCase().includes(query)
        );
    }

    renderVideos(filteredVideos);
}

function renderVideos(videoList) {
    const videosGrid = document.getElementById('videosGrid');

    if (videoList.length === 0) {
        videosGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <div class="empty-icon">🎥</div>
        <p>No videos found matching your criteria</p>
      </div>
    `;
        return;
    }

    videosGrid.innerHTML = videoList.map(video => {
        const teacher = getTeacherById(video.teacher);
        return `
      <div class="video-card" onclick="playVideo('${video.youtubeId}', '${video.title}')">
        <div class="video-thumbnail">
          <img src="${video.thumbnail}" alt="${video.title}" onerror="this.style.display='none'">
          <div class="video-play-icon">▶</div>
          <div class="video-duration">${video.duration}</div>
        </div>
        <div class="video-info">
          <div class="video-title">${video.title}</div>
          <div class="video-title-si">${video.titleSi}</div>
          <div class="video-meta">
            <span class="video-teacher-name">${teacher?.name || 'Unknown'}</span>
            <span class="video-views">👁 ${video.views}</span>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

window.playVideo = function (youtubeId, title) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'video-modal active';
    modal.innerHTML = `
    <div class="video-modal-content">
      <div class="video-modal-header">
        <h3>${title}</h3>
        <button class="video-modal-close" onclick="closeVideoModal()">✕</button>
      </div>
      <div class="video-modal-body">
        <iframe 
          src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;

    document.body.appendChild(modal);

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
};

window.closeVideoModal = function () {
    const modal = document.querySelector('.video-modal');
    if (modal) {
        modal.remove();
    }
};

document.addEventListener('DOMContentLoaded', initVideos);
