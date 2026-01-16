// Main JavaScript for A/L Bio Learning Platform

import { storage } from './storage.js';
import { syllabus, getTotalTopics } from '../data/syllabus.js';

// Theme Management
function initTheme() {
    const user = storage.getUser();
    const theme = user?.theme || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButton(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    storage.updateUser({ theme: newTheme });
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Update topic count on home page
function updateTopicCount() {
    const topicCountEl = document.getElementById('topicCount');
    if (topicCountEl) {
        const totalTopics =
            getTotalTopics('biology') +
            getTotalTopics('chemistry') +
            getTotalTopics('physics');
        topicCountEl.textContent = totalTopics;
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fade in animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .feature-card, .subject-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    updateTopicCount();
    initSmoothScroll();
    initScrollAnimations();

    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Export functions for use in other pages
export {
    initTheme,
    toggleTheme,
    initNavigation
};
